// src/services/email.js
import supabase from '../lib/supabase';

// Email templates
const NEW_MESSAGE_TEMPLATE = `
<div style="font-family: sans-serif;">
  <h2>新留言通知</h2>
  <p>留言人: {{name}}</p>
  <p>邮箱: {{email}}</p>
  <p>留言内容: {{message}}</p>
  <a href="{{dashboardUrl}}">查看详情</a>
</div>
`;

const REPLY_TEMPLATE = `
<div style="font-family: sans-serif;">
  <h2>收到回复</h2>
  <p>您的留言: {{originalMessage}}</p>
  <p>管理员回复: {{reply}}</p>
</div>
`;

// Replace template placeholders with actual content
const replaceTemplateVars = (template, variables) => {
  let result = template;
  Object.entries(variables).forEach(([key, value]) => {
    result = result.replace(`{{${key}}}`, value);
  });
  return result;
};

// Sanitize content for email
const sanitizeContent = (content) => {
  if (!content) return '';
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
};

class EmailService {
  static async sendNewMessageNotification(messageData) {
    try {
      // Prepare sanitized content
      const content = {
        name: sanitizeContent(messageData.name),
        email: sanitizeContent(messageData.email),
        message: sanitizeContent(messageData.message),
        dashboardUrl: `${window.location.origin}/admin`
      };

      // Call Edge Function
      const { error } = await supabase.functions.invoke('email-notification', {
        body: {
          type: 'new_message',
          content: content,
          template: replaceTemplateVars(NEW_MESSAGE_TEMPLATE, content)
        }
      });

      if (error) throw error;

      // Update notification status in database
      await supabase
        .from('messages_42e6rd_messages')
        .update({ notification_sent: true })
        .eq('id', messageData.id);

      return { success: true };
    } catch (error) {
      console.error('Failed to send new message notification:', error);
      return { success: false, error: error.message };
    }
  }

  static async sendReplyNotification(messageId, reply) {
    try {
      // Get original message
      const { data: message, error: fetchError } = await supabase
        .from('messages_42e6rd_messages')
        .select('*')
        .eq('id', messageId)
        .single();

      if (fetchError) throw fetchError;

      // Prepare sanitized content
      const content = {
        originalMessage: sanitizeContent(message.message),
        reply: sanitizeContent(reply)
      };

      // Call Edge Function
      const { error } = await supabase.functions.invoke('email-notification', {
        body: {
          type: 'reply',
          content: content,
          template: replaceTemplateVars(REPLY_TEMPLATE, content),
          recipient: message.email
        }
      });

      if (error) throw error;

      // Update reply status in database
      await supabase
        .from('messages_42e6rd_messages')
        .update({ 
          admin_reply: reply,
          reply_notification_sent: true 
        })
        .eq('id', messageId);

      return { success: true };
    } catch (error) {
      console.error('Failed to send reply notification:', error);
      return { success: false, error: error.message };
    }
  }
}

export default EmailService;
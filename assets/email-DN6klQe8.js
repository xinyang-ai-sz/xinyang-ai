import{s as a}from"./index-0PlzxsOE.js";const m=`
<div style="font-family: sans-serif;">
  <h2>新留言通知</h2>
  <p>留言人: {{name}}</p>
  <p>邮箱: {{email}}</p>
  <p>留言内容: {{message}}</p>
  <a href="{{dashboardUrl}}">查看详情</a>
</div>
`,p=`
<div style="font-family: sans-serif;">
  <h2>收到回复</h2>
  <p>您的留言: {{originalMessage}}</p>
  <p>管理员回复: {{reply}}</p>
</div>
`,l=(r,t)=>{let e=r;return Object.entries(t).forEach(([s,n])=>{e=e.replace(`{{${s}}}`,n)}),e},i=r=>r?r.replace(/</g,"&lt;").replace(/>/g,"&gt;").trim():"";class d{static async sendNewMessageNotification(t){try{const e={name:i(t.name),email:i(t.email),message:i(t.message),dashboardUrl:`${window.location.origin}/admin`},{error:s}=await a.functions.invoke("email-notification",{body:{type:"new_message",content:e,template:l(m,e)}});if(s)throw s;return await a.from("messages_42e6rd_messages").update({notification_sent:!0}).eq("id",t.id),{success:!0}}catch(e){return console.error("Failed to send new message notification:",e),{success:!1,error:e.message}}}static async sendReplyNotification(t,e){try{const{data:s,error:n}=await a.from("messages_42e6rd_messages").select("*").eq("id",t).single();if(n)throw n;const o={originalMessage:i(s.message),reply:i(e)},{error:c}=await a.functions.invoke("email-notification",{body:{type:"reply",content:o,template:l(p,o),recipient:s.email}});if(c)throw c;return await a.from("messages_42e6rd_messages").update({admin_reply:e,reply_notification_sent:!0}).eq("id",t),{success:!0}}catch(s){return console.error("Failed to send reply notification:",s),{success:!1,error:s.message}}}}export{d as default};

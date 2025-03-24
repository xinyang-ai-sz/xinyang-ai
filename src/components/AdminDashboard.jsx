import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import supabase from '../lib/supabase';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      let query = supabase
        .from('messages_42e6rd_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (search) {
        query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,message.ilike.%${search}%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      setMessages(data);
    } catch (error) {
      setError('Failed to fetch messages');
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setTimeout(() => {
      fetchMessages();
    }, 500);
  };

  const handleReply = async (messageId) => {
    if (!replyText.trim()) {
      toast.error('Please enter a reply');
      return;
    }

    try {
      const { default: EmailService } = await import('../services/email');
      const { success, error } = await EmailService.sendReplyNotification(messageId, replyText);
      
      if (!success) {
        throw new Error(error || 'Failed to send email notification');
      }

      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === messageId ? { ...msg, admin_reply: replyText } : msg
        )
      );
      
      setReplyText('');
      setReplyingTo(null);
      
      toast.success('Reply sent successfully with email notification');
    } catch (error) {
      console.error('Error handling reply:', error);
      toast.error(error.message || 'Failed to send reply');
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={handleSearch}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-sm text-gray-500">
          Total: {messages.length} messages
        </div>
      </div>

      <div className="grid gap-4">
        {messages.map((message) => (
          <div key={message.id} className="p-4 border rounded-lg bg-white shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">{message.name}</h3>
                <p className="text-sm text-gray-600">{message.email}</p>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(message.created_at).toLocaleString()}
              </div>
            </div>
            <p className="mb-4 text-gray-800">{message.message}</p>
            
            {message.admin_reply && (
              <div className="mb-4 pl-4 border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-gray-700">Admin Reply:</p>
                <p className="text-gray-600">{message.admin_reply}</p>
              </div>
            )}

            {replyingTo === message.id ? (
              <div className="mt-2">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply..."
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => handleReply(message.id)}
                    className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Reply
                  </button>
                  <button
                    onClick={() => {
                      setReplyingTo(null);
                      setReplyText('');
                    }}
                    className="px-4 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              !message.admin_reply && (
                <button
                  onClick={() => setReplyingTo(message.id)}
                  className="mt-2 px-4 py-1 text-sm text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Reply
                </button>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

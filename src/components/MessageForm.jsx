// src/components/MessageForm.jsx
import React, { useState } from 'react'
import supabase from '../lib/supabase'
import { validateMessage } from '../utils/validation'
import EdgeFunctionCaller from '../services/edgeFunctions'

export default function MessageForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    const validation = validateMessage(formData)
    if (!validation.isValid) {
      setStatus({ type: 'error', message: validation.error })
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase
        .from('MyMessages')
        .insert([{
          Name: formData.name,
          Email: formData.email,
          Message: formData.message
        }])

      if (error) throw error

      // Send email notification
      const emailResult = await EdgeFunctionCaller.invokeEmailNotification('new_message', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      })

      if (!emailResult.success) {
        console.error('Failed to send email notification:', emailResult.error)
      }

      setStatus({ 
        type: 'success', 
        message: '留言发送成功！我们会尽快与您联系。' 
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: '留言发送失败，请稍后重试。' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">联系我们</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            姓名
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            电子邮箱
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            留言内容
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {status.message && (
          <div className={`mb-4 p-3 rounded ${
            status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {status.message}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
            loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {loading ? '发送中...' : '发送留言'}
        </button>
      </form>
    </div>
  )
}
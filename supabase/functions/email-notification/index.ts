// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/getting_started/setup_your_environment

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'one.ding@outlook.com'

interface EmailPayload {
  type: 'new_message' | 'reply' | 'test'
  content: {
    name: string
    email: string
    message: string
  }
  timestamp: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { pathname } = new URL(req.url)
    
    // Test endpoint
    if (pathname === '/test') {
      if (!RESEND_API_KEY) {
        throw new Error('Missing RESEND_API_KEY')
      }

      const testResult = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Message System <notifications@resend.dev>',
          to: ADMIN_EMAIL,
          subject: 'Test Email Notification',
          text: `This is a test email from the message system.
Admin Email: ${ADMIN_EMAIL}
Timestamp: ${new Date().toISOString()}`,
        }),
      })

      const data = await testResult.json()
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Test email sent', 
          adminEmail: ADMIN_EMAIL,
          data 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Handle regular email notifications
    const payload: EmailPayload = await req.json()
    const { type, content } = payload

    if (!RESEND_API_KEY) {
      throw new Error('Missing RESEND_API_KEY')
    }

    // Prepare email content based on type
    let subject, text, to

    if (type === 'new_message') {
      to = ADMIN_EMAIL
      subject = `New Message from ${content.name}`
      text = `New message received:

From: ${content.name}
Email: ${content.email}
Message: ${content.message}`
    } else if (type === 'reply') {
      to = content.email
      subject = 'Response to Your Message'
      text = `Dear ${content.name},

${content.message}

Best regards,
Support Team`
    } else {
      throw new Error('Invalid notification type')
    }

    // Send email using Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Message System <notifications@resend.dev>',
        to,
        subject,
        text,
      }),
    })

    const data = await res.json()

    return new Response(
      JSON.stringify(data),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})

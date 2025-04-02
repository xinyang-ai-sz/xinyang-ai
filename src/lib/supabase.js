// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://gpbcdqrqofvrulsczndg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwYmNkcXJxb2Z2cnVsc2N6bmRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NTI1MTMsImV4cCI6MjA1ODAyODUxM30.rehbiEF_zL6cJjXJ90xIjbwABZhzywg5OJD5ue2Takw'
)

export default supabase
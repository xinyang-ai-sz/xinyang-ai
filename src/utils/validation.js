// src/utils/validation.js
export const validateMessage = (data) => {
  const { name, email, message } = data

  if (!name || !email || !message) {
    return {
      isValid: false,
      error: 'All fields are required'
    }
  }

  if (name.length < 2) {
    return {
      isValid: false,
      error: 'Name must be at least 2 characters long'
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address'
    }
  }

  if (message.length < 10) {
    return {
      isValid: false,
      error: 'Message must be at least 10 characters long'
    }
  }

  if (message.length > 1000) {
    return {
      isValid: false,
      error: 'Message cannot exceed 1000 characters'
    }
  }

  return {
    isValid: true,
    error: null
  }
}
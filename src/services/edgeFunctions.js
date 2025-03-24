// src/services/edgeFunctions.js
import supabase from '../lib/supabase';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

class EdgeFunctionCaller {
  static async callWithRetry(functionName, payload, retryCount = 0) {
    try {
      const { data, error } = await supabase.functions.invoke(functionName, {
        body: payload
      });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error(`Edge function call failed (attempt ${retryCount + 1}):`, error);

      if (retryCount < MAX_RETRIES) {
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (retryCount + 1)));
        return this.callWithRetry(functionName, payload, retryCount + 1);
      }

      return {
        success: false,
        error: error.message || 'Failed to call edge function',
        details: {
          functionName,
          attempts: retryCount + 1,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  static async invokeEmailNotification(type, content) {
    const payload = {
      type,
      content,
      timestamp: new Date().toISOString()
    };

    const result = await this.callWithRetry('email-notification', payload);

    // Log failures for monitoring
    if (!result.success) {
      console.error('Email notification failed:', {
        type,
        error: result.error,
        details: result.details
      });
    }

    return result;
  }
}

export default EdgeFunctionCaller;
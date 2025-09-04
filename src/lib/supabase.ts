import { createClient, Session, AuthChangeEvent } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Check if we're using placeholder values
const isPlaceholder = supabaseUrl === 'https://placeholder.supabase.co' || supabaseAnonKey === 'placeholder-key'

if (isPlaceholder) {
  console.warn('Using placeholder Supabase configuration. Authentication features will be limited.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: !isPlaceholder,
    persistSession: !isPlaceholder,
    detectSessionInUrl: !isPlaceholder
  }
})

// Email authentication functions
export const signUpWithEmail = async (email: string, password: string, userData?: Record<string, unknown>) => {
  if (isPlaceholder) {
    throw new Error('Authentication is not configured. Please set up Supabase environment variables.')
  }
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData
    }
  })
  
  if (error) {
    console.error('Error signing up:', error)
    throw error
  }
  
  return data
}

export const signInWithEmail = async (email: string, password: string) => {
  if (isPlaceholder) {
    throw new Error('Authentication is not configured. Please set up Supabase environment variables.')
  }
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  
  if (error) {
    console.error('Error signing in:', error)
    throw error
  }
  
  return data
}

export const signOut = async () => {
  if (isPlaceholder) {
    // Just return success for placeholder mode
    return
  }
  
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    console.error('Error signing out:', error)
    throw error
  }
}

export const getCurrentUser = () => {
  if (isPlaceholder) {
    return Promise.resolve({ data: { user: null }, error: null })
  }
  return supabase.auth.getUser()
}

export const onAuthStateChange = (callback: (event: AuthChangeEvent, session: Session | null) => void) => {
  if (isPlaceholder) {
    // Return a dummy subscription object
    return {
      data: { subscription: null },
      unsubscribe: () => {}
    }
  }
  return supabase.auth.onAuthStateChange(callback)
}

export const resetPassword = async (email: string) => {
  if (isPlaceholder) {
    throw new Error('Authentication is not configured. Please set up Supabase environment variables.')
  }
  
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  })
  
  if (error) {
    console.error('Error sending reset email:', error)
    throw error
  }
  
  return data
}

// Export the placeholder status for other components to check
export { isPlaceholder }

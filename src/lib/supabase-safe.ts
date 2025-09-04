import { createClient, Session, AuthChangeEvent } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if we're in development mode
const isDevelopment = import.meta.env.DEV
const isProduction = import.meta.env.PROD

// Mock Supabase client for production when env vars are missing
const createMockSupabaseClient = () => {
  return {
    auth: {
      signUp: async () => ({ data: null, error: new Error('Authentication not configured') }),
      signInWithPassword: async () => ({ data: null, error: new Error('Authentication not configured') }),
      signOut: async () => ({ error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    },
    from: () => ({
      select: () => ({ data: [], error: null }),
      insert: () => ({ data: null, error: new Error('Database not configured') }),
      update: () => ({ data: null, error: new Error('Database not configured') }),
      delete: () => ({ data: null, error: new Error('Database not configured') })
    })
  }
}

// Create Supabase client or mock client
export const supabase = (() => {
  if (!supabaseUrl || !supabaseAnonKey) {
    if (isDevelopment) {
      console.error('Missing Supabase environment variables. Please check your .env.local file.')
      console.error('Required variables: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY')
      throw new Error('Missing Supabase environment variables')
    }
    
    if (isProduction) {
      console.warn('Supabase not configured in production. Using mock client.')
      return createMockSupabaseClient()
    }
  }
  
  return createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  })
})()

// Email authentication functions
export const signUpWithEmail = async (email: string, password: string, userData?: Record<string, unknown>) => {
  try {
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
  } catch (error) {
    console.error('Authentication service not available:', error)
    throw new Error('Authentication service is currently unavailable')
  }
}

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (error) {
      console.error('Error signing in:', error)
      throw error
    }
    
    return data
  } catch (error) {
    console.error('Authentication service not available:', error)
    throw new Error('Authentication service is currently unavailable')
  }
}

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error('Error signing out:', error)
      throw error
    }
  } catch (error) {
    console.error('Sign out error:', error)
    // Don't throw error for sign out in production
  }
}

export const getCurrentSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('Error getting session:', error)
      return null
    }
    
    return session
  } catch (error) {
    console.error('Session service not available:', error)
    return null
  }
}

export const onAuthStateChange = (callback: (event: AuthChangeEvent, session: Session | null) => void) => {
  try {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(callback)
    return subscription
  } catch (error) {
    console.error('Auth state change listener not available:', error)
    return { unsubscribe: () => {} }
  }
}

// SMS authentication functions
export const signUpWithPhone = async (phone: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      phone,
      password
    })
    
    if (error) {
      console.error('Error signing up with phone:', error)
      throw error
    }
    
    return data
  } catch (error) {
    console.error('Phone authentication not available:', error)
    throw new Error('Phone authentication is currently unavailable')
  }
}

export const signInWithPhone = async (phone: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      phone,
      password
    })
    
    if (error) {
      console.error('Error signing in with phone:', error)
      throw error
    }
    
    return data
  } catch (error) {
    console.error('Phone authentication not available:', error)
    throw new Error('Phone authentication is currently unavailable')
  }
}

export const verifyOtp = async (phone: string, token: string) => {
  try {
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token,
      type: 'sms'
    })
    
    if (error) {
      console.error('Error verifying OTP:', error)
      throw error
    }
    
    return data
  } catch (error) {
    console.error('OTP verification not available:', error)
    throw new Error('OTP verification is currently unavailable')
  }
}

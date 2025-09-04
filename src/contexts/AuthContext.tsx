import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session, AuthChangeEvent } from '@supabase/supabase-js'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  isAdmin: boolean
  signOut: () => Promise<void>
  isSupabaseConfigured: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [supabaseAvailable, setSupabaseAvailable] = useState(true)

  // Admin email configuration
  const ADMIN_EMAILS = [
    'adnan.m.alqasmi@gmail.com',
    'ahmedalkasbi52@gmail.com'
  ]
  
  // Check if current user is admin
  const isAdmin = user?.email ? ADMIN_EMAILS.includes(user.email) : false

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Dynamic import to handle missing Supabase gracefully
        const { supabase, isPlaceholder } = await import('../lib/supabase')
        
        if (isPlaceholder) {
          console.warn('Supabase is not configured. Authentication features will be limited.')
          setSupabaseAvailable(false)
          setLoading(false)
          return null
        }
        
        // Get initial session
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          console.error('Error getting session:', error)
        } else {
          setSession(session)
          setUser(session?.user ?? null)
        }

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event: AuthChangeEvent, session: Session | null) => {
            console.log('Auth event:', event, session)
            setSession(session)
            setUser(session?.user ?? null)
          }
        )

        setLoading(false)
        return subscription
      } catch (error) {
        console.error('Supabase not available:', error)
        setSupabaseAvailable(false)
        setLoading(false)
        return null
      }
    }

    let subscription: any = null
    initializeAuth().then((sub) => {
      subscription = sub
    })

    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [])

  const signOut = async () => {
    try {
      if (supabaseAvailable) {
        const { supabase } = await import('../lib/supabase')
        const { error } = await supabase.auth.signOut()
        if (error) {
          console.error('Error signing out:', error)
        }
      }
      setUser(null)
      setSession(null)
    } catch (error) {
      console.error('Error signing out:', error)
      // Still clear local state even if Supabase signout fails
      setUser(null)
      setSession(null)
    }
  }

  const value: AuthContextType = {
    user,
    session,
    loading,
    isAdmin,
    signOut,
    isSupabaseConfigured: supabaseAvailable
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

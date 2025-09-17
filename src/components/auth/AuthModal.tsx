import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { EmailAuth } from './EmailAuth'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const handleAuthSuccess = () => {
    onSuccess?.()
    onClose()
  }

  const handleAuthError = (error: string) => {
    console.error('Authentication error:', error)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden" dir="rtl">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/5 via-accent-gold/5 to-primary-navy/5" />
          
          {/* Content */}
          <div className="relative p-6">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-primary-navy via-accent-gold to-primary-navy bg-clip-text text-transparent mb-2">
                نيكسو
              </DialogTitle>
              <p className="text-center text-sm text-muted-foreground">
                السوق الرقمي المتميز لدول الخليج
              </p>
            </DialogHeader>
            
            <div className="mt-6">
              <EmailAuth 
                onSuccess={handleAuthSuccess}
                onError={handleAuthError}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

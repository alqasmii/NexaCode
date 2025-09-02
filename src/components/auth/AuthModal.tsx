import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PhoneAuth } from './PhoneAuth'
import { EmailAuth } from './EmailAuth'
import { Smartphone, Mail } from 'lucide-react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [authMethod, setAuthMethod] = useState<'phone' | 'email'>('phone')

  const handleAuthSuccess = () => {
    onSuccess?.()
    onClose()
  }

  const handleAuthError = (error: string) => {
    console.error('Authentication error:', error)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Nexo Codes نيكسو كودز
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={authMethod} onValueChange={(value) => setAuthMethod(value as 'phone' | 'email')} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="phone" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              هاتف / Phone
            </TabsTrigger>
            <TabsTrigger value="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              بريد / Email
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="phone" className="mt-6">
            <PhoneAuth 
              onSuccess={handleAuthSuccess}
              onError={handleAuthError}
            />
          </TabsContent>
          
          <TabsContent value="email" className="mt-6">
            <EmailAuth 
              onSuccess={handleAuthSuccess}
              onError={handleAuthError}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { sendPhoneOTP, verifyPhoneOTP } from '@/lib/supabase'
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js'

interface PhoneAuthProps {
  onSuccess?: () => void
  onError?: (error: string) => void
}

export const PhoneAuth: React.FC<PhoneAuthProps> = ({ onSuccess, onError }) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!phoneNumber) {
      setError('يرجى إدخال رقم الهاتف / Please enter phone number')
      return
    }

    // Validate phone number
    if (!isValidPhoneNumber(phoneNumber)) {
      setError('رقم الهاتف غير صحيح / Invalid phone number format')
      return
    }

    try {
      setLoading(true)
      setError('')
      
      // Parse and format phone number
      const parsedPhone = parsePhoneNumber(phoneNumber)
      const formattedPhone = parsedPhone?.format('E.164')
      
      if (!formattedPhone) {
        throw new Error('Invalid phone number format')
      }

      await sendPhoneOTP(formattedPhone)
      setPhoneNumber(formattedPhone)
      setStep('otp')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'حدث خطأ / An error occurred'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!otp || otp.length !== 6) {
      setError('يرجى إدخال رمز التحقق المكون من 6 أرقام / Please enter 6-digit verification code')
      return
    }

    try {
      setLoading(true)
      setError('')
      
      await verifyPhoneOTP(phoneNumber, otp)
      onSuccess?.()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'رمز التحقق غير صحيح / Invalid verification code'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleBackToPhone = () => {
    setStep('phone')
    setOtp('')
    setError('')
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          {step === 'phone' ? 'تسجيل الدخول' : 'تأكيد الرقم'}
        </CardTitle>
        <CardDescription>
          {step === 'phone' 
            ? 'ادخل رقم هاتفك للحصول على رمز التحقق / Enter your phone number to get verification code'
            : 'ادخل رمز التحقق المرسل إلى هاتفك / Enter the verification code sent to your phone'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {step === 'phone' ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div>
              <Label htmlFor="phone">رقم الهاتف / Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+966501234567"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="text-left"
                dir="ltr"
              />
              <p className="text-sm text-muted-foreground mt-1">
                مثال: +966501234567 / Example: +966501234567
              </p>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'جاري الإرسال...' : 'إرسال رمز التحقق / Send Code'}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div>
              <Label htmlFor="otp">رمز التحقق / Verification Code</Label>
              <Input
                id="otp"
                type="text"
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="text-center text-2xl tracking-widest"
                maxLength={6}
              />
              <p className="text-sm text-muted-foreground mt-1">
                تم إرسال الرمز إلى {phoneNumber} / Code sent to {phoneNumber}
              </p>
            </div>
            <div className="space-y-2">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'جاري التحقق...' : 'تأكيد / Verify'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full" 
                onClick={handleBackToPhone}
                disabled={loading}
              >
                تغيير الرقم / Change Number
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

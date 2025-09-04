import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { resetPassword } from '@/lib/supabase'
import { ArrowLeft, Mail, CheckCircle, Loader2 } from 'lucide-react'

interface ForgotPasswordProps {
  onBack: () => void
  onSuccess?: () => void
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack, onSuccess }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('يرجى إدخال عنوان البريد الإلكتروني / Please enter your email address')
      return
    }

    try {
      setLoading(true)
      setError('')
      
      await resetPassword(email)
      setSuccess(true)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'فشل في إرسال رابط إعادة التعيين / Failed to send reset link'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="w-full border-0 shadow-none">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-xl font-semibold">
            تم الإرسال بنجاح! / Email Sent!
          </CardTitle>
          <CardDescription className="text-sm">
            تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني
            <br />
            Password reset link has been sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              📧 تحقق من صندوق الوارد الخاص بك (وملف الرسائل غير المرغوب فيها)
              <br />
              Check your inbox (and spam folder)
            </p>
          </div>
          
          <div className="space-y-2">
            <Button
              onClick={onBack}
              variant="outline"
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              العودة لتسجيل الدخول / Back to Sign In
            </Button>
            
            <Button
              onClick={() => {
                setEmail('')
                setSuccess(false)
                setError('')
              }}
              variant="ghost"
              className="w-full text-sm"
            >
              إرسال مرة أخرى / Send Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-semibold">
          إعادة تعيين كلمة المرور / Reset Password
        </CardTitle>
        <CardDescription className="text-sm">
          أدخل عنوان بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين
          <br />
          Enter your email address and we'll send you a reset link
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription className="text-sm">{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reset-email" className="text-sm font-medium">
              البريد الإلكتروني / Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="reset-email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-11 text-left"
                dir="ltr"
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Button
              type="submit"
              className="w-full h-11 text-sm font-medium bg-gradient-to-r from-primary-navy to-primary-navy/90 hover:from-primary-navy/90 hover:to-primary-navy"
              disabled={loading || !email}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                'إرسال رابط إعادة التعيين / Send Reset Link'
              )}
            </Button>

            <Button
              type="button"
              onClick={onBack}
              variant="ghost"
              className="w-full text-sm"
              disabled={loading}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              العودة لتسجيل الدخول / Back to Sign In
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { signInWithEmail, signUpWithEmail } from '@/lib/supabase'
import { ForgotPassword } from './ForgotPassword'
import { useLanguage } from '@/hooks/useLanguage'
import { Eye, EyeOff, Mail, Lock, User, CheckCircle, XCircle, Loader2 } from 'lucide-react'

interface EmailAuthProps {
  onSuccess?: () => void
  onError?: (error: string) => void
}

export const EmailAuth: React.FC<EmailAuthProps> = ({ onSuccess, onError }) => {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  // Password validation
  const validatePassword = (password: string) => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    }
    return requirements
  }

  const passwordRequirements = validatePassword(password)
  const isPasswordValid = Object.values(passwordRequirements).every(Boolean)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError(t('error.fillFields'))
      return
    }

    try {
      setLoading(true)
      setError('')
      setSuccess('')
      
      await signInWithEmail(email, password)
      setSuccess(t('success.signedIn'))
      setTimeout(() => {
        onSuccess?.()
      }, 1000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'فشل في تسجيل الدخول / Sign in failed'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !password || !confirmPassword || !fullName) {
      setError(t('error.fillFields'))
      return
    }

    if (password !== confirmPassword) {
      setError(t('error.passwordMismatch'))
      return
    }

    if (!isPasswordValid) {
      setError(t('error.passwordRequirements'))
      return
    }

    try {
      setLoading(true)
      setError('')
      setSuccess('')
      
      await signUpWithEmail(email, password, {
        full_name: fullName
      })
      setSuccess(t('success.accountCreated'))
      setTimeout(() => {
        onSuccess?.()
      }, 2000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : t('error.signupFailed')
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const PasswordRequirement = ({ met, text }: { met: boolean; text: string }) => (
    <div className={`flex items-center text-xs ${met ? 'text-green-600' : 'text-muted-foreground'}`}>
      {met ? <CheckCircle className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
      {text}
    </div>
  )

  if (showForgotPassword) {
    return (
      <ForgotPassword
        onBack={() => setShowForgotPassword(false)}
        onSuccess={() => setShowForgotPassword(false)}
      />
    )
  }

  return (
    <Card className="w-full border-0 shadow-none">
      <CardContent className="p-0">
        {(error || success) && (
          <Alert variant={error ? "destructive" : "default"} className={`mb-4 ${success ? 'border-green-200 bg-green-50 text-green-800' : ''}`}>
            <AlertDescription className="text-sm">{error || success}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="signin" className="text-sm font-medium">
              {t('nav.signIn')}
            </TabsTrigger>
            <TabsTrigger value="signup" className="text-sm font-medium">
              {t('nav.register')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email" className="text-sm font-medium">
                  {t('auth.email')}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder={t('placeholder.email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11 text-left"
                    dir="ltr"
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="signin-password" className="text-sm font-medium">
                    {t('auth.password')}
                  </Label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-xs text-accent-gold hover:underline"
                    disabled={loading}
                  >
                    {t('auth.forgotPassword')}
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signin-password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t('placeholder.password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-11 text-left"
                    dir="ltr"
                    disabled={loading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 text-sm font-medium bg-gradient-to-r from-primary-navy to-primary-navy/90 hover:from-primary-navy/90 hover:to-primary-navy" 
                disabled={loading || !email || !password}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t('auth.signingIn')}
                  </>
                ) : (
                  t('nav.signIn')
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">{t('auth.or')}</span>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              {t('auth.noAccount')}{' '}
              <button
                type="button"
                className="text-accent-gold hover:underline font-medium"
                onClick={() => {
                  const signupTab = document.querySelector('[value="signup"]') as HTMLElement
                  signupTab?.click()
                }}
              >
                {t('auth.createAccount')}
              </button>
            </p>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-sm font-medium">
                  {t('auth.fullName')}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder={t('placeholder.fullName')}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-10 h-11"
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-sm font-medium">
                  {t('auth.email')}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder={t('placeholder.email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11 text-left"
                    dir="ltr"
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-sm font-medium">
                  {t('auth.password')}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t('placeholder.createPassword')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-11 text-left"
                    dir="ltr"
                    disabled={loading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                
                {password && (
                  <div className="space-y-1 p-3 bg-muted/30 rounded-lg border">
                    <p className="text-xs font-medium text-muted-foreground mb-2">
                      {t('password.requirements')}
                    </p>
                    <PasswordRequirement met={passwordRequirements.length} text={t('password.length')} />
                    <PasswordRequirement met={passwordRequirements.uppercase} text={t('password.uppercase')} />
                    <PasswordRequirement met={passwordRequirements.lowercase} text={t('password.lowercase')} />
                    <PasswordRequirement met={passwordRequirements.number} text={t('password.number')} />
                    <PasswordRequirement met={passwordRequirements.special} text={t('password.special')} />
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-sm font-medium">
                  {t('auth.confirmPassword')}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder={t('placeholder.confirmPassword')}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 pr-10 h-11 text-left"
                    dir="ltr"
                    disabled={loading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={loading}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-red-600">كلمات المرور غير متطابقة / Passwords do not match</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 text-sm font-medium bg-gradient-to-r from-accent-gold to-accent-gold/90 hover:from-accent-gold/90 hover:to-accent-gold text-accent-gold-foreground" 
                disabled={loading || !email || !password || !confirmPassword || !fullName || !isPasswordValid || password !== confirmPassword}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t('auth.creatingAccount')}
                  </>
                ) : (
                  t('auth.createAccount')
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">{t('auth.or')}</span>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              {t('auth.haveAccount')}{' '}
              <button
                type="button"
                className="text-primary-navy hover:underline font-medium"
                onClick={() => {
                  const signinTab = document.querySelector('[value="signin"]') as HTMLElement
                  signinTab?.click()
                }}
              >
                {t('nav.signIn')}
              </button>
            </p>

            <div className="mt-4 p-3 bg-muted/30 rounded-lg border">
              <p className="text-xs text-muted-foreground text-center">
                {t('auth.termsText')}{' '}
                <span className="text-accent-gold hover:underline cursor-pointer">{t('auth.terms')}</span>
                {' '}{t('auth.and')}{' '}
                <span className="text-accent-gold hover:underline cursor-pointer">{t('auth.privacy')}</span>
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

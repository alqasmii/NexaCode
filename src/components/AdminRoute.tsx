import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AdminRouteProps {
  children: React.ReactNode;
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user, loading, isAdmin } = useAuth();

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Verifying permissions...
          </p>
        </div>
      </div>
    );
  }

  // If not logged in, redirect to home
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If logged in but not admin, show access denied
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 flex items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-2xl border-red-200 dark:border-red-800">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-red-100 dark:bg-red-900 p-3 rounded-full w-fit mb-4">
              <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-red-800 dark:text-red-200">
              Access Denied
            </CardTitle>
            <CardDescription className="text-red-600 dark:text-red-400">
              You are not authorized to access this page
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <Lock className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700 dark:text-red-300">
                This area is restricted to authorized administrators only. Please contact support if you believe this is an error.
              </AlertDescription>
            </Alert>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span>Current user: </span>
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                  {user.email}
                </code>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                For admin access, please contact the system administrator
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="w-full"
                variant="outline"
              >
                Return to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // If admin, render the admin dashboard
  return <>{children}</>;
};

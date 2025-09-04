import { useState } from 'react';
import { Search, ShoppingCart, User, Globe, Menu, X, LogOut, UserCheck, Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import ThemeToggle from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { AuthModal } from '@/components/auth/AuthModal';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/hooks/useLanguage';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, loading, signOut, isAdmin } = useAuth();
  const { t, language } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const categories = [
    { name: t('category.apps'), href: '/apps' },
    { name: t('category.subscriptions'), href: '/subscriptions' },
    { name: t('category.gaming'), href: '/gaming' },
    { name: t('category.codes'), href: '/codes' },
    { name: t('category.services'), href: '/services' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-navy text-primary-navy-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <p>{t('nav.welcome')}</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                {t('nav.language')}
              </span>
              <span>{t('nav.support')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-cairo font-bold text-primary-navy dark:text-accent-gold hover:opacity-80 transition-opacity">
              {language === 'ar' ? 'نيكسو كودز' : 'Nexo Codes'}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="text-foreground hover:text-accent-gold transition-colors font-medium"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md flex-1 mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={t('nav.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-0 focus:ring-2 focus:ring-accent-gold"
              />
            </form>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            {user && (
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs flex items-center justify-center bg-red-500 text-white">
                  2
                </Badge>
              </Button>
            )}
            
            {/* Shopping Cart */}
            <Button variant="ghost" size="sm" className="relative" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs flex items-center justify-center bg-accent-gold text-accent-gold-foreground">
                  0
                </Badge>
              </Link>
            </Button>
            
            <LanguageToggle />
            <ThemeToggle />
            
            {/* User Authentication */}
            {loading ? (
              <div className="animate-pulse bg-muted rounded-full h-8 w-8"></div>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || user.email} />
                      <AvatarFallback>
                        {user.user_metadata?.full_name 
                          ? user.user_metadata.full_name.charAt(0).toUpperCase()
                          : user.email?.charAt(0).toUpperCase()
                        }
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.user_metadata?.full_name || 'User'}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email || user.phone}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="flex items-center">
                          <Shield className="mr-2 h-4 w-4 text-blue-600" />
                          <span className="font-medium text-blue-600">Admin Dashboard</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <UserCheck className="mr-2 h-4 w-4" />
                      <span>{t('nav.profile')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders" className="flex items-center">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      <span>{t('nav.orders')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t('nav.signOut')}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hidden md:flex"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  <User className="h-4 w-4 mr-2" />
                  {t('nav.signIn')}
                </Button>
                <Button 
                  size="sm" 
                  variant="hero" 
                  className="hidden md:flex"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  {t('nav.register')}
                </Button>
              </>
            )}
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent-gold text-accent-gold-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t('nav.search')}
              className="pl-10 bg-muted border-0"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="text-foreground hover:text-accent-gold transition-colors font-medium py-2"
                >
                  {category.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {user ? (
                  <>
                    <div className="flex items-center space-x-3 px-3 py-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || user.email} />
                        <AvatarFallback>
                          {user.user_metadata?.full_name 
                            ? user.user_metadata.full_name.charAt(0).toUpperCase()
                            : user.email?.charAt(0).toUpperCase()
                          }
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">
                          {user.user_metadata?.full_name || 'User'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {user.email || user.phone}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" className="justify-start">
                      <UserCheck className="h-4 w-4 mr-2" />
                      {t('nav.profile')}
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={signOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      {t('nav.signOut')}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="justify-start"
                      onClick={() => {
                        setIsAuthModalOpen(true)
                        setIsMenuOpen(false)
                      }}
                    >
                      <User className="h-4 w-4 mr-2" />
                      {t('nav.signIn')}
                    </Button>
                    <Button 
                      variant="hero"
                      onClick={() => {
                        setIsAuthModalOpen(true)
                        setIsMenuOpen(false)
                      }}
                    >
                      {t('nav.register')}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {
          setIsAuthModalOpen(false)
          setIsMenuOpen(false)
        }}
      />
    </nav>
  );
};

export default Navigation;

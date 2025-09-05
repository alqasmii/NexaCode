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
    { name: t('category.products'), href: '/products' },
    { name: t('category.services'), href: '/services' },
    { name: t('category.plus'), href: '/apps' },
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
          <div className={`hidden md:flex items-center space-x-8 ${language === 'ar' ? 'mr-16 space-x-reverse' : 'ml-16'}`}>
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="text-foreground hover:text-accent-gold transition-colors font-medium whitespace-nowrap"
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
                <DropdownMenuContent className="w-64 p-2 bg-background/95 backdrop-blur-md border shadow-lg" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal p-3 bg-muted/50 rounded-md mb-2">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm font-semibold leading-none text-foreground">
                        {user.user_metadata?.full_name || 'User'}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground break-all">
                        {user.email || user.phone}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-2" />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild className="p-3 bg-blue-50/50 dark:bg-blue-950/50 rounded-md">
                        <Link to="/admin" className="flex items-center w-full">
                          <Shield className={`h-4 w-4 text-blue-600 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                          <span className="font-medium text-blue-600">{t('admin.dashboard.title')}</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="my-1" />
                    </>
                  )}
                  <DropdownMenuItem asChild className="p-3 hover:bg-accent/50 rounded-md">
                    <Link to="/profile" className="flex items-center w-full">
                      <UserCheck className={`h-4 w-4 text-foreground ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                      <span className="text-foreground">{t('nav.profile')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-3 hover:bg-accent/50 rounded-md">
                    <Link to="/orders" className="flex items-center w-full">
                      <ShoppingCart className={`h-4 w-4 text-foreground ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                      <span className="text-foreground">{t('nav.orders')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2" />
                  <DropdownMenuItem onClick={signOut} className="p-3 hover:bg-red-50/50 dark:hover:bg-red-950/50 rounded-md text-red-600 dark:text-red-400">
                    <LogOut className={`h-4 w-4 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
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
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="text-foreground hover:text-accent-gold transition-colors font-medium py-2 px-3 rounded-md hover:bg-accent/20"
                >
                  {category.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {user ? (
                  <>
                    <div className={`flex items-center px-3 py-3 bg-muted/30 rounded-lg ${language === 'ar' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || user.email} />
                        <AvatarFallback>
                          {user.user_metadata?.full_name 
                            ? user.user_metadata.full_name.charAt(0).toUpperCase()
                            : user.email?.charAt(0).toUpperCase()
                          }
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate text-foreground">
                          {user.user_metadata?.full_name || 'User'}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {user.email || user.phone}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" className={`justify-start p-3 hover:bg-accent/30 text-foreground ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <UserCheck className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {t('nav.profile')}
                    </Button>
                    <Button variant="ghost" className={`justify-start p-3 hover:bg-red-50/50 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 ${language === 'ar' ? 'flex-row-reverse' : ''}`} onClick={signOut}>
                      <LogOut className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {t('nav.signOut')}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className={`justify-start p-3 hover:bg-accent/30 text-foreground ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                      onClick={() => {
                        setIsAuthModalOpen(true)
                        setIsMenuOpen(false)
                      }}
                    >
                      <User className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {t('nav.signIn')}
                    </Button>
                    <Button 
                      variant="hero"
                      className="p-3 bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground"
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

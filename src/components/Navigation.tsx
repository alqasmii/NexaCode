import { useState } from 'react';
import { Search, ShoppingCart, User, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Apps', href: '/apps' },
    { name: 'Subscriptions', href: '/subscriptions' },
    { name: 'Gaming', href: '/gaming' },
    { name: 'Codes', href: '/codes' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-navy text-primary-navy-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <p>🎉 Welcome to Nexa Codes - Premium Digital Marketplace for the GCC</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                العربية | English
              </span>
              <span>📞 Support: +968 9999 0000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-cairo font-bold text-primary-navy dark:text-accent-gold">
              نكسا كودز
              <span className="text-accent-gold mx-2">•</span>
              Nexa Codes
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="text-foreground hover:text-accent-gold transition-colors font-medium"
              >
                {category.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md flex-1 mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for apps, games, codes..."
                className="pl-10 bg-muted border-0 focus:ring-2 focus:ring-accent-gold"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" variant="hero" className="hidden md:flex">
              Register
            </Button>
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
              placeholder="Search for apps, games, codes..."
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
                <a
                  key={category.name}
                  href={category.href}
                  className="text-foreground hover:text-accent-gold transition-colors font-medium py-2"
                >
                  {category.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button variant="hero">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

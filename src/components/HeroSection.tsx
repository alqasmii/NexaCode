import { ChevronLeft, ChevronRight, Star, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Digital Products",
      subtitle: "للشرق الأوسط ودول الخليج",
      description: "Discover the largest collection of digital products, apps, and services tailored for the GCC market.",
      cta: "Explore Now",
      badge: "🎉 New Arrivals"
    },
    {
      title: "Gaming Paradise",
      subtitle: "عالم الألعاب الرقمية",
      description: "Access premium gaming accounts, in-game currencies, and exclusive gaming content.",
      cta: "Shop Gaming",
      badge: "🎮 Gaming Hub"
    },
    {
      title: "Business Solutions",
      subtitle: "حلول الأعمال الرقمية",
      description: "Professional software subscriptions and business tools for enterprises across the GCC.",
      cta: "View Business",
      badge: "💼 For Business"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level security for all purchases"
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Digital products delivered immediately"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only verified, high-quality products"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80" 
          alt="Nexo Codes Digital Marketplace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-medium mb-6 animate-fade-in">
              {slides[currentSlide].badge}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-cairo font-bold text-primary-navy-foreground mb-4 animate-slide-in-up">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl lg:text-2xl font-cairo text-accent-gold mb-4 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              {slides[currentSlide].subtitle}
            </p>
            
            <p className="text-lg text-primary-navy-foreground/90 mb-8 max-w-lg mx-auto lg:mx-0 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" variant="accent" className="text-lg px-8">
                {slides[currentSlide].cta}
              </Button>
              <Button size="lg" variant="outline" className="border-primary-navy-foreground text-primary-navy-foreground hover:bg-primary-navy-foreground hover:text-primary-navy">
                Watch Demo
              </Button>
            </div>

            {/* Slide Navigation */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={prevSlide}
                className="text-primary-navy-foreground hover:bg-primary-navy-foreground/20"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-accent-gold' 
                        : 'bg-primary-navy-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={nextSlide}
                className="text-primary-navy-foreground hover:bg-primary-navy-foreground/20"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="premium-card p-6 animate-slide-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-accent-gold/20 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-success" />
              SSL Secured
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent-gold" />
              4.9/5 Rating
            </span>
            <span>🏆 Trusted by 50,000+ customers across GCC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

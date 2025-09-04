import { ChevronLeft, ChevronRight, Star, Shield, Zap, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWatchDemoOpen, setIsWatchDemoOpen] = useState(false);

  const slides = [
    {
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      description: t('hero.slide1.description'),
      cta: t('hero.slide1.cta'),
      badge: t('hero.slide1.badge')
    },
    {
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      description: t('hero.slide2.description'),
      cta: t('hero.slide2.cta'),
      badge: t('hero.slide2.badge')
    },
    {
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      description: t('hero.slide3.description'),
      cta: t('hero.slide3.cta'),
      badge: t('hero.slide3.badge')
    }
  ];

  const features = [
    {
      icon: Shield,
      title: t('hero.feature1.title'),
      description: t('hero.feature1.description')
    },
    {
      icon: Zap,
      title: t('hero.feature2.title'),
      description: t('hero.feature2.description')
    },
    {
      icon: Star,
      title: t('hero.feature3.title'),
      description: t('hero.feature3.description')
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
    <>
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
              <Link to="/apps">
                <Button size="lg" variant="accent" className="text-lg px-8 hover:scale-105 transition-all duration-300">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  {slides[currentSlide].cta}
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-navy-foreground text-primary-navy-foreground hover:bg-primary-navy-foreground hover:text-primary-navy hover:scale-105 transition-all duration-300"
                onClick={() => {
                  setIsWatchDemoOpen(true);
                  toast({
                    title: "Demo Video",
                    description: "Opening platform demonstration video...",
                  });
                }}
              >
                <Play className="h-5 w-5 mr-2" />
                {t('hero.watchDemo')}
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
                    title={`Go to slide ${index + 1}`}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all hover:scale-110 ${
                      index === currentSlide 
                        ? 'bg-accent-gold' 
                        : 'bg-primary-navy-foreground/30 hover:bg-primary-navy-foreground/50'
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
              {t('hero.sslSecured')}
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent-gold" />
              {t('hero.rating')}
            </span>
            <span>{t('hero.trustedBy')}</span>
          </div>
        </div>
      </div>
    </section>

    {/* Watch Demo Modal */}
    <Dialog open={isWatchDemoOpen} onOpenChange={setIsWatchDemoOpen}>
      <DialogContent className="max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-cairo font-bold">
            {t('hero.watchDemo')} - NexaCode Platform
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Play className="h-16 w-16 text-accent-gold mx-auto mb-4" />
            <p className="text-lg font-semibold mb-2">Platform Demo Video</p>
            <p className="text-muted-foreground">
              See how easy it is to buy and manage your digital products
            </p>
            <Button 
              variant="accent" 
              className="mt-4"
              onClick={() => {
                toast({
                  title: "Demo Video",
                  description: "This feature will be available soon! Video player integration coming up.",
                  duration: 3000,
                });
              }}
            >
              <Play className="h-4 w-4 mr-2" />
              Play Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default HeroSection;

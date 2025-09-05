import { ChevronLeft, ChevronRight, Star, Shield, Zap, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t, language } = useLanguage();
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
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <motion.div 
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-32 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-500/25 to-purple-600/25 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Geometric shapes */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400 rotate-45"
          animate={{
            rotate: [45, 135, 45],
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Floating lines */}
        <motion.div 
          className="absolute top-1/2 left-1/12 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:60px_60px]" />
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-400/30 text-cyan-300 rounded-full text-sm font-medium mb-6"
            >
              ✨ {slides[currentSlide].badge}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-cairo font-bold text-white mb-4 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl lg:text-2xl font-cairo text-cyan-300 mb-4"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {slides[currentSlide].description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/apps">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group overflow-hidden text-lg"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center">
                    {language === 'ar' ? (
                      <>
                        {slides[currentSlide].cta}
                        <ArrowRight className="h-5 w-5 ml-2 rotate-180" />
                      </>
                    ) : (
                      <>
                        <ArrowRight className="h-5 w-5 mr-2" />
                        {slides[currentSlide].cta}
                      </>
                    )}
                  </span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-300 font-semibold rounded-xl backdrop-blur-sm hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 text-lg flex items-center justify-center"
                onClick={() => {
                  setIsWatchDemoOpen(true);
                  toast({
                    title: t('hero.demoSubtitle'),
                    description: t('hero.demoToastMessage'),
                  });
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  {language === 'ar' ? (
                    <>
                      <span>{t('hero.watchDemo')}</span>
                      <Play className="h-5 w-5 flex-shrink-0" />
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 flex-shrink-0" />
                      <span>{t('hero.watchDemo')}</span>
                    </>
                  )}
                </span>
              </motion.button>
            </motion.div>

            {/* Slide Navigation - Simple Dots Only */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  title={`Go to slide ${index + 1}`}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-4 h-4 rounded-full transition-all hover:scale-110 ${
                    index === currentSlide 
                      ? 'bg-accent-gold shadow-lg' 
                      : 'bg-primary-navy-foreground/30 hover:bg-primary-navy-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="premium-card p-6">
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
              </motion.div>
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
            {t('hero.demoTitle')}
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Play className="h-16 w-16 text-accent-gold mx-auto mb-4" />
            <p className="text-lg font-semibold mb-2">{t('hero.demoSubtitle')}</p>
            <p className="text-muted-foreground">
              {t('hero.demoDescription')}
            </p>
            <Button 
              variant="accent" 
              className="mt-4"
              onClick={() => {
                toast({
                  title: t('hero.demoSubtitle'),
                  description: t('hero.demoToastMessage'),
                  duration: 3000,
                });
              }}
            >
              <Play className="h-4 w-4 mr-2" />
              {t('hero.playDemo')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default HeroSection;

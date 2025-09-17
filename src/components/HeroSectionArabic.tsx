import { ChevronLeft, ChevronRight, Star, Shield, Zap, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWatchDemoOpen, setIsWatchDemoOpen] = useState(false);

  const slides = [
    {
      title: 'نيكسو',
      subtitle: 'أفضل منصة للمنتجات الرقمية',
      description: 'احصل على أفضل الاشتراكات والألعاب والخدمات الرقمية بأسعار مميزة وضمان مدى الحياة',
      cta: 'تسوق الآن',
      badge: 'الأكثر مبيعاً'
    },
    {
      title: 'اشتراكات مميزة',
      subtitle: 'Netflix, Spotify, Disney+ والمزيد',
      description: 'استمتع بأفضل منصات البث والترفيه بأسعار لا تقاوم وتفعيل فوري',
      cta: 'تصفح الاشتراكات',
      badge: 'توصيل فوري'
    },
    {
      title: 'ألعاب رقمية',
      subtitle: 'Steam, PlayStation, Xbox وأكثر',
      description: 'أحدث الألعاب وبطاقات الهدايا لجميع المنصات بضمان التفعيل',
      cta: 'استكشف الألعاب',
      badge: 'ضمان التفعيل'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'ضمان مدى الحياة',
      description: 'جميع منتجاتنا مضمونة مدى الحياة مع دعم فني على مدار الساعة'
    },
    {
      icon: Zap,
      title: 'تفعيل فوري',
      description: 'احصل على منتجاتك خلال دقائق من إتمام عملية الشراء'
    },
    {
      icon: Star,
      title: 'أعلى جودة',
      description: 'منتجات أصلية ومضمونة من مصادر موثوقة'
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

  const handleWatchDemo = () => {
    setIsWatchDemoOpen(true);
    toast({
      title: "فيديو تجريبي",
      description: "يتم تشغيل الفيديو التوضيحي",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-primary-navy">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 text-center lg:text-right">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 ml-2 fill-current" />
              {slides[currentSlide].badge}
            </motion.div>

            {/* Title */}
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-accent-gold mb-6 font-medium"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                variant="hero"
                className="text-lg px-8 py-3 bg-accent-gold hover:bg-accent-gold/90 text-black font-bold"
                asChild
              >
                <Link to="/products">
                  {slides[currentSlide].cta}
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white/20 text-white hover:bg-white/10"
                onClick={handleWatchDemo}
              >
                <Play className="mr-2 h-5 w-5" />
                شاهد الفيديو
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-8 mt-12 text-center"
            >
              <div>
                <div className="text-2xl font-bold text-accent-gold">+50,000</div>
                <div className="text-sm text-gray-400">عميل راضي</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-gold">+10,000</div>
                <div className="text-sm text-gray-400">منتج رقمي</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-gold">4.9/5</div>
                <div className="text-sm text-gray-400">تقييم العملاء</div>
              </div>
            </motion.div>
          </div>

          {/* Features Cards */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent-gold/20">
                      <feature.icon className="w-6 h-6 text-accent-gold" />
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="font-semibold text-white text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="text-white hover:bg-white/10 rounded-full p-2"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`الذهاب إلى الشريحة ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-accent-gold' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="text-white hover:bg-white/10 rounded-full p-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Demo Video Dialog */}
      <Dialog open={isWatchDemoOpen} onOpenChange={setIsWatchDemoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>فيديو توضيحي - نيكسا كود</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">الفيديو التوضيحي سيتم إضافته قريباً</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
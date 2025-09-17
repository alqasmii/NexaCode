import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSectionArabic';
import CategorySection from '@/components/CategorySectionArabic';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FloatingNavIndicator from '@/components/FloatingNavIndicator';

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const checkReducedMotion = () => {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkMobile();
    checkReducedMotion();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable animations on mobile or when user prefers reduced motion
  const shouldAnimate = !isMobile && !isReducedMotion;
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background - Mobile Optimized */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-slate-950" />
        
        {/* Conditional Background Elements */}
        {shouldAnimate ? (
          // Desktop: Lightweight animations
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-purple-900/15 to-pink-900/15 rounded-full blur-xl"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-32 right-16 w-56 h-56 bg-gradient-to-r from-blue-900/15 to-cyan-900/15 rounded-full blur-xl"
              animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div 
              className="absolute bottom-32 left-1/3 w-44 h-44 bg-gradient-to-r from-violet-900/15 to-purple-900/15 rounded-full blur-xl"
              animate={{ x: [0, 35, 0], y: [0, -30, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
          </div>
        ) : (
          // Mobile: Static lightweight elements
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-900/10 to-pink-900/10 rounded-full blur-lg" />
            <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-r from-blue-900/10 to-cyan-900/10 rounded-full blur-lg" />
            <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-violet-900/10 to-purple-900/10 rounded-full blur-lg" />
          </div>
        )}

        {/* Simple grid overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:60px_60px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          {/* Hero with conditional animations */}
          {shouldAnimate ? (
            <motion.div
              id="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <HeroSection />
            </motion.div>
          ) : (
            <div id="hero">
              <HeroSection />
            </div>
          )}
          
          {/* Categories with conditional stagger effect */}
          {shouldAnimate ? (
            <motion.div
              id="categories"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CategorySection />
            </motion.div>
          ) : (
            <div id="categories">
              <CategorySection />
            </div>
          )}
          
          {/* Testimonials with conditional fade in */}
          {shouldAnimate ? (
            <motion.div
              id="testimonials"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TestimonialsSection />
            </motion.div>
          ) : (
            <div id="testimonials">
              <TestimonialsSection />
            </div>
          )}
        </main>
        
        {/* Footer with conditional slide up */}
        {shouldAnimate ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <Footer />
          </motion.div>
        ) : (
          <div>
            <Footer />
          </div>
        )}
      </div>

      {/* Floating Action Elements */}
      {shouldAnimate ? (
        <motion.div 
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 2, duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            💬
          </motion.div>
        </motion.div>
      ) : (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer">
            💬
          </div>
        </div>
      )}

      {/* Floating Navigation Indicator */}
      <FloatingNavIndicator />
    </div>
  );
};

export default Index;

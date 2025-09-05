import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FloatingNavIndicator from '@/components/FloatingNavIndicator';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Background - Much Darker */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-slate-950" />
        
        {/* Moving Background Elements */}
        <div className="absolute inset-0">
          {/* Large Floating Orbs - Darker versions */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute top-32 right-16 w-96 h-96 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Floating Tech Icons - Darker versions */}
          <motion.div 
            className="absolute top-1/4 left-1/4"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-cyan-700 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl">
              💎
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/3 right-1/4"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-pink-700 rounded-lg shadow-lg flex items-center justify-center text-white">
              ⚡
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/3 left-1/6"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-700 to-teal-700 rounded-xl shadow-lg flex items-center justify-center text-white text-lg">
              🚀
            </div>
          </motion.div>

          {/* Geometric Shapes - Darker versions */}
          <motion.div 
            className="absolute top-1/5 right-1/5 w-8 h-8 bg-gradient-to-r from-yellow-600 to-orange-700 transform rotate-45"
            animate={{
              rotate: [45, 90, 45],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/5 right-1/3 w-6 h-6 bg-gradient-to-r from-pink-600 to-rose-700 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Particle Lines */}
          <motion.div 
            className="absolute top-1/2 left-1/12 w-1 h-24 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute top-3/4 right-1/12 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
            animate={{
              scaleY: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:50px_50px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          {/* Hero with enhanced animations */}
          <motion.div
            id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
          </motion.div>
          
          {/* Categories with stagger effect */}
          <motion.div
            id="categories"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CategorySection />
          </motion.div>
          
          {/* Testimonials with fade in */}
          <motion.div
            id="testimonials"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TestimonialsSection />
          </motion.div>
        </main>
        
        {/* Footer with slide up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <Footer />
        </motion.div>
      </div>

      {/* Floating Action Elements */}
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

      {/* Floating Navigation Indicator */}
      <FloatingNavIndicator />
    </div>
  );
};

export default Index;

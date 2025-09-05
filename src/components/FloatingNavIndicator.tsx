import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingNavIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'categories', label: 'Products', icon: '🛍️' },
    { id: 'testimonials', label: 'Reviews', icon: '⭐' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Get actual section positions
      const heroSection = document.getElementById('hero');
      const categoriesSection = document.getElementById('categories');
      const testimonialsSection = document.getElementById('testimonials');
      
      if (heroSection && categoriesSection && testimonialsSection) {
        const heroTop = heroSection.offsetTop;
        const categoriesTop = categoriesSection.offsetTop;
        const testimonialsTop = testimonialsSection.offsetTop;
        
        if (scrollPosition < categoriesTop) {
          setActiveSection('hero');
        } else if (scrollPosition < testimonialsTop) {
          setActiveSection('categories');
        } else {
          setActiveSection('testimonials');
        }
      } else {
        // Fallback if elements not found
        const windowHeight = window.innerHeight;
        if (window.scrollY < windowHeight * 0.8) {
          setActiveSection('hero');
        } else if (window.scrollY < windowHeight * 1.5) {
          setActiveSection('categories');
        } else {
          setActiveSection('testimonials');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="bg-black/30 dark:bg-black/50 backdrop-blur-md rounded-full p-2 border border-gray-600/30 dark:border-gray-500/30 shadow-xl">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`block w-12 h-12 rounded-full mb-2 last:mb-0 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-110'
                : 'bg-gray-800/40 dark:bg-gray-700/40 text-gray-300 dark:text-gray-200 hover:bg-gray-700/60 dark:hover:bg-gray-600/60'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={section.label}
          >
            <span className="text-lg">{section.icon}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingNavIndicator;

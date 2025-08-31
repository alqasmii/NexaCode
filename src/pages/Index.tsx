import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CategorySection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

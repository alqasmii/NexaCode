import Navigation from '@/components/Navigation';
import ServicesHero from '@/components/ServicesHero';
import FeaturedServices from '@/components/FeaturedServices';
import ServiceCategories from '@/components/ServiceCategories';
import ServicePackages from '@/components/ServicePackages';
import ServicesBenefits from '@/components/ServicesBenefits';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <FeaturedServices />
      <ServiceCategories />
      <ServicePackages />
      <ServicesBenefits />
      <Footer />
    </div>
  );
};

export default Services;

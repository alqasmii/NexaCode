import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AppsHero from '@/components/AppsHero';
import FeaturedApps from '@/components/FeaturedApps';
import AppCategories from '@/components/AppCategories';
import AppFeatures from '@/components/AppFeatures';
import AppWaitlist from '@/components/AppWaitlist';
import { useEffect } from 'react';

const Apps = () => {
  useEffect(() => {
    document.title = `التطبيقات - نيكسو`;
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AppsHero />
        <FeaturedApps />
        <AppCategories />
        <AppFeatures />
        <AppWaitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Apps;

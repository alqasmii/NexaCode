import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GamingHero from '@/components/GamingHero';
import FeaturedGamingAccounts from '@/components/FeaturedGamingAccounts';
import GamingCategories from '@/components/GamingCategories';
import InGameCurrency from '@/components/InGameCurrency';
import GamingBenefits from '@/components/GamingBenefits';

const Gaming = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <GamingHero />
        <FeaturedGamingAccounts />
        <InGameCurrency />
        <GamingCategories />
        <GamingBenefits />
      </main>
      <Footer />
    </div>
  );
};

export default Gaming;

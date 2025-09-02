import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CodesHero from '@/components/CodesHero';
import FeaturedCodes from '@/components/FeaturedCodes';
import CodeCategories from '@/components/CodeCategories';
import DiscountCodes from '@/components/DiscountCodes';
import CodesBenefits from '@/components/CodesBenefits';

const Codes = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <CodesHero />
        <FeaturedCodes />
        <DiscountCodes />
        <CodeCategories />
        <CodesBenefits />
      </main>
      <Footer />
    </div>
  );
};

export default Codes;

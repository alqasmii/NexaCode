import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SubscriptionHero from '@/components/SubscriptionHero';
import SubscriptionCategories from '@/components/SubscriptionCategories';
import FeaturedSubscriptions from '@/components/FeaturedSubscriptions';
import SubscriptionBenefits from '@/components/SubscriptionBenefits';

const Subscriptions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SubscriptionHero />
        <FeaturedSubscriptions />
        <SubscriptionCategories />
        <SubscriptionBenefits />
      </main>
      <Footer />
    </div>
  );
};

export default Subscriptions;

import { Coins, Gem, Star, Shield, Zap, ChevronRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const InGameCurrency = () => {
  const currencies = [
    {
      id: 'vbucks',
      name: 'Fortnite V-Bucks',
      nameAr: 'في-باكس فورتنايت',
      icon: '💎',
      description: 'Premium Fortnite currency for skins, emotes, and battle passes',
      descriptionAr: 'عملة فورتنايت المميزة للسكينز والرقصات وتمريرة المعركة',
      packages: [
        { amount: '1,000', price: '8.50', originalPrice: '12.99', popular: false },
        { amount: '2,800', price: '19.50', originalPrice: '31.99', popular: true },
        { amount: '5,000', price: '34.75', originalPrice: '59.99', popular: false },
        { amount: '13,500', price: '79.99', originalPrice: '149.99', popular: false }
      ],
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      rating: 4.9,
      reviews: 1234,
      deliveryTime: 'Instant'
    },
    {
      id: 'robux',
      name: 'Roblox Robux',
      nameAr: 'روبوكس روبلوكس',
      icon: '🟢',
      description: 'Official Roblox currency for avatar items, game passes, and more',
      descriptionAr: 'عملة روبلوكس الرسمية لعناصر الشخصية وتمريرات الألعاب والمزيد',
      packages: [
        { amount: '800', price: '7.25', originalPrice: '9.99', popular: false },
        { amount: '1,700', price: '14.50', originalPrice: '19.99', popular: true },
        { amount: '4,500', price: '38.25', originalPrice: '49.99', popular: false },
        { amount: '10,000', price: '76.50', originalPrice: '99.99', popular: false }
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      rating: 4.8,
      reviews: 987,
      deliveryTime: 'Instant'
    },
    {
      id: 'valorant-points',
      name: 'Valorant Points (VP)',
      nameAr: 'نقاط فالورانت',
      icon: '⚡',
      description: 'Premium Valorant currency for weapon skins and cosmetics',
      descriptionAr: 'عملة فالورانت المميزة لسكينز الأسلحة والتجميل',
      packages: [
        { amount: '1,000', price: '9.75', originalPrice: '14.99', popular: false },
        { amount: '2,050', price: '18.50', originalPrice: '24.99', popular: true },
        { amount: '3,650', price: '34.25', originalPrice: '49.99', popular: false },
        { amount: '5,350', price: '48.75', originalPrice: '74.99', popular: false }
      ],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      rating: 4.7,
      reviews: 654,
      deliveryTime: 'Instant'
    },
    {
      id: 'cod-points',
      name: 'COD Points',
      nameAr: 'نقاط كول أوف ديوتي',
      icon: '🎯',
      description: 'Call of Duty premium currency for battle passes and cosmetics',
      descriptionAr: 'عملة كول أوف ديوتي المميزة لتمريرات المعركة والتجميل',
      packages: [
        { amount: '1,100', price: '8.25', originalPrice: '9.99', popular: false },
        { amount: '2,400', price: '17.50', originalPrice: '19.99', popular: true },
        { amount: '4,000', price: '29.25', originalPrice: '39.99', popular: false },
        { amount: '9,500', price: '69.75', originalPrice: '99.99', popular: false }
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      rating: 4.6,
      reviews: 432,
      deliveryTime: 'Instant'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-purple-50/30 dark:from-gray-900/30 dark:to-purple-900/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-gold/10 text-accent-gold border-accent-gold/20">
            💰 In-Game Currency
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gaming <span className="text-accent-gold">Currency</span> Store
          </h2>
          <p className="text-xl font-cairo text-purple-500 mb-4">
            متجر العملات الرقمية للألعاب
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant access to premium gaming currencies at the best prices. 
            Safe, secure, and delivered instantly to your account.
          </p>
        </div>

        {/* Currency Cards */}
        <div className="space-y-12">
          {currencies.map((currency) => (
            <Card key={currency.id} className={`overflow-hidden border-2 hover:border-purple-500/50 transition-all duration-300 ${currency.bgColor}`}>
              <div className="p-8">
                {/* Currency Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className={`text-4xl p-4 rounded-xl bg-gradient-to-br ${currency.color} text-white flex items-center justify-center`}>
                      <span className="text-2xl">{currency.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{currency.name}</h3>
                      <p className="text-lg font-cairo text-purple-500 mb-2">{currency.nameAr}</p>
                      <p className="text-sm text-muted-foreground max-w-md">{currency.description}</p>
                      <p className="text-xs font-cairo text-accent-teal mt-1">{currency.descriptionAr}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{currency.rating}</span>
                        <span className="text-xs text-muted-foreground">({currency.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500 text-white">
                        <Zap className="h-3 w-3 mr-1" />
                        {currency.deliveryTime}
                      </Badge>
                      <Badge className="bg-blue-500 text-white">
                        <Shield className="h-3 w-3 mr-1" />
                        Secure
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Currency Packages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currency.packages.map((pkg, index) => (
                    <Card key={index} className={`relative p-6 border-2 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg ${
                      pkg.popular ? 'border-accent-gold bg-accent-gold/5' : 'border-border'
                    }`}>
                      {/* Popular Badge */}
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-accent-gold text-primary-navy font-bold">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Most Popular
                          </Badge>
                        </div>
                      )}

                      {/* Package Content */}
                      <div className="text-center">
                        <div className={`text-3xl mb-3 p-3 rounded-full bg-gradient-to-br ${currency.color} text-white inline-flex items-center justify-center`}>
                          <Coins className="h-6 w-6" />
                        </div>
                        
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {pkg.amount}
                        </h4>
                        
                        <div className="mb-4">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl font-bold text-purple-500">
                              {pkg.price} OMR
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              {pkg.originalPrice} OMR
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {Math.round(((parseFloat(pkg.originalPrice) - parseFloat(pkg.price)) / parseFloat(pkg.originalPrice)) * 100)}% OFF
                          </p>
                        </div>

                        <Button 
                          className={`w-full ${
                            pkg.popular 
                              ? 'bg-accent-gold text-primary-navy hover:bg-accent-gold/90' 
                              : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}
                        >
                          Buy Now
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Currency Benefits */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>100% Safe & Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span>Instant Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <h3 className="text-2xl font-bold mb-2">Need a custom amount?</h3>
            <p className="text-lg font-cairo text-accent-gold mb-4">
              تحتاج كمية مخصصة؟
            </p>
            <p className="text-white/90 mb-6 max-w-md">
              Contact our team for custom currency packages tailored to your gaming needs.
            </p>
            <Button size="lg" className="bg-accent-gold text-primary-navy hover:bg-accent-gold/90">
              Contact for Custom Order
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InGameCurrency;

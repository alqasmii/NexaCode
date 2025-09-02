import { Percent, Copy, Clock, Star, Zap, Tag, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const DiscountCodes = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const discountCodes = [
    {
      id: 'steam-summer-30',
      title: 'Steam Summer Sale - 30% OFF',
      titleAr: 'تخفيض ستيم الصيفي - خصم 30%',
      description: 'Get 30% off on all Steam wallet top-ups during our summer promotion.',
      descriptionAr: 'احصل على خصم 30% على جميع إعادة تعبئة محفظة ستيم خلال عرض الصيف.',
      code: 'STEAM30SUMMER',
      discount: '30',
      discountType: 'percentage',
      minOrder: '20',
      maxDiscount: '15',
      validUntil: '2024-08-31',
      usedCount: 1247,
      totalUses: 5000,
      category: 'Gaming',
      categoryAr: 'الألعاب',
      featured: true,
      trending: true
    },
    {
      id: 'office-student-50',
      title: 'Microsoft Office Student Discount',
      titleAr: 'خصم مايكروسوفت أوفيس للطلاب',
      description: 'Special 50% discount on Microsoft Office licenses for students.',
      descriptionAr: 'خصم خاص 50% على تراخيص مايكروسوفت أوفيس للطلاب.',
      code: 'STUDENT50OFF',
      discount: '50',
      discountType: 'percentage',
      minOrder: '30',
      maxDiscount: '25',
      validUntil: '2024-12-31',
      usedCount: 892,
      totalUses: 2000,
      category: 'Software',
      categoryAr: 'البرمجيات',
      featured: true,
      trending: false
    },
    {
      id: 'gaming-bundle-40',
      title: 'Gaming Bundle Mega Deal',
      titleAr: 'عرض حزمة الألعاب الضخم',
      description: 'Save 40% when you buy any 3 gaming codes together.',
      descriptionAr: 'وفر 40% عند شراء أي 3 أكواد ألعاب معاً.',
      code: 'BUNDLE40SAVE',
      discount: '40',
      discountType: 'percentage',
      minOrder: '50',
      maxDiscount: '30',
      validUntil: '2024-09-15',
      usedCount: 456,
      totalUses: 1500,
      category: 'Gaming',
      categoryAr: 'الألعاب',
      featured: false,
      trending: true
    },
    {
      id: 'first-time-25',
      title: 'First Time Buyer Special',
      titleAr: 'عرض خاص للمشترين لأول مرة',
      description: 'Welcome discount for new customers on any purchase.',
      descriptionAr: 'خصم ترحيبي للعملاء الجدد على أي عملية شراء.',
      code: 'WELCOME25NEW',
      discount: '25',
      discountType: 'percentage',
      minOrder: '10',
      maxDiscount: '20',
      validUntil: '2024-12-31',
      usedCount: 2341,
      totalUses: 10000,
      category: 'Welcome',
      categoryAr: 'ترحيب',
      featured: true,
      trending: false
    },
    {
      id: 'subscription-mega-35',
      title: 'Subscription Mega Savings',
      titleAr: 'توفير ضخم على الاشتراكات',
      description: 'Get 35% off on all streaming and software subscriptions.',
      descriptionAr: 'احصل على خصم 35% على جميع اشتراكات البث والبرمجيات.',
      code: 'SUB35MEGA',
      discount: '35',
      discountType: 'percentage',
      minOrder: '25',
      maxDiscount: '40',
      validUntil: '2024-10-31',
      usedCount: 678,
      totalUses: 3000,
      category: 'Subscriptions',
      categoryAr: 'الاشتراكات',
      featured: false,
      trending: true
    },
    {
      id: 'flash-weekend-45',
      title: 'Flash Weekend Deal',
      titleAr: 'عرض نهاية الأسبوع المحدود',
      description: 'Limited time weekend flash sale - 45% off everything!',
      descriptionAr: 'عرض نهاية أسبوع محدود الوقت - خصم 45% على كل شيء!',
      code: 'FLASH45WEEKEND',
      discount: '45',
      discountType: 'percentage',
      minOrder: '40',
      maxDiscount: '50',
      validUntil: '2024-07-28',
      usedCount: 234,
      totalUses: 500,
      category: 'Flash Sale',
      categoryAr: 'تخفيض سريع',
      featured: true,
      trending: true
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'gaming': return 'bg-purple-500';
      case 'software': return 'bg-blue-500';
      case 'subscriptions': return 'bg-green-500';
      case 'welcome': return 'bg-yellow-500';
      case 'flash sale': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const isExpiringSoon = (validUntil: string) => {
    const today = new Date();
    const expiry = new Date(validUntil);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  const getUsagePercentage = (used: number, total: number) => {
    return Math.round((used / total) * 100);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-teal-500/10 text-teal-500 border-teal-500/20">
            🎟️ Discount Codes & Vouchers
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Exclusive <span className="text-teal-500">Discount Codes</span>
          </h2>
          <p className="text-xl font-cairo text-accent-teal mb-4">
            أكواد الخصم والقسائم الحصرية
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Save big with our exclusive discount codes and promotional vouchers. 
            Limited time offers with instant savings on your favorite digital products.
          </p>
        </div>

        {/* Discount Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {discountCodes.map((discount) => (
            <Card key={discount.id} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
              discount.featured 
                ? 'border-teal-500/50 hover:border-teal-500 hover:shadow-teal-500/20' 
                : 'hover:border-teal-300 hover:shadow-teal-500/10'
            }`}>
              {/* Header with badges */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className={`${getCategoryColor(discount.category)} text-white font-semibold`}>
                      {discount.category}
                    </Badge>
                    {discount.featured && (
                      <Badge className="bg-yellow-500 text-white font-semibold">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {discount.trending && (
                      <Badge className="bg-red-500 text-white font-semibold">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  {isExpiringSoon(discount.validUntil) && (
                    <Badge className="bg-orange-500 text-white animate-pulse">
                      <Clock className="h-3 w-3 mr-1" />
                      Expiring Soon!
                    </Badge>
                  )}
                </div>

                {/* Discount Percentage */}
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white mb-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{discount.discount}%</div>
                      <div className="text-xs">OFF</div>
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{discount.title}</h3>
                  <p className="text-sm font-cairo text-teal-500 mb-3">{discount.titleAr}</p>
                  <p className="text-sm text-muted-foreground mb-2">{discount.description}</p>
                  <p className="text-xs font-cairo text-accent-teal">{discount.descriptionAr}</p>
                </div>

                {/* Discount Code */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Discount Code</p>
                      <p className="text-lg font-mono font-bold text-foreground">{discount.code}</p>
                    </div>
                    <Button
                      onClick={() => copyCode(discount.code)}
                      size="sm"
                      className={`${
                        copiedCode === discount.code
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-teal-500 hover:bg-teal-600 text-white'
                      }`}
                    >
                      {copiedCode === discount.code ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Terms */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Min. Order:</span>
                    <span className="font-semibold">{discount.minOrder} OMR</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Max Discount:</span>
                    <span className="font-semibold">{discount.maxDiscount} OMR</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Valid Until:</span>
                    <span className="font-semibold">{new Date(discount.validUntil).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Usage Stats */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Usage</span>
                    <span className="text-xs font-semibold">
                      {discount.usedCount}/{discount.totalUses} used
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getUsagePercentage(discount.usedCount, discount.totalUses)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {getUsagePercentage(discount.usedCount, discount.totalUses)}% claimed
                  </p>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 font-semibold"
                  size="lg"
                >
                  <Tag className="h-4 w-4 mr-2" />
                  Use This Code
                  <Percent className="h-4 w-4 ml-2" />
                </Button>
              </div>

              {/* Discount Accent */}
              {discount.featured && (
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-3 right-[-32px] bg-yellow-500 text-white text-xs font-bold py-1 px-8 rotate-45 text-center">
                    HOT
                  </div>
                </div>
              )}

              {/* Glow Effect for Trending */}
              {discount.trending && (
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 pointer-events-none" />
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl text-white">
          <Zap className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Want Exclusive Deals?</h3>
          <p className="text-lg mb-4 opacity-90">Subscribe to get notified about new discount codes and flash sales!</p>
          <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
            Subscribe for Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscountCodes;

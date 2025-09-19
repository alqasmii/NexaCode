import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'
import { 
  Sparkles, 
  GamepadIcon, 
  CreditCard, 
  Play,
  Star,
  ShoppingCart,
  Zap,
  Crown,
  Gift,
  TrendingUp,
  Monitor,
  Briefcase,
  Shield,
  Smartphone,
  Users,
  Download,
  Coins,
  TrendingUp as LevelUp,
  Target,
  Store,
  Bitcoin,
  Gamepad2,
  Music
} from 'lucide-react'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('subscriptions')
  const { toast } = useToast()

  // Handle URL hash to set initial category
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && ['subscriptions', 'gaming', 'codes'].includes(hash)) {
      setActiveCategory(hash)
    }
  }, [])

  const handleAddToCart = (item: string, price: string) => {
    toast({
      title: "تمت الإضافة للسلة! 🛒",
      description: `${item} (${price}) تم إضافته إلى سلة التسوق.`,
    })
  }

  // Subscription categories for navigation
  const subscriptionCategories = [
    {
      id: 'streaming',
      title: 'البث والترفيه',
      description: '🎬 استمتع بأفضل المحتوى العالمي - نتفليكس، شاهد، OSN، سبوتيفاي وأكثر بأسعار لا تُقاوم!',
      icon: Monitor,
      href: '/subscriptions/streaming',
      available: true,
      gradient: 'from-red-500 via-purple-500 to-pink-500',
      bgImage: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'productivity',
      title: 'الإنتاجية والعمل والتصميم',
      description: '💼 اطلق إبداعك المهني - مايكروسوفت أوفيس، أدوبي، كانفا وجميع الأدوات التي تحتاجها للنجاح!',
      icon: Briefcase,
      href: '/subscriptions/productivity',
      available: true,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'security',
      title: 'التقنية/الحماية/الأدوات',
      description: '🛡️ احمِ عالمك الرقمي - أقوى برامج الحماية، VPN متقدم، وأدوات تقنية احترافية بأفضل الأسعار!',
      icon: Shield,
      href: '/subscriptions/security',
      available: true,
      gradient: 'from-green-500 via-emerald-500 to-cyan-500',
      bgImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'esim',
      title: 'eSIM',
      description: '📱 تواصل بلا حدود - بطاقات eSIM عالمية للسفر والاتصالات، قريباً بعروض حصرية!',
      icon: Smartphone,
      href: '/subscriptions/esim',
      available: false,
      gradient: 'from-gray-400 via-gray-500 to-gray-600',
      bgImage: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=200&fit=crop&q=80'
    }
  ]

  // Gaming categories for navigation
  const gamingCategories = [
    {
      id: 'accounts',
      title: 'حسابات الألعاب',
      description: '🎮 حسابات جاهزة للألعاب الشهيرة - فورتنايت، PUBG، كول أوف ديوتي، فيفا وأكثر!',
      icon: Users,
      href: '/gaming/accounts',
      available: true,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'games',
      title: 'شراء الألعاب',
      description: '🛒 اشترِ ألعابك المفضلة رسمياً - Steam، Epic Games، PlayStation، Xbox بأفضل الأسعار!',
      icon: Download,
      href: '/gaming/games',
      available: true,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      bgImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'subscriptions',
      title: 'اشتراكات الألعاب',
      description: '⭐ اشتراكات احترافية - Xbox Game Pass، PlayStation Plus، Battle Pass وجميع الاشتراكات!',
      icon: Crown,
      href: '/gaming/subscriptions',
      available: true,
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      bgImage: 'https://images.unsplash.com/photo-1542549240-ecfabb7c2d23?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'currency',
      title: 'العملات والعناصر',
      description: '💰 عملات ومواد الألعاب - V-Bucks، UC، CP، Coins لجميع الألعاب الشهيرة بتسليم فوري!',
      icon: Coins,
      href: '/gaming/currency',
      available: true,
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      bgImage: 'https://images.unsplash.com/photo-1614029655965-2464911905a7?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'boosting',
      title: 'خدمات رفع المستوى',
      description: '🚀 خدمات احترافية لرفع مستوى حسابك - لاعبون محترفون يساعدونك للوصول للقمة بأمان!',
      icon: Target,
      href: '/gaming/boosting',
      available: true,
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      bgImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&q=80'
    }
  ]

  // Gift card categories for navigation - Most popular and purchasable
  const giftCardCategories = [
    {
      id: 'gaming',
      title: 'بطاقات الألعاب والترفيه',
      description: '🎮 العب أكثر، ادفع أقل - Steam، PlayStation، Xbox، Google Play، iTunes وجميع بطاقات الألعاب!',
      icon: Gamepad2,
      href: '/giftcards/gaming',
      available: true,
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'shopping',
      title: 'بطاقات التسوق العالمية',
      description: '🛍️ تسوق بلا حدود - Amazon، eBay، Zalando، Nike، Adidas وجميع متاجرك المفضلة بأفضل الأسعار!',
      icon: Store,
      href: '/giftcards/shopping',
      available: true,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      bgImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'digital-services',
      title: 'الخدمات الرقمية والاشتراكات',
      description: '📱 عالم رقمي متكامل - Netflix، Spotify، ChatGPT، PayPal وجميع الخدمات الرقمية المميزة!',
      icon: Monitor,
      href: '/giftcards/digital',
      available: true,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=80'
    },
    {
      id: 'crypto-finance',
      title: 'العملات الرقمية والمالية',
      description: '₿ مستقبل المال - Binance، Coinbase، BitPay، Crypto Voucher وجميع حلول العملات الرقمية الآمنة!',
      icon: Bitcoin,
      href: '/giftcards/crypto',
      available: true,
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      bgImage: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&h=200&fit=crop&q=80'
    }
  ]

  // Product data
  const subscriptions = [
    {
      name: "نتفليكس بريميوم",
      description: "بث عالي الدقة 4K، 4 شاشات متزامنة",
      price: "$15.99/شهرياً",
      originalPrice: "$19.99/شهرياً",
      badge: "الأكثر شعبية",
      features: ["فائق الوضوح 4K", "محتوى HDR", "4 شاشات", "تحميل للمشاهدة دون اتصال"],
      icon: <Play className="h-6 w-6" />
    },
    {
      name: "سبوتيفاي بريميوم",
      description: "بث موسيقى بدون إعلانات مع تحميل للاستماع دون اتصال",
      price: "$9.99/شهرياً",
      originalPrice: "$12.99/شهرياً",
      badge: "أفضل قيمة",
      features: ["موسيقى بدون إعلانات", "تحميل دون اتصال", "جودة صوت عالية", "تخطي الأغاني"],
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      name: "باقة ديزني+",
      description: "ديزني+ وهولو وESPN+ مجتمعة",
      price: "$12.99/شهرياً",
      originalPrice: "$19.99/شهرياً",
      badge: "عرض مجمع",
      features: ["الوصول لديزني+", "هولو (مع إعلانات محدودة)", "رياضة ESPN+", "مناسب للعائلة"],
      icon: <Crown className="h-6 w-6" />
    },
    {
      name: "يوتيوب بريميوم",
      description: "يوتيوب بدون إعلانات مع تشغيل في الخلفية",
      price: "$11.99/شهرياً",
      originalPrice: "$15.99/شهرياً",
      badge: "دعم المبدعين",
      features: ["بدون إعلانات", "تشغيل في الخلفية", "يوتيوب ميوزك", "فيديوهات دون اتصال"],
      icon: <Play className="h-6 w-6" />
    }
  ]

  const gaming = [
    {
      name: "محفظة ستيم $50",
      description: "أضف أموال إلى حساب ستيم الخاص بك",
      price: "$45.99",
      originalPrice: "$50.00",
      badge: "عرض مميز",
      features: ["تسليم فوري", "تفعيل عالمي", "بدون انتهاء صلاحية", "دفع آمن"],
      icon: <GamepadIcon className="h-6 w-6" />
    },
    {
      name: "بلايستيشن بلاس 12 شهر",
      description: "اشتراك الألعاب الأساسي عبر الإنترنت",
      price: "$59.99/سنوياً",
      originalPrice: "$79.99/سنوياً",
      badge: "الأكثر مبيعاً",
      features: ["ألعاب جماعية أونلاين", "ألعاب شهرية", "تخزين سحابي", "خصومات حصرية"],
      icon: <GamepadIcon className="h-6 w-6" />
    },
    {
      name: "إكس بوكس جيم باس ألتيميت",
      description: "الوصول لأكثر من 100 لعبة على جميع الأجهزة",
      price: "$14.99/شهرياً",
      originalPrice: "$16.99/شهرياً",
      badge: "القيمة المطلقة",
      features: ["أكثر من 100 لعبة", "ألعاب سحابية", "PC وكونسول", "EA Play مُضمّن"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      name: "رصيد متجر إيبك جيمز",
      description: "رصيد $25 لمتجر إيبك جيمز",
      price: "$23.99",
      originalPrice: "$25.00",
      badge: "لفترة محدودة",
      features: ["تسليم فوري", "بدون رسوم", "معاملة آمنة", "استرداد سهل"],
      icon: <Gift className="h-6 w-6" />
    }
  ]

  const codes = [
    {
      name: "بطاقة هدايا أمازون $100",
      description: "مثالية لأي مشتريات من أمازون",
      price: "$95.99",
      originalPrice: "$100.00",
      badge: "الخيار الأول",
      features: ["بدون تاريخ انتهاء", "تسليم فوري", "تعمل عالمياً", "سهلة الاستخدام"],
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      name: "جوجل بلاي $25",
      description: "للتطبيقات والألعاب والأفلام والمزيد",
      price: "$23.99",
      originalPrice: "$25.00",
      badge: "تسليم سريع",
      features: ["تطبيقات أندرويد", "ألعاب وأفلام", "مشتريات داخل التطبيق", "موسيقى وكتب"],
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      name: "بطاقة آيتونز $50",
      description: "لمتجر التطبيقات وآيتونز وخدمات آبل",
      price: "$47.99",
      originalPrice: "$50.00",
      badge: "نظام آبل",
      features: ["متجر التطبيقات", "متجر آيتونز", "آبل ميوزك", "تخزين آي كلاود"],
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      name: "فيزا مدفوعة مقدماً $200",
      description: "بطاقة مدفوعة مقدماً عالمية للتسوق الإلكتروني",
      price: "$195.99",
      originalPrice: "$200.00",
      badge: "الأكثر مرونة",
      features: ["استخدام في أي مكان", "تسوق إلكتروني", "مدفوعات آمنة", "بدون فحص ائتماني"],
      icon: <CreditCard className="h-6 w-6" />
    }
  ]

  const getProductData = () => {
    switch (activeCategory) {
      case 'subscriptions': return subscriptionCategories
      case 'gaming': return gamingCategories
      case 'codes': return giftCardCategories
      default: return subscriptionCategories
    }
  }

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case 'subscriptions': return 'الاشتراكات المميزة'
      case 'gaming': return 'أرصدة وتمريرات الألعاب'
      case 'codes': return 'بطاقات الهدايا الرقمية'
      default: return 'الاشتراكات المميزة'
    }
  }

  const getCategoryDescription = () => {
    switch (activeCategory) {
      case 'subscriptions': return 'اختر من الفئات التالية لاستكشاف الاشتراكات والتطبيقات المتاحة'
      case 'gaming': return 'اختر من فئات الألعاب لاستكشاف الحسابات، الألعاب، العملات، الاشتراكات وخدمات رفع المستوى'
      case 'codes': return 'بطاقات هدايا أمازون وجوجل بلاي وآيتونز والبطاقات العالمية'
      default: return 'اختر من الفئات التالية لاستكشاف المنتجات المتاحة'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              جميع المنتجات في مكان واحد
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              المنتجات الرقمية
              <br />
              <span className="text-3xl md:text-4xl">بكل بساطة</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              اكتشف الاشتراكات المميزة وأرصدة الألعاب وبطاقات الهدايا الرقمية
              <br />
              كلها بأسعار مذهلة مع التسليم الفوري
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">تقييم 4.9/5</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">تسليم فوري</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Crown className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">أفضل الأسعار</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* Category Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-1">
                <TabsTrigger value="subscriptions" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  الاشتراكات
                </TabsTrigger>
                <TabsTrigger value="gaming" className="flex items-center gap-2">
                  <GamepadIcon className="h-4 w-4" />
                  الألعاب
                </TabsTrigger>
                <TabsTrigger value="codes" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  بطاقات الهدايا
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Category Header */}
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {getCategoryTitle()}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {getCategoryDescription()}
              </p>
            </motion.div>

            {/* Products Grid */}
            <TabsContent value={activeCategory} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
                >
                  {getProductData().map((item, index) => (
                    <motion.div
                      key={`${activeCategory}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group"
                    >
                      {/* Render category cards for all sections */}
                      <Card className={`h-full backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group ${
                        !item.available 
                          ? 'bg-gray-100/80 dark:bg-gray-700/80 opacity-60' 
                          : 'bg-white/80 dark:bg-gray-800/80 hover:border-purple-300 dark:hover:border-purple-600 hover:scale-105'
                      }`}>
                          {/* Background Image */}
                          <div className="relative">
                            <div 
                              className="h-32 bg-cover bg-center relative overflow-hidden"
                              style={{ backgroundImage: `url(${item.bgImage})` }}
                            >
                              {/* Gradient Overlay */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                              
                              {/* Category Icon */}
                              <div className="absolute top-4 right-4">
                                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                                  <item.icon className="h-6 w-6" />
                                </div>
                              </div>

                              {/* Coming Soon Badge */}
                              {!item.available && (
                                <div className="absolute top-4 left-4">
                                  <Badge className="bg-gray-500/80 text-white border-0">
                                    قريباً
                                  </Badge>
                                </div>
                              )}
                            </div>
                          </div>

                          <CardHeader className="pb-4 text-right">
                            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2 text-right">
                              {item.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 text-right leading-relaxed">
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent className="pt-0">
                            <Button 
                              onClick={() => item.available && (window.location.href = item.href)}
                              disabled={!item.available}
                              className={`w-full border-0 group ${
                                !item.available 
                                  ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
                                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                              }`}
                            >
                              <Star className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
                              {!item.available ? 'قريباً' : 'استكشف المنتجات'}
                            </Button>
                          </CardContent>
                        </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">تسليم فوري</h3>
              <p className="text-gray-600 dark:text-gray-300">احصل على منتجاتك الرقمية في بريدك الإلكتروني خلال دقائق</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">أفضل الأسعار</h3>
              <p className="text-gray-600 dark:text-gray-300">نضمن لك أقل الأسعار على جميع المنتجات الرقمية</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">دعم 5 نجوم</h3>
              <p className="text-gray-600 dark:text-gray-300">دعم عملاء على مدار الساعة للمساعدة في أي استفسارات</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Products

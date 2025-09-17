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
  TrendingUp
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
      case 'subscriptions': return subscriptions
      case 'gaming': return gaming
      case 'codes': return codes
      default: return subscriptions
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
      case 'subscriptions': return 'نتفليكس وسبوتيفاي وديزني+ والمزيد بأسعار لا تُقاوم'
      case 'gaming': return 'أرصدة ستيم وبلايستيشن وإكس بوكس واشتراكات الألعاب'
      case 'codes': return 'بطاقات هدايا أمازون وجوجل بلاي وآيتونز والبطاقات العالمية'
      default: return 'اشتراكات مميزة بأسعار مخفضة'
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
                  {getProductData().map((product, index) => (
                    <motion.div
                      key={`${activeCategory}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group"
                    >
                      <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg text-white">
                              {product.icon}
                            </div>
                            <Badge variant="secondary" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                              {product.badge}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                {product.price}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                {product.originalPrice}
                              </span>
                            </div>
                            <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                              وفر {((parseFloat(product.originalPrice.replace(/[$]/g, '')) - parseFloat(product.price.replace(/[$]/g, ''))) / parseFloat(product.originalPrice.replace(/[$]/g, '')) * 100).toFixed(0)}%
                            </div>
                          </div>

                          <div className="space-y-2 mb-6">
                            {product.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                {feature}
                              </div>
                            ))}
                          </div>

                          <Button 
                            onClick={() => handleAddToCart(product.name, product.price)}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 group"
                          >
                            <ShoppingCart className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
                            إضافة للسلة
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

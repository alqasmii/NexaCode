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
      title: "Added to Cart! 🛒",
      description: `${item} (${price}) has been added to your cart.`,
    })
  }

  // Product data
  const subscriptions = [
    {
      name: "Netflix Premium",
      description: "4K streaming, 4 screens simultaneously",
      price: "$15.99/month",
      originalPrice: "$19.99/month",
      badge: "Most Popular",
      features: ["4K Ultra HD", "HDR Content", "4 Screens", "Download Offline"],
      icon: <Play className="h-6 w-6" />
    },
    {
      name: "Spotify Premium",
      description: "Ad-free music streaming with offline downloads",
      price: "$9.99/month",
      originalPrice: "$12.99/month",
      badge: "Best Value",
      features: ["Ad-free Music", "Offline Downloads", "High Quality Audio", "Skip Songs"],
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      name: "Disney+ Bundle",
      description: "Disney+, Hulu, and ESPN+ combined",
      price: "$12.99/month",
      originalPrice: "$19.99/month",
      badge: "Bundle Deal",
      features: ["Disney+ Access", "Hulu (Ad-supported)", "ESPN+ Sports", "Family Friendly"],
      icon: <Crown className="h-6 w-6" />
    },
    {
      name: "YouTube Premium",
      description: "Ad-free YouTube with background play",
      price: "$11.99/month",
      originalPrice: "$15.99/month",
      badge: "Creator Support",
      features: ["No Ads", "Background Play", "YouTube Music", "Offline Videos"],
      icon: <Play className="h-6 w-6" />
    }
  ]

  const gaming = [
    {
      name: "Steam Wallet $50",
      description: "Add funds to your Steam account",
      price: "$45.99",
      originalPrice: "$50.00",
      badge: "Hot Deal",
      features: ["Instant Delivery", "Global Activation", "No Expiry", "Secure Payment"],
      icon: <GamepadIcon className="h-6 w-6" />
    },
    {
      name: "PlayStation Plus 12 Months",
      description: "Essential online gaming subscription",
      price: "$59.99/year",
      originalPrice: "$79.99/year",
      badge: "Best Seller",
      features: ["Online Multiplayer", "Monthly Games", "Cloud Storage", "Exclusive Discounts"],
      icon: <GamepadIcon className="h-6 w-6" />
    },
    {
      name: "Xbox Game Pass Ultimate",
      description: "Access to 100+ games across all devices",
      price: "$14.99/month",
      originalPrice: "$16.99/month",
      badge: "Ultimate Value",
      features: ["100+ Games", "Cloud Gaming", "PC & Console", "EA Play Included"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      name: "Epic Games Store Credit",
      description: "$25 credit for Epic Games Store",
      price: "$23.99",
      originalPrice: "$25.00",
      badge: "Limited Time",
      features: ["Instant Delivery", "No Fees", "Secure Transaction", "Easy Redemption"],
      icon: <Gift className="h-6 w-6" />
    }
  ]

  const codes = [
    {
      name: "Amazon Gift Card $100",
      description: "Perfect for any Amazon purchase",
      price: "$95.99",
      originalPrice: "$100.00",
      badge: "Top Choice",
      features: ["No Expiry Date", "Instant Delivery", "Works Worldwide", "Easy to Use"],
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      name: "Google Play $25",
      description: "For apps, games, movies, and more",
      price: "$23.99",
      originalPrice: "$25.00",
      badge: "Fast Delivery",
      features: ["Android Apps", "Games & Movies", "In-app Purchases", "Music & Books"],
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      name: "iTunes Gift Card $50",
      description: "For App Store, iTunes, and Apple services",
      price: "$47.99",
      originalPrice: "$50.00",
      badge: "Apple Ecosystem",
      features: ["App Store", "iTunes Store", "Apple Music", "iCloud Storage"],
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      name: "Visa Prepaid $200",
      description: "Universal prepaid card for online shopping",
      price: "$195.99",
      originalPrice: "$200.00",
      badge: "Most Flexible",
      features: ["Use Anywhere", "Online Shopping", "Secure Payments", "No Credit Check"],
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
      case 'subscriptions': return 'Premium Subscriptions'
      case 'gaming': return 'Gaming Credits & Passes'
      case 'codes': return 'Digital Gift Cards'
      default: return 'Premium Subscriptions'
    }
  }

  const getCategoryDescription = () => {
    switch (activeCategory) {
      case 'subscriptions': return 'Netflix, Spotify, Disney+ and more at unbeatable prices'
      case 'gaming': return 'Steam, PlayStation, Xbox credits and gaming subscriptions'
      case 'codes': return 'Amazon, Google Play, iTunes and universal gift cards'
      default: return 'Premium subscriptions at discounted prices'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
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
              All Products in One Place
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Digital Products
              <br />
              <span className="text-3xl md:text-4xl">Made Simple</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover premium subscriptions, gaming credits, and digital gift cards
              <br />
              all at incredible prices with instant delivery
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Crown className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">Best Prices</span>
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
                  Subscriptions
                </TabsTrigger>
                <TabsTrigger value="gaming" className="flex items-center gap-2">
                  <GamepadIcon className="h-4 w-4" />
                  Gaming
                </TabsTrigger>
                <TabsTrigger value="codes" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Gift Cards
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
                              Save {((parseFloat(product.originalPrice.replace(/[$]/g, '')) - parseFloat(product.price.replace(/[$]/g, ''))) / parseFloat(product.originalPrice.replace(/[$]/g, '')) * 100).toFixed(0)}%
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
                            <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                            Add to Cart
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Instant Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">Get your digital products delivered to your email within minutes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Best Prices</h3>
              <p className="text-gray-600 dark:text-gray-300">We guarantee the lowest prices on all digital products</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">5-Star Support</h3>
              <p className="text-gray-600 dark:text-gray-300">24/7 customer support to help with any questions</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Products

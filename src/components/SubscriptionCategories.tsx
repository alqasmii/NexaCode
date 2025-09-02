import { Play, Brain, Gamepad2, GraduationCap, Briefcase, Music, Camera, Code, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SubscriptionCategories = () => {
  const categories = [
    {
      id: 'streaming',
      name: 'Streaming & Entertainment',
      nameAr: 'البث والترفيه',
      description: 'Netflix, Prime Video, Disney+, Hulu, and more',
      descriptionAr: 'نتفليكس، برايم فيديو، ديزني+، هولو، والمزيد',
      icon: Play,
      color: 'from-red-500 to-pink-500',
      accounts: 15,
      popular: true,
      examples: ['Netflix Premium', 'Disney+ Bundle', 'HBO Max', 'Prime Video']
    },
    {
      id: 'productivity',
      name: 'AI & Productivity',
      nameAr: 'الذكاء الاصطناعي والإنتاجية',
      description: 'ChatGPT, Notion, Adobe, Microsoft Office',
      descriptionAr: 'تشات جي بي تي، نوشن، أدوبي، مايكروسوفت أوفيس',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      accounts: 12,
      trending: true,
      examples: ['ChatGPT Plus', 'Adobe Creative', 'Notion Pro', 'Office 365']
    },
    {
      id: 'gaming',
      name: 'Gaming & Social',
      nameAr: 'الألعاب والتواصل الاجتماعي',
      description: 'Discord Nitro, Xbox Game Pass, PlayStation Plus',
      descriptionAr: 'ديسكورد نيترو، إكس بوكس جيم باس، بلايستيشن بلس',
      icon: Gamepad2,
      color: 'from-purple-500 to-indigo-500',
      accounts: 8,
      new: true,
      examples: ['Discord Nitro', 'Xbox Game Pass', 'PS Plus', 'Twitch Prime']
    },
    {
      id: 'education',
      name: 'Education & Learning',
      nameAr: 'التعليم والتعلم',
      description: 'Coursera, Udemy, LinkedIn Learning, MasterClass',
      descriptionAr: 'كورسيرا، يوديمي، لينكد إن ليرنينغ، ماستر كلاس',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500',
      accounts: 10,
      examples: ['Coursera Plus', 'Udemy Business', 'MasterClass', 'Skillshare']
    },
    {
      id: 'business',
      name: 'Business & Enterprise',
      nameAr: 'الأعمال والمؤسسات',
      description: 'Zoom, Slack, Dropbox, Google Workspace',
      descriptionAr: 'زوم، سلاك، دروب بوكس، جوجل وورك سبيس',
      icon: Briefcase,
      color: 'from-orange-500 to-red-500',
      accounts: 6,
      examples: ['Google Workspace', 'Zoom Pro', 'Slack Premium', 'Dropbox Plus']
    },
    {
      id: 'music',
      name: 'Music & Audio',
      nameAr: 'الموسيقى والصوت',
      description: 'Spotify, Apple Music, YouTube Music, Audible',
      descriptionAr: 'سبوتيفاي، أبل موسيك، يوتيوب موسيك، أوديبل',
      icon: Music,
      color: 'from-pink-500 to-rose-500',
      accounts: 7,
      examples: ['Spotify Premium', 'Apple Music', 'YouTube Music', 'Audible Plus']
    },
    {
      id: 'design',
      name: 'Design & Creative',
      nameAr: 'التصميم والإبداع',
      description: 'Canva Pro, Figma, Sketch, Creative Cloud',
      descriptionAr: 'كانفا برو، فيجما، سكيتش، كريتف كلاود',
      icon: Camera,
      color: 'from-teal-500 to-blue-500',
      accounts: 9,
      examples: ['Canva Pro', 'Figma Pro', 'Adobe CC', 'Sketch']
    },
    {
      id: 'development',
      name: 'Development & Code',
      nameAr: 'البرمجة والتطوير',
      description: 'GitHub Pro, JetBrains, Vercel, Railway',
      descriptionAr: 'جيت هاب برو، جيت برينز، فيرسل، ريلوي',
      icon: Code,
      color: 'from-gray-600 to-gray-800',
      accounts: 5,
      examples: ['GitHub Pro', 'JetBrains', 'Vercel Pro', 'Railway Pro']
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-teal/10 text-accent-teal border-accent-teal/20">
            🗂️ Browse Categories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Subscription <span className="text-accent-teal">Categories</span>
          </h2>
          <p className="text-xl font-cairo text-accent-gold mb-4">
            تصفح حسب الفئات المختلفة
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of premium subscription accounts organized by categories. 
            Find exactly what you need for entertainment, productivity, gaming, and more.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group relative overflow-hidden border-2 hover:border-accent-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-gold/10 cursor-pointer">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-6">
                {/* Icon and Badges */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    {category.popular && (
                      <Badge className="bg-accent-gold text-primary-navy text-xs">
                        Popular
                      </Badge>
                    )}
                    {category.trending && (
                      <Badge className="bg-accent-teal text-white text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    {category.new && (
                      <Badge className="bg-green-500 text-white text-xs">
                        <Zap className="h-3 w-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Category Info */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent-gold transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm font-cairo text-accent-teal mb-2">{category.nameAr}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Account Count */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {category.accounts} Accounts
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    From 2.50 OMR
                  </span>
                </div>

                {/* Examples */}
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Popular Accounts
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.slice(0, 2).map((example, index) => (
                      <span key={index} className="text-xs text-accent-gold">
                        {example}{index < 1 && category.examples.length > 1 ? ' •' : ''}
                      </span>
                    ))}
                    {category.examples.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{category.examples.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full group-hover:bg-accent-gold group-hover:text-primary-navy transition-colors" 
                  variant="outline"
                >
                  Explore Category
                </Button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold/20 rounded-lg transition-all duration-300" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary-navy to-secondary-purple text-white">
            <h3 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h3>
            <p className="text-lg font-cairo text-accent-gold mb-4">
              لا تجد ما تبحث عنه؟
            </p>
            <p className="text-white/90 mb-6 max-w-md">
              Contact our team and we'll help you find the perfect subscription account for your needs.
            </p>
            <Button size="lg" className="bg-accent-gold text-primary-navy hover:bg-accent-gold/90">
              Contact Support
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCategories;

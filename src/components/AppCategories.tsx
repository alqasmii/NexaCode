import { 
  Users, 
  MessageCircle, 
  Play, 
  Music, 
  Camera, 
  Settings, 
  Gamepad2, 
  ShoppingBag,
  Image,
  Video,
  Headphones,
  Edit,
  ChevronRight,
  Star,
  TrendingUp
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const AppCategories = () => {
  const { t, isRTL } = useLanguage();

  const categories = [
    {
      id: 'social',
      nameKey: 'apps.categories.social.name',
      descKey: 'apps.categories.social.description',
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      count: 12,
      trending: true,
      apps: ['Instagram Plus', 'Snapchat Plus', 'WhatsApp Plus', 'Facebook Plus']
    },
    {
      id: 'communication',
      nameKey: 'apps.categories.communication.name',
      descKey: 'apps.categories.communication.description',
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      count: 8,
      trending: false,
      apps: ['Telegram Plus', 'Discord Plus', 'Signal Plus', 'Messenger Plus']
    },
    {
      id: 'entertainment',
      nameKey: 'apps.categories.entertainment.name',
      descKey: 'apps.categories.entertainment.description',
      icon: Play,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      count: 10,
      trending: true,
      apps: ['YouTube Plus', 'TikTok Plus', 'Netflix Plus', 'Twitch Plus']
    },
    {
      id: 'music',
      nameKey: 'apps.categories.music.name',
      descKey: 'apps.categories.music.description',
      icon: Music,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      count: 6,
      trending: false,
      apps: ['Spotify Plus', 'Apple Music Plus', 'SoundCloud Plus', 'Deezer Plus']
    },
    {
      id: 'photo',
      nameKey: 'apps.categories.photo.name',
      descKey: 'apps.categories.photo.description',
      icon: Camera,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      count: 7,
      trending: false,
      apps: ['VSCO Plus', 'Lightroom Plus', 'Canva Plus', 'PicsArt Plus']
    },
    {
      id: 'tools',
      nameKey: 'apps.categories.tools.name',
      descKey: 'apps.categories.tools.description',
      icon: Settings,
      color: 'from-gray-500 to-slate-600',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30',
      textColor: 'text-gray-400',
      count: 9,
      trending: true,
      apps: ['Ninja IPA', 'TweakBox Plus', 'Cydia Plus', 'iSponsorBlock']
    }
  ];

  const CategoryCard = ({ category }: { category: typeof categories[0] }) => (
    <Card className={`group relative overflow-hidden bg-white/5 backdrop-blur-md ${category.borderColor} hover:border-opacity-60 transition-all duration-500 hover:scale-105 cursor-pointer`}>
      {/* Trending Badge */}
      {category.trending && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs">
            <TrendingUp className="h-3 w-3 mr-1" />
            {t('apps.trending')}
          </Badge>
        </div>
      )}

      {/* Category Header */}
      <div className={`relative h-24 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/20" />
        <category.icon className="relative h-10 w-10 text-white" />
      </div>

      <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Category Name & Count */}
        <div className={`flex items-center justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
            {t(category.nameKey)}
          </h3>
          <Badge variant="secondary" className={`${category.bgColor} ${category.textColor} border-0`}>
            {category.count}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {t(category.descKey)}
        </p>

        {/* Featured Apps Preview */}
        <div className="mb-4">
          <h4 className="text-white font-medium mb-2 text-xs uppercase tracking-wide">
            {t('apps.categories.featuredApps')}
          </h4>
          <div className="space-y-1">
            {category.apps.slice(0, 3).map((app, index) => (
              <div key={index} className={`flex items-center gap-2 text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${category.textColor.replace('text-', 'bg-')}`} />
                <span>{app}</span>
              </div>
            ))}
            {category.apps.length > 3 && (
              <div className={`flex items-center gap-2 text-sm text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                <span>+{category.apps.length - 3} {t('apps.categories.more')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Explore Button */}
        <Button 
          size="sm" 
          variant="outline" 
          className={`w-full ${category.borderColor} ${category.textColor} hover:${category.bgColor} group-hover:scale-105 transition-all`}
        >
          {t('apps.categories.explore')}
          <ChevronRight className={`h-4 w-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'} group-hover:translate-x-1 transition-transform`} />
        </Button>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900/50 to-purple-900/50">
      <div className={`container mx-auto px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-500/20 text-indigo-200 border-indigo-500/30">
            {t('apps.categories.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('apps.categories.title')}
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            {t('apps.categories.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Popular Categories Banner */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-8">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <Star className="h-8 w-8 text-indigo-400" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h3 className="text-xl font-bold text-white mb-1">
                  {t('apps.categories.popular.title')}
                </h3>
                <p className="text-indigo-200">
                  {t('apps.categories.popular.subtitle')}
                </p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
            >
              {t('apps.categories.viewPopular')}
              <ChevronRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </div>
        </div>

        {/* Category Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-indigo-200 text-sm">{t('apps.stats.totalApps')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">6</div>
            <div className="text-indigo-200 text-sm">{t('apps.stats.categories')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-indigo-200 text-sm">{t('apps.stats.support')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-indigo-200 text-sm">{t('apps.stats.satisfaction')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCategories;

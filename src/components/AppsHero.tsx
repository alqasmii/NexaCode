import { Clock, Smartphone, Download, Star, Users, Bell, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AppsHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white" dir="rtl">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
            <Smartphone className="w-4 h-4 ml-2" />
            تطبيقات نيكسو المتميزة
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            اكتشف أفضل التطبيقات
            <span className="block mt-2">لجهازك المحمول</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            مجموعة منتقاة من أفضل التطبيقات المحمولة والألعاب والأدوات الإنتاجية. 
            اكتشف حمل واستمتع بتجربة رقمية استثنائية مع نيكسو.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Input 
                placeholder="ابحث عن التطبيقات..." 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                <Download className="w-4 h-4 ml-2" />
                بحث
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/10 border-white/20 p-6 text-center">
            <div className="flex justify-center mb-4">
              <Download className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-2xl font-bold mb-2">+500</div>
            <div className="text-gray-300 text-sm">تطبيق متاح</div>
          </Card>
          
          <Card className="bg-white/10 border-white/20 p-6 text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-2xl font-bold mb-2">+50ألف</div>
            <div className="text-gray-300 text-sm">مستخدم نشط</div>
          </Card>
          
          <Card className="bg-white/10 border-white/20 p-6 text-center">
            <div className="flex justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold mb-2">4.9</div>
            <div className="text-gray-300 text-sm">تقييم المستخدمين</div>
          </Card>
          
          <Card className="bg-white/10 border-white/20 p-6 text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-2xl font-bold mb-2">24/7</div>
            <div className="text-gray-300 text-sm">دعم فني</div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">تحديثات فورية</h3>
            <p className="text-gray-300">
              احصل على أحدث الإصدارات والتحديثات لتطبيقاتك المفضلة بشكل فوري ومجاني.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">تطبيقات منتقاة</h3>
            <p className="text-gray-300">
              مجموعة مختارة بعناية من أفضل التطبيقات والألعاب الحديثة والموثوقة.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">أداء متفوق</h3>
            <p className="text-gray-300">
              تطبيقات محسنة للأداء العالي والسرعة القصوى على جميع الأجهزة المحمولة.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg">
            <Download className="w-5 h-5 ml-2" />
            ابدأ التصفح الآن
          </Button>
        </div>
      </div>
    </div>
  );
}

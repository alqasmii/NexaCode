import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "تم الاشتراك بنجاح! 🎉",
        description: "شكراً لك على اشتراكك في نشرتنا الإخبارية. ستتلقى آخر تحديثاتنا وعروضنا الحصرية.",
        duration: 5000,
      });
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  const footerLinks = {
    products: [
      { text: 'تطبيقات الجوال', href: '/apps' },
      { text: 'الاشتراكات', href: '/subscriptions' },
      { text: 'الألعاب', href: '/gaming' },
      { text: 'أكواد التفعيل', href: '/codes' },
      { text: 'الخدمات الرقمية', href: '/services' }
    ],
    support: [
      { text: 'مركز المساعدة', href: '/help' },
      { text: 'اتصل بنا', href: '/contact' },
      { text: 'تتبع الطلب', href: '/tracking' },
      { text: 'سياسة الاسترداد', href: '/refunds' },
      { text: 'الأسئلة الشائعة', href: '/faq' }
    ],
    company: [
      { text: 'من نحن', href: '/about' },
      { text: 'الوظائف', href: '/careers' },
      { text: 'الصحافة', href: '/press' },
      { text: 'الشراكة', href: '/partnership' },
      { text: 'كن بائعاً', href: '/vendor' }
    ],
    legal: [
      { text: 'شروط الخدمة', href: '/terms' },
      { text: 'سياسة الخصوصية', href: '/privacy' },
      { text: 'سياسة ملفات تعريف الارتباط', href: '/cookies' },
      { text: 'GDPR', href: '/gdpr' },
      { text: 'التراخيص', href: '/licenses' }
    ]
  };

  const gccCountries = [
    { nameAr: 'عُمان', nameEn: 'Oman', flag: '🇴🇲', currency: 'OMR' },
    { nameAr: 'الإمارات', nameEn: 'UAE', flag: '🇦🇪', currency: 'AED' },
    { nameAr: 'السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', currency: 'SAR' },
    { nameAr: 'الكويت', nameEn: 'Kuwait', flag: '🇰🇼', currency: 'KWD' },
    { nameAr: 'قطر', nameEn: 'Qatar', flag: '🇶🇦', currency: 'QAR' },
    { nameAr: 'البحرين', nameEn: 'Bahrain', flag: '🇧🇭', currency: 'BHD' }
  ];

  return (
    <footer className="bg-primary-navy text-primary-navy-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-navy-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-cairo font-bold mb-4">
              ابق على اطلاع
            </h3>
            <p className="text-primary-navy-foreground/80 mb-6">
              اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والعروض الحصرية
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row-reverse gap-4 max-w-md mx-auto" dir="rtl">
              <Input 
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-navy-foreground/10 border-primary-navy-foreground/20 text-primary-navy-foreground placeholder:text-primary-navy-foreground/60"
                required
              />
              <Button 
                type="submit" 
                variant="accent" 
                className="w-full group hover:shadow-lg transition-all"
                disabled={isSubscribing}
              >
                {isSubscribing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    جاري الاشتراك...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    اشترك الآن
                  </>
                )}
              </Button>
            </form>
            <p className="text-xs text-primary-navy-foreground/60 mt-4">
              بالاشتراك، فإنك توافق على شروط الخدمة وسياسة الخصوصية
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-right" dir="rtl">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-cairo font-bold mb-4">
              نيكسو كودز
              <span className="text-accent-gold mx-2">•</span>
              Nexo Codes
            </h2>
            <p className="text-primary-navy-foreground/80 mb-6 font-cairo">
              منصة رائدة في دول الخليج العربي لتوفير المنتجات الرقمية والخدمات عالية الجودة. نقدم تطبيقات، ألعاب، واشتراكات رقمية بأفضل الأسعار وأعلى مستويات الأمان.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 flex-row-reverse">
                <MapPin className="h-4 w-4 text-accent-gold shrink-0" />
                <span className="text-sm">مسقط، سلطنة عُمان</span>
              </div>
              <div className="flex items-center gap-3 flex-row-reverse">
                <Phone className="h-4 w-4 text-accent-gold shrink-0" />
                <span className="text-sm">+968 9999 0000</span>
              </div>
              <div className="flex items-center gap-3 flex-row-reverse">
                <Mail className="h-4 w-4 text-accent-gold shrink-0" />
                <span className="text-sm">hello@nexocodes.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://facebook.com/nexocodes', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com/nexocodes', label: 'Twitter' },
                { icon: Instagram, href: 'https://instagram.com/nexocodes', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com/company/nexocodes', label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-navy-foreground/10 hover:bg-accent-gold hover:text-accent-gold-foreground p-2 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-cairo">المنتجات</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-primary-navy-foreground/80 hover:text-accent-gold transition-colors text-sm hover:underline font-cairo"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 font-cairo">الدعم</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-primary-navy-foreground/80 hover:text-accent-gold transition-colors text-sm hover:underline font-cairo"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 font-cairo">الشركة</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-primary-navy-foreground/80 hover:text-accent-gold transition-colors text-sm hover:underline font-cairo"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 font-cairo">الشروط القانونية</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-primary-navy-foreground/80 hover:text-accent-gold transition-colors text-sm hover:underline font-cairo"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GCC Countries Section */}
        <div className="border-t border-primary-navy-foreground/20 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center font-cairo">
            الدول التي نخدمها
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {gccCountries.map((country) => (
              <div key={country.nameEn} className="text-center">
                <span className="text-2xl mb-2 block">{country.flag}</span>
                <p className="text-sm font-medium font-cairo">
                  {country.nameAr}
                </p>
                <p className="text-xs text-primary-navy-foreground/60">{country.currency}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="border-t border-primary-navy-foreground/20 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-center font-cairo">
            طرق الدفع المتاحة
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {['VISA', 'MasterCard', 'MADA', 'Apple Pay', 'STC Pay', 'PayPal'].map((method) => (
              <div key={method} className="bg-primary-navy-foreground/10 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-navy-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-navy-foreground/80 flex-row-reverse">
              <span className="font-cairo">© 2024 نيكسو كودز. جميع الحقوق محفوظة</span>
              <Heart className="h-4 w-4 text-accent-gold fill-accent-gold" />
              <span className="font-cairo">صُنع بحب في عُمان</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-primary-navy-foreground/80">
              <span>🔒 SSL Secured</span>
              <span>•</span>
              <span>💳 Secure Payments</span>
              <span>•</span>
              <span>⚡ Instant Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

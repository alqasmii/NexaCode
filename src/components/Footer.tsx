import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      titleAr: 'المنتجات',
      links: [
        { name: 'Mobile Apps', nameAr: 'التطبيقات المحمولة', href: '/apps' },
        { name: 'Subscriptions', nameAr: 'الاشتراكات', href: '/subscriptions' },
        { name: 'Gaming', nameAr: 'الألعاب', href: '/gaming' },
        { name: 'Activation Codes', nameAr: 'أكواد التفعيل', href: '/codes' },
        { name: 'Digital Services', nameAr: 'الخدمات الرقمية', href: '/services' }
      ]
    },
    {
      title: 'Support',
      titleAr: 'الدعم',
      links: [
        { name: 'Help Center', nameAr: 'مركز المساعدة', href: '/help' },
        { name: 'Contact Us', nameAr: 'اتصل بنا', href: '/contact' },
        { name: 'Order Tracking', nameAr: 'تتبع الطلب', href: '/tracking' },
        { name: 'Refund Policy', nameAr: 'سياسة الاسترداد', href: '/refunds' },
        { name: 'FAQs', nameAr: 'الأسئلة الشائعة', href: '/faq' }
      ]
    },
    {
      title: 'Company',
      titleAr: 'الشركة',
      links: [
        { name: 'About Us', nameAr: 'من نحن', href: '/about' },
        { name: 'Careers', nameAr: 'الوظائف', href: '/careers' },
        { name: 'Press', nameAr: 'الصحافة', href: '/press' },
        { name: 'Partnership', nameAr: 'الشراكة', href: '/partnership' },
        { name: 'Become Vendor', nameAr: 'كن بائعاً', href: '/vendor' }
      ]
    },
    {
      title: 'Legal',
      titleAr: 'القانونية',
      links: [
        { name: 'Terms of Service', nameAr: 'شروط الخدمة', href: '/terms' },
        { name: 'Privacy Policy', nameAr: 'سياسة الخصوصية', href: '/privacy' },
        { name: 'Cookie Policy', nameAr: 'سياسة ملفات تعريف الارتباط', href: '/cookies' },
        { name: 'GDPR', nameAr: 'اللائحة العامة لحماية البيانات', href: '/gdpr' },
        { name: 'Licenses', nameAr: 'التراخيص', href: '/licenses' }
      ]
    }
  ];

  const gccCountries = [
    { name: 'Oman', flag: '🇴🇲', currency: 'OMR' },
    { name: 'UAE', flag: '🇦🇪', currency: 'AED' },
    { name: 'Saudi Arabia', flag: '🇸🇦', currency: 'SAR' },
    { name: 'Kuwait', flag: '🇰🇼', currency: 'KWD' },
    { name: 'Qatar', flag: '🇶🇦', currency: 'QAR' },
    { name: 'Bahrain', flag: '🇧🇭', currency: 'BHD' }
  ];

  return (
    <footer className="bg-primary-navy text-primary-navy-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-navy-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-cairo font-bold mb-4">
              Stay Updated with Latest Offers
            </h3>
            <p className="text-lg font-cairo text-accent-gold mb-4">
              ابق على اطلاع بأحدث العروض
            </p>
            <p className="text-primary-navy-foreground/80 mb-6">
              Subscribe to our newsletter and be the first to know about new products, exclusive discounts, and special promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-primary-navy-foreground/10 border-primary-navy-foreground/20 text-primary-navy-foreground placeholder:text-primary-navy-foreground/60"
              />
              <Button variant="accent" className="w-full group-hover:shadow-lg transition-all">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-primary-navy-foreground/60 mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-cairo font-bold mb-4">
              نكسا كودز
              <span className="text-accent-gold mx-2">•</span>
              Nexa Codes
            </h2>
            <p className="text-primary-navy-foreground/80 mb-6">
              The leading digital marketplace for premium apps, subscriptions, and digital services in the GCC region. Trusted by thousands of customers across the Middle East.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent-gold shrink-0" />
                <span className="text-sm">Muscat, Sultanate of Oman</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent-gold shrink-0" />
                <span className="text-sm">+968 9999 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent-gold shrink-0" />
                <span className="text-sm">hello@nexacodes.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-primary-navy-foreground/10 hover:bg-accent-gold hover:text-accent-gold-foreground p-2 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <p className="text-sm font-cairo text-accent-gold mb-4">{section.titleAr}</p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-navy-foreground/80 hover:text-accent-gold transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                    <p className="text-xs font-cairo text-primary-navy-foreground/60 mt-1">
                      {link.nameAr}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* GCC Countries Section */}
        <div className="border-t border-primary-navy-foreground/20 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">
            Serving the GCC Region
          </h4>
          <p className="text-center font-cairo text-accent-gold mb-6">
            نخدم دول مجلس التعاون الخليجي
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {gccCountries.map((country) => (
              <div key={country.name} className="text-center">
                <span className="text-2xl mb-2 block">{country.flag}</span>
                <p className="text-sm font-medium">{country.name}</p>
                <p className="text-xs text-primary-navy-foreground/60">{country.currency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-navy-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-navy-foreground/80">
              <span>© 2024 Nexa Codes. All rights reserved.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent-gold fill-accent-gold" />
              <span>in Oman</span>
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

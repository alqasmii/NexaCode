import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const footerLinks = {
    products: [
      { key: 'footer.links.mobileApps', href: '/apps' },
      { key: 'footer.links.subscriptions', href: '/subscriptions' },
      { key: 'footer.links.gaming', href: '/gaming' },
      { key: 'footer.links.activationCodes', href: '/codes' },
      { key: 'footer.links.digitalServices', href: '/services' }
    ],
    support: [
      { key: 'footer.links.helpCenter', href: '/help' },
      { key: 'footer.links.contactUs', href: '/contact' },
      { key: 'footer.links.orderTracking', href: '/tracking' },
      { key: 'footer.links.refundPolicy', href: '/refunds' },
      { key: 'footer.links.faqs', href: '/faq' }
    ],
    company: [
      { key: 'footer.links.aboutUs', href: '/about' },
      { key: 'footer.links.careers', href: '/careers' },
      { key: 'footer.links.press', href: '/press' },
      { key: 'footer.links.partnership', href: '/partnership' },
      { key: 'footer.links.becomeVendor', href: '/vendor' }
    ],
    legal: [
      { key: 'footer.links.termsOfService', href: '/terms' },
      { key: 'footer.links.privacyPolicy', href: '/privacy' },
      { key: 'footer.links.cookiePolicy', href: '/cookies' },
      { key: 'footer.links.gdpr', href: '/gdpr' },
      { key: 'footer.links.licenses', href: '/licenses' }
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
              {t('footer.stayUpdated')}
            </h3>
            <p className="text-primary-navy-foreground/80 mb-6">
              {t('footer.subscribeDesc')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Input 
                placeholder={t('footer.emailPlaceholder')}
                className="bg-primary-navy-foreground/10 border-primary-navy-foreground/20 text-primary-navy-foreground placeholder:text-primary-navy-foreground/60"
              />
              <Button variant="accent" className="w-full group-hover:shadow-lg transition-all">
                {t('footer.subscribe')}
              </Button>
            </div>
            <p className="text-xs text-primary-navy-foreground/60 mt-4">
              {t('footer.bySubscribing')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 ${isRTL ? 'text-right' : ''}`}>
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-cairo font-bold mb-4">
              نيكسو كودز
              <span className="text-accent-gold mx-2">•</span>
              Nexo Codes
            </h2>
            <p className="text-primary-navy-foreground/80 mb-6">
              {t('footer.brandDesc')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="h-4 w-4 text-accent-gold shrink-0" />
                <span className="text-sm">{t('footer.location')}</span>
              </div>
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="h-4 w-4 text-accent-gold shrink-0" />
                <span className="text-sm">+968 9999 0000</span>
              </div>
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="h-4 w-4 text-accent-gold shrink-0" />
                <span className="text-sm">hello@nexocodes.com</span>
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

          {/* Footer Links Sections */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.products')}</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="text-primary-navy-foreground/80 hover:text-accent-gold transition-colors text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.support')}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="text-primary-navy-foreground/80 hover:text-accent-gold transition-colors text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="text-primary-navy-foreground/80 hover:text-accent-gold transition-colors text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="text-primary-navy-foreground/80 hover:text-accent-gold transition-colors text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GCC Countries Section */}
        <div className="border-t border-primary-navy-foreground/20 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">
            {t('footer.servedCountries')}
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {gccCountries.map((country) => (
              <div key={country.nameEn} className="text-center">
                <span className="text-2xl mb-2 block">{country.flag}</span>
                <p className="text-sm font-medium">
                  {isRTL ? country.nameAr : country.nameEn}
                </p>
                <p className="text-xs text-primary-navy-foreground/60">{country.currency}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="border-t border-primary-navy-foreground/20 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-center">
            {t('footer.paymentMethods')}
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
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-2 text-sm text-primary-navy-foreground/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span>© 2024 {t('footer.copyright')}</span>
              <Heart className="h-4 w-4 text-accent-gold fill-accent-gold" />
              <span>{t('footer.copyright2')}</span>
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

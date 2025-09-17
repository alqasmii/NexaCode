import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export { LanguageContext }

// Translation dictionary
const translations = {
  // Navigation
  'nav.welcome': {
    ar: '🎉 مرحباً بكم في نيكسو - السوق الرقمي المتميز لدول الخليج',
    en: '🎉 Welcome to Nexo - Premium Digital Marketplace for the GCC'
  },
  'nav.support': {
    ar: '📞 الدعم: +968 9999 0000',
    en: '📞 Support: +968 9999 0000'
  },
  'nav.language': {
    ar: 'العربية',
    en: 'English'
  },
  'nav.search': {
    ar: 'البحث عن التطبيقات، الألعاب، الرموز...',
    en: 'Search for apps, games, codes...'
  },
  'nav.signIn': {
    ar: 'تسجيل الدخول',
    en: 'Sign In'
  },
  'nav.register': {
    ar: 'تسجيل',
    en: 'Register'
  },
  'nav.profile': {
    ar: 'الملف الشخصي',
    en: 'Profile'
  },
  'nav.orders': {
    ar: 'الطلبات',
    en: 'Orders'
  },
  'nav.signOut': {
    ar: 'تسجيل الخروج',
    en: 'Sign out'
  },

  // Categories
  'category.products': {
    ar: 'المنتجات',
    en: 'Products'
  },
  'category.services': {
    ar: 'الخدمات',
    en: 'Services'
  },
  'category.plus': {
    ar: 'بلس',
    en: 'Plus'
  },
  'category.apps': {
    ar: 'التطبيقات',
    en: 'Apps'
  },
  'category.subscriptions': {
    ar: 'الاشتراكات',
    en: 'Subscriptions'
  },
  'category.gaming': {
    ar: 'الألعاب',
    en: 'Gaming'
  },
  'category.codes': {
    ar: 'الرموز',
    en: 'Codes'
  },

  // Authentication
  'auth.title': {
    ar: 'نيكسو',
    en: 'Nexo'
  },
  'auth.subtitle': {
    ar: 'السوق الرقمي المتميز لدول الخليج',
    en: 'Your Gateway to Digital Excellence in the GCC'
  },
  'auth.signin': {
    ar: 'تسجيل الدخول',
    en: 'Sign In'
  },
  'auth.signup': {
    ar: 'حساب جديد',
    en: 'Sign Up'
  },
  'auth.email': {
    ar: 'البريد الإلكتروني',
    en: 'Email Address'
  },
  'auth.password': {
    ar: 'كلمة المرور',
    en: 'Password'
  },
  'auth.confirmPassword': {
    ar: 'تأكيد كلمة المرور',
    en: 'Confirm Password'
  },
  'auth.fullName': {
    ar: 'الاسم الكامل',
    en: 'Full Name'
  },
  'auth.forgotPassword': {
    ar: 'نسيت كلمة المرور؟',
    en: 'Forgot Password?'
  },
  'auth.resetPassword': {
    ar: 'إعادة تعيين كلمة المرور',
    en: 'Reset Password'
  },
  'auth.sendResetLink': {
    ar: 'إرسال رابط إعادة التعيين',
    en: 'Send Reset Link'
  },
  'auth.backToSignin': {
    ar: 'العودة لتسجيل الدخول',
    en: 'Back to Sign In'
  },
  'auth.createAccount': {
    ar: 'إنشاء حساب جديد',
    en: 'Create Account'
  },
  'auth.haveAccount': {
    ar: 'لديك حساب بالفعل؟',
    en: 'Already have an account?'
  },
  'auth.noAccount': {
    ar: 'ليس لديك حساب؟',
    en: "Don't have an account?"
  },
  'auth.signingIn': {
    ar: 'جاري تسجيل الدخول...',
    en: 'Signing in...'
  },
  'auth.creatingAccount': {
    ar: 'جاري إنشاء الحساب...',
    en: 'Creating account...'
  },
  'auth.sending': {
    ar: 'جاري الإرسال...',
    en: 'Sending...'
  },
  'auth.emailSent': {
    ar: 'تم الإرسال بنجاح!',
    en: 'Email Sent!'
  },
  'auth.resetEmailDesc': {
    ar: 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني',
    en: 'Password reset link has been sent to your email'
  },
  'auth.checkInbox': {
    ar: '📧 تحقق من صندوق الوارد الخاص بك (وملف الرسائل غير المرغوب فيها)',
    en: '📧 Check your inbox (and spam folder)'
  },
  'auth.sendAgain': {
    ar: 'إرسال مرة أخرى',
    en: 'Send Again'
  },
  'auth.resetDesc': {
    ar: 'أدخل عنوان بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين',
    en: 'Enter your email address and we\'ll send you a reset link'
  },
  'auth.termsText': {
    ar: 'بإنشاء حساب، فإنك توافق على',
    en: 'By creating an account, you agree to our'
  },
  'auth.terms': {
    ar: 'شروط الخدمة',
    en: 'Terms of Service'
  },
  'auth.privacy': {
    ar: 'سياسة الخصوصية',
    en: 'Privacy Policy'
  },
  'auth.and': {
    ar: 'و',
    en: 'and'
  },
  'auth.or': {
    ar: 'أو',
    en: 'OR'
  },

  // Password requirements
  'password.requirements': {
    ar: 'متطلبات كلمة المرور:',
    en: 'Password Requirements:'
  },
  'password.length': {
    ar: '8 أحرف كحد أدنى',
    en: '8 characters minimum'
  },
  'password.uppercase': {
    ar: 'حرف كبير',
    en: 'Uppercase letter'
  },
  'password.lowercase': {
    ar: 'حرف صغير',
    en: 'Lowercase letter'
  },
  'password.number': {
    ar: 'رقم',
    en: 'Number'
  },
  'password.special': {
    ar: 'رمز خاص',
    en: 'Special character'
  },

  // Error messages
  'error.fillFields': {
    ar: 'يرجى ملء جميع الحقول',
    en: 'Please fill all fields'
  },
  'error.passwordMismatch': {
    ar: 'كلمات المرور غير متطابقة',
    en: 'Passwords do not match'
  },
  'error.passwordRequirements': {
    ar: 'كلمة المرور لا تلبي المتطلبات',
    en: 'Password does not meet requirements'
  },
  'error.enterEmail': {
    ar: 'يرجى إدخال عنوان البريد الإلكتروني',
    en: 'Please enter your email address'
  },
  'error.signupFailed': {
    ar: 'فشل في إنشاء الحساب',
    en: 'Sign up failed'
  },

  // Success messages
  'success.signedIn': {
    ar: 'تم تسجيل الدخول بنجاح!',
    en: 'Successfully signed in!'
  },
  'success.accountCreated': {
    ar: 'تم إنشاء الحساب بنجاح! تحقق من بريدك الإلكتروني',
    en: 'Account created successfully! Check your email'
  },

  // Placeholders
  'placeholder.email': {
    ar: 'بريدك.الإلكتروني@مثال.com',
    en: 'your.email@example.com'
  },
  'placeholder.password': {
    ar: 'أدخل كلمة المرور',
    en: 'Enter your password'
  },
  'placeholder.confirmPassword': {
    ar: 'أكد كلمة المرور',
    en: 'Confirm your password'
  },
  'placeholder.createPassword': {
    ar: 'أنشئ كلمة مرور قوية',
    en: 'Create a strong password'
  },
  'placeholder.fullName': {
    ar: 'أحمد محمد',
    en: 'Ahmed Mohammed'
  },

  // Hero Section
  'hero.slide1.title': {
    ar: 'المنتجات الرقمية',
    en: 'Premium Digital Products'
  },
  'hero.slide1.subtitle': {
    ar: 'للشرق الأوسط ودول الخليج',
    en: 'For Middle East & GCC'
  },
  'hero.slide1.description': {
    ar: 'اكتشف أكبر مجموعة من المنتجات الرقمية والتطبيقات والخدمات المصممة خصيصاً لسوق دول الخليج',
    en: 'Discover the largest collection of digital products, apps, and services tailored for the GCC market.'
  },
  'hero.slide1.cta': {
    ar: 'استكشف الآن',
    en: 'Explore Now'
  },
  'hero.slide1.badge': {
    ar: '🎉 وصل حديثاً',
    en: '🎉 New Arrivals'
  },
  'hero.slide2.title': {
    ar: 'عالم الألعاب',
    en: 'Gaming Paradise'
  },
  'hero.slide2.subtitle': {
    ar: 'عالم الألعاب الرقمية',
    en: 'Digital Gaming World'
  },
  'hero.slide2.description': {
    ar: 'احصل على حسابات الألعاب المتميزة والعملات الداخلية ومحتوى الألعاب الحصري',
    en: 'Access premium gaming accounts, in-game currencies, and exclusive gaming content.'
  },
  'hero.slide2.cta': {
    ar: 'تسوق الألعاب',
    en: 'Shop Gaming'
  },
  'hero.slide2.badge': {
    ar: '🎮 مركز الألعاب',
    en: '🎮 Gaming Hub'
  },
  'hero.slide3.title': {
    ar: 'حلول الأعمال',
    en: 'Business Solutions'
  },
  'hero.slide3.subtitle': {
    ar: 'حلول الأعمال الرقمية',
    en: 'Digital Business Solutions'
  },
  'hero.slide3.description': {
    ar: 'اشتراكات البرامج المهنية وأدوات الأعمال للشركات في جميع أنحاء دول الخليج',
    en: 'Professional software subscriptions and business tools for enterprises across the GCC.'
  },
  'hero.slide3.cta': {
    ar: 'عرض الأعمال',
    en: 'View Business'
  },
  'hero.slide3.badge': {
    ar: '💼 للأعمال',
    en: '💼 For Business'
  },
  'hero.watchDemo': {
    ar: 'شاهد الديمو',
    en: 'Watch Demo'
  },
  'hero.demoTitle': {
    ar: 'عرض توضيحي - منصة نيكسا كودز',
    en: 'Platform Demo - NexaCode Platform'
  },
  'hero.demoSubtitle': {
    ar: 'عرض توضيحي للمنصة',
    en: 'Platform Demo Video'
  },
  'hero.demoDescription': {
    ar: 'شاهد كيف يمكنك شراء وإدارة منتجاتك الرقمية بسهولة',
    en: 'See how easy it is to buy and manage your digital products'
  },
  'hero.playDemo': {
    ar: 'تشغيل العرض التوضيحي',
    en: 'Play Demo'
  },
  'hero.demoToastMessage': {
    ar: 'هذه الميزة ستكون متاحة قريباً! تكامل مشغل الفيديو قادم.',
    en: 'This feature will be available soon! Video player integration coming up.'
  },
  'hero.feature1.title': {
    ar: 'معاملات آمنة',
    en: 'Secure Transactions'
  },
  'hero.feature1.description': {
    ar: 'حماية بمستوى البنوك لجميع المشتريات',
    en: 'Bank-level security for all purchases'
  },
  'hero.feature2.title': {
    ar: 'التسليم الفوري',
    en: 'Instant Delivery'
  },
  'hero.feature2.description': {
    ar: 'يتم تسليم المنتجات الرقمية فوراً',
    en: 'Digital products delivered immediately'
  },
  'hero.feature3.title': {
    ar: 'جودة ممتازة',
    en: 'Premium Quality'
  },
  'hero.feature3.description': {
    ar: 'منتجات عالية الجودة ومعتمدة فقط',
    en: 'Only verified, high-quality products'
  },
  'hero.sslSecured': {
    ar: 'محمي بـ SSL',
    en: 'SSL Secured'
  },
  'hero.rating': {
    ar: '4.9/5 تقييم',
    en: '4.9/5 Rating'
  },
  'hero.trustedBy': {
    ar: '🏆 موثوق من قبل أكثر من 50,000 عميل في دول الخليج',
    en: '🏆 Trusted by 50,000+ customers across GCC'
  },

  // Category Section
  'categories.title': {
    ar: 'استكشف الفئات',
    en: 'Explore Categories'
  },
  'categories.subtitle': {
    ar: 'اكتشف المنتجات الرقمية في جميع الفئات، مختارة بعناية لسوق دول الخليج',
    en: 'Browse our extensive catalog of digital solutions, handpicked for the Middle East region'
  },
  'categories.trending': {
    ar: 'رائج',
    en: 'Trending'
  },
  'categories.items': {
    ar: 'عناصر',
    en: 'items'
  },
  'categories.viewAll': {
    ar: 'عرض الكل',
    en: 'View All'
  },
  'categories.recentlyAdded': {
    ar: 'المضاف مؤخراً',
    en: 'Recently Added'
  },
  'categories.freshArrivals': {
    ar: 'وصل حديثاً هذا الأسبوع',
    en: 'Fresh arrivals this week'
  },
  'categories.apps.title': {
    ar: 'التطبيقات المحمولة',
    en: 'Mobile Apps'
  },
  'categories.apps.description': {
    ar: 'تطبيقات متميزة للآيفون والأندرويد',
    en: 'Premium iOS & Android applications'
  },
  'categories.subscriptions.title': {
    ar: 'الاشتراكات',
    en: 'Subscriptions'
  },
  'categories.subscriptions.description': {
    ar: 'نتفليكس، سبوتيفاي، أدوبي والمزيد',
    en: 'Netflix, Spotify, Adobe & more'
  },
  'categories.gaming.title': {
    ar: 'الألعاب',
    en: 'Gaming'
  },
  'categories.gaming.description': {
    ar: 'حسابات الألعاب والعملات الرقمية',
    en: 'Game accounts, skins & currencies'
  },

  // Testimonials Section
  'testimonials.title': {
    ar: 'ماذا يقول عملاؤنا',
    en: 'What Our Customers Say'
  },
  'testimonials.subtitle': {
    ar: 'اكتشف لماذا يثق آلاف العملاء في منطقة الخليج بـ نيكسو لاحتياجاتهم الرقمية',
    en: 'See what our satisfied customers are saying about their experience with Nexo'
  },
  'testimonials.averageRating': {
    ar: 'متوسط التقييم',
    en: 'Average Rating'
  },
  'testimonials.happyCustomers': {
    ar: 'عميل سعيد',
    en: 'Happy Customers'
  },
  'testimonials.gccCountries': {
    ar: 'دول الخليج',
    en: 'GCC Countries'
  },

  // Footer Section
  'footer.stayUpdated': {
    ar: 'ابق على اطلاع بأحدث العروض',
    en: 'Stay Updated with Latest Offers'
  },
  'footer.subscribeDesc': {
    ar: 'اشترك في نشرتنا الإخبارية وكن أول من يعرف عن المنتجات الجديدة والخصومات الحصرية والعروض الترويجية الخاصة',
    en: 'Subscribe to our newsletter and be the first to know about new products, exclusive discounts, and special promotions.'
  },
  'footer.bySubscribing': {
    ar: 'بالاشتراك، فإنك توافق على سياسة الخصوصية وشروط الخدمة الخاصة بنا',
    en: 'By subscribing, you agree to our Privacy Policy and Terms of Service.'
  },
  'footer.brandDesc': {
    ar: 'السوق الرقمي الرائد للتطبيقات المتميزة والاشتراكات والخدمات الرقمية في منطقة دول الخليج. موثوق من قبل آلاف العملاء في الشرق الأوسط',
    en: 'The leading digital marketplace for premium apps, subscriptions, and digital services in the GCC region. Trusted by thousands of customers across the Middle East.'
  },
  'footer.location': {
    ar: 'مسقط، سلطنة عُمان',
    en: 'Muscat, Sultanate of Oman'
  },
  'footer.servedCountries': {
    ar: 'البلدان التي نخدمها',
    en: 'Countries We Serve'
  },
  'footer.paymentMethods': {
    ar: 'طرق الدفع',
    en: 'Payment Methods'
  },
  'footer.copyright2': {
    ar: 'في قلب المنطقة',
    en: 'in the heart of the region'
  },
  'footer.products': {
    ar: 'المنتجات',
    en: 'Products'
  },
  'footer.support': {
    ar: 'الدعم',
    en: 'Support'
  },
  'footer.company': {
    ar: 'الشركة',
    en: 'Company'
  },
  'footer.legal': {
    ar: 'القانونية',
    en: 'Legal'
  },
  'footer.newsletter': {
    ar: 'النشرة الإخبارية',
    en: 'Newsletter'
  },
  'footer.newsletterDesc': {
    ar: 'اشترك لتكون أول من يعرف عن العروض الحصرية والمنتجات الجديدة',
    en: 'Subscribe to be the first to know about exclusive offers and new products'
  },
  'footer.subscribe': {
    ar: 'اشترك',
    en: 'Subscribe'
  },
  'footer.copyright': {
    ar: 'جميع الحقوق محفوظة لـ نيكسو. صُنع بـ',
    en: 'All rights reserved to Nexo. Made with'
  },
  'footer.emailPlaceholder': {
    ar: 'أدخل بريدك الإلكتروني',
    en: 'Enter your email address'
  },

  // Footer Links
  'footer.links.mobileApps': {
    ar: 'التطبيقات المحمولة',
    en: 'Mobile Apps'
  },
  'footer.links.subscriptions': {
    ar: 'الاشتراكات',
    en: 'Subscriptions'
  },
  'footer.links.gaming': {
    ar: 'الألعاب',
    en: 'Gaming'
  },
  'footer.links.activationCodes': {
    ar: 'أكواد التفعيل',
    en: 'Activation Codes'
  },
  'footer.links.digitalServices': {
    ar: 'الخدمات الرقمية',
    en: 'Digital Services'
  },
  'footer.links.helpCenter': {
    ar: 'مركز المساعدة',
    en: 'Help Center'
  },
  'footer.links.contactUs': {
    ar: 'اتصل بنا',
    en: 'Contact Us'
  },
  'footer.links.orderTracking': {
    ar: 'تتبع الطلب',
    en: 'Order Tracking'
  },
  'footer.links.refundPolicy': {
    ar: 'سياسة الاسترداد',
    en: 'Refund Policy'
  },
  'footer.links.faqs': {
    ar: 'الأسئلة الشائعة',
    en: 'FAQs'
  },
  'footer.links.aboutUs': {
    ar: 'من نحن',
    en: 'About Us'
  },
  'footer.links.careers': {
    ar: 'الوظائف',
    en: 'Careers'
  },
  'footer.links.press': {
    ar: 'الصحافة',
    en: 'Press'
  },
  'footer.links.partnership': {
    ar: 'الشراكة',
    en: 'Partnership'
  },
  'footer.links.becomeVendor': {
    ar: 'كن بائعاً',
    en: 'Become Vendor'
  },
  'footer.links.termsOfService': {
    ar: 'شروط الخدمة',
    en: 'Terms of Service'
  },
  'footer.links.privacyPolicy': {
    ar: 'سياسة الخصوصية',
    en: 'Privacy Policy'
  },
  'footer.links.cookiePolicy': {
    ar: 'سياسة ملفات تعريف الارتباط',
    en: 'Cookie Policy'
  },
  'footer.links.gdpr': {
    ar: 'اللائحة العامة لحماية البيانات',
    en: 'GDPR'
  },
  'footer.links.licenses': {
    ar: 'التراخيص',
    en: 'Licenses'
  },

  // NotFound Page
  'notFound.title': {
    ar: '404',
    en: '404'
  },
  'notFound.message': {
    ar: 'عذراً! الصفحة غير موجودة',
    en: 'Oops! Page not found'
  },
  'notFound.returnHome': {
    ar: 'العودة للرئيسية',
    en: 'Return to Home'
  },

  // Subscriptions Page
  'subscriptions.badge': {
    ar: '🔥 حسابات اشتراكات مميزة',
    en: '🔥 Premium Subscription Accounts'
  },
  'subscriptions.title': {
    ar: 'حسابات اشتراكات',
    en: 'Premium Subscription'
  },
  'subscriptions.titleHighlight': {
    ar: 'مميزة',
    en: 'Accounts'
  },
  'subscriptions.subtitle': {
    ar: 'حسابات اشتراكات مميزة للشرق الأوسط ودول الخليج',
    en: 'Premium subscription accounts for the Middle East and GCC countries'
  },
  'subscriptions.description': {
    ar: 'احصل على خدمات البث المتميزة وأدوات الإنتاجية والمنصات الرقمية مع حسابات موثقة. تسليم فوري وضمان مدى الحياة ودعم على مدار الساعة.',
    en: 'Access premium streaming services, productivity tools, and digital platforms with verified accounts. Instant delivery, lifetime warranty, and 24/7 support included.'
  },
  'subscriptions.searchPlaceholder': {
    ar: 'ابحث عن نتفلكس، ChatGPT، سبوتيفاي، أدوبي...',
    en: 'Search for Netflix, ChatGPT, Spotify, Adobe...'
  },

  // Subscription Filters
  'subscriptions.filters.all': {
    ar: 'جميع الاشتراكات',
    en: 'All Subscriptions'
  },
  'subscriptions.filters.streaming': {
    ar: 'البث المباشر',
    en: 'Streaming'
  },
  'subscriptions.filters.productivity': {
    ar: 'الإنتاجية',
    en: 'Productivity'
  },
  'subscriptions.filters.gaming': {
    ar: 'الألعاب',
    en: 'Gaming'
  },
  'subscriptions.filters.education': {
    ar: 'التعليم',
    en: 'Education'
  },
  'subscriptions.filters.business': {
    ar: 'الأعمال',
    en: 'Business'
  },

  // Subscription Stats
  'subscriptions.stats.verifiedAccounts': {
    ar: 'حسابات موثقة',
    en: 'Verified Accounts'
  },
  'subscriptions.stats.instantDelivery': {
    ar: 'تسليم فوري',
    en: 'Instant Delivery'
  },
  'subscriptions.stats.customerRating': {
    ar: 'تقييم العملاء',
    en: 'Customer Rating'
  },
  'subscriptions.stats.happyCustomers': {
    ar: 'عميل سعيد',
    en: 'Happy Customers'
  },

  // Featured Subscriptions
  'subscriptions.featured.title': {
    ar: 'الاشتراكات المميزة',
    en: 'Featured Subscriptions'
  },
  'subscriptions.featured.subtitle': {
    ar: 'اختر من أفضل الحسابات المميزة والموثقة',
    en: 'Choose from the best premium and verified accounts'
  },
  'subscriptions.featured.mostPopular': {
    ar: 'الأكثر شعبية',
    en: 'Most Popular'
  },
  'subscriptions.featured.verified': {
    ar: 'موثق',
    en: 'Verified'
  },
  'subscriptions.featured.warranty': {
    ar: 'ضمان مدى الحياة',
    en: 'Lifetime Warranty'
  },
  'subscriptions.featured.instantDelivery': {
    ar: 'تسليم فوري',
    en: 'Instant Delivery'
  },
  'subscriptions.featured.reviews': {
    ar: 'تقييم',
    en: 'reviews'
  },
  'subscriptions.featured.month': {
    ar: 'شهر',
    en: 'Month'
  },
  'subscriptions.featured.viewAll': {
    ar: 'عرض الكل',
    en: 'View All'
  },
  'subscriptions.featured.addToCart': {
    ar: 'أضف للسلة',
    en: 'Add to Cart'
  },
  'subscriptions.featured.buyNow': {
    ar: 'اشتري الآن',
    en: 'Buy Now'
  },

  // Gaming Page
  'gaming.badge': {
    ar: '🎮 مركز الألعاب المتطور',
    en: '🎮 Ultimate Gaming Hub'
  },
  'gaming.title': {
    ar: 'حسابات ألعاب',
    en: 'Epic Gaming'
  },
  'gaming.titleHighlight': {
    ar: 'ملحمية',
    en: 'Accounts'
  },
  'gaming.subtitle': {
    ar: 'حسابات الألعاب المميزة مع جميع الإضافات والمحتويات',
    en: 'Premium gaming accounts with all DLCs and exclusive content'
  },
  'gaming.description': {
    ar: 'اكتشف حسابات الألعاب المميزة مع الأزياء النادرة والعناصر الحصرية والتقدم الهائل. من حسابات فورتنايت مع الأزياء الأسطورية إلى مكتبات ستيم مع مئات الألعاب!',
    en: 'Discover premium gaming accounts with rare skins, exclusive items, and tons of progress. From Fortnite accounts with legendary skins to Steam libraries with hundreds of games!'
  },
  'gaming.searchPlaceholder': {
    ar: 'ابحث عن فورتنايت، ستيم، في باكز، روبوكس...',
    en: 'Search Fortnite, Steam, V-Bucks, Robux...'
  },

  // Gaming Filters
  'gaming.filters.allGames': {
    ar: 'جميع الألعاب',
    en: 'All Games'
  },
  'gaming.filters.fortnite': {
    ar: 'فورتنايت',
    en: 'Fortnite'
  },
  'gaming.filters.steam': {
    ar: 'ستيم',
    en: 'Steam'
  },
  'gaming.filters.roblox': {
    ar: 'روبلوكس',
    en: 'Roblox'
  },
  'gaming.filters.valorant': {
    ar: 'فالورانت',
    en: 'Valorant'
  },
  'gaming.filters.minecraft': {
    ar: 'ماينكرافت',
    en: 'Minecraft'
  },

  // Gaming Stats
  'gaming.stats.gamingAccounts': {
    ar: 'حساب ألعاب',
    en: 'Gaming Accounts'
  },
  'gaming.stats.instantDelivery': {
    ar: 'تسليم فوري',
    en: 'Instant Delivery'
  },
  'gaming.stats.secureAndSafe': {
    ar: 'آمن ومحمي',
    en: 'Secure & Safe'
  },
  'gaming.stats.happyGamers': {
    ar: 'لاعب سعيد',
    en: 'Happy Gamers'
  },

  // Gaming Quick Access
  'gaming.quickAccess.fortniteAccounts': {
    ar: '🎯 حسابات فورتنايت',
    en: '🎯 Fortnite Accounts'
  },
  'gaming.quickAccess.steamLibraries': {
    ar: '🎮 مكتبات ستيم',
    en: '🎮 Steam Libraries'
  },
  'gaming.quickAccess.vbucksRobux': {
    ar: '💎 في باكز وروبوكس',
    en: '💎 V-Bucks & Robux'
  },
  'gaming.quickAccess.rareSkinsItems': {
    ar: '🏆 أزياء وعناصر نادرة',
    en: '🏆 Rare Skins & Items'
  },

  // Codes Page Translations
  'codes.badge': {
    ar: '🎫 مركز الأكواد الرقمية المميزة',
    en: '🎫 Premium Digital Codes Hub'
  },
  'codes.title': {
    ar: 'أكواد رقمية',
    en: 'Premium Digital'
  },
  'codes.titleHighlight': {
    ar: 'مميزة',
    en: 'Codes'
  },
  'codes.subtitle': {
    ar: 'أكواد رقمية مميزة للألعاب والتطبيقات والخدمات',
    en: 'Premium digital codes for games, apps and services'
  },
  'codes.description': {
    ar: 'احصل على ألعاب مميزة وبرمجيات وخدمات مع أكوادنا الرقمية الموثقة. من أكواد تفعيل الألعاب إلى قسائم الخصم - احصل على وصول فوري بأسعار لا تُقاوم!',
    en: 'Unlock premium games, software, and services with our verified digital codes. From game activation codes to discount vouchers - get instant access at unbeatable prices!'
  },
  'codes.searchPlaceholder': {
    ar: 'ابحث عن أكواد ستيم، إكس بوكس، بلايستيشن، البرمجيات...',
    en: 'Search Steam, Xbox, PlayStation, Software codes...'
  },

  // Codes Filters
  'codes.filters.allCodes': {
    ar: 'جميع الأكواد',
    en: 'All Codes'
  },
  'codes.filters.gameCodes': {
    ar: 'أكواد الألعاب',
    en: 'Game Codes'
  },
  'codes.filters.discountCodes': {
    ar: 'أكواد الخصم',
    en: 'Discount Codes'
  },
  'codes.filters.steamCodes': {
    ar: 'أكواد ستيم',
    en: 'Steam Codes'
  },
  'codes.filters.giftCards': {
    ar: 'بطاقات الهدايا',
    en: 'Gift Cards'
  },
  'codes.filters.software': {
    ar: 'البرمجيات',
    en: 'Software'
  },

  // Codes Stats
  'codes.stats.premiumCodes': {
    ar: 'كود مميز',
    en: 'Premium Codes'
  },
  'codes.stats.codeDelivery': {
    ar: 'تسليم الكود',
    en: 'Code Delivery'
  },
  'codes.stats.verifiedCodes': {
    ar: 'أكواد موثقة',
    en: 'Verified Codes'
  },
  'codes.stats.savingsUpTo': {
    ar: 'توفير يصل إلى',
    en: 'Savings Up To'
  },

  // Codes Quick Access
  'codes.quickAccess.gameActivationCodes': {
    ar: '🎮 أكواد تفعيل الألعاب',
    en: '🎮 Game Activation Codes'
  },
  'codes.quickAccess.giftCardCodes': {
    ar: '💳 أكواد بطاقات الهدايا',
    en: '💳 Gift Card Codes'
  },
  'codes.quickAccess.discountVouchers': {
    ar: '🎯 قسائم الخصم',
    en: '🎯 Discount Vouchers'
  },
  'codes.quickAccess.softwareLicenses': {
    ar: '💻 تراخيص البرمجيات',
    en: '💻 Software Licenses'
  },

  // Codes Trust Indicators
  'codes.trust.instantCodeDelivery': {
    ar: 'تسليم الكود الفوري',
    en: 'Instant Code Delivery'
  },
  'codes.trust.verifiedTested': {
    ar: 'موثق ومختبر',
    en: 'Verified & Tested'
  },
  'codes.trust.savingsPercent': {
    ar: 'توفير حتى 70%',
    en: 'Up to 70% Savings'
  },

  // Featured Codes
  'codes.featured.title': {
    ar: 'الأكواد المميزة',
    en: 'Featured Codes'
  },
  'codes.featured.subtitle': {
    ar: 'أفضل العروض على الأكواد الرقمية المطلوبة',
    en: 'Best deals on the most sought-after digital codes'
  },
  'codes.featured.bestSeller': {
    ar: 'الأكثر مبيعاً',
    en: 'Best Seller'
  },
  'codes.featured.instantDelivery': {
    ar: 'تسليم فوري',
    en: 'Instant Delivery'
  },
  'codes.featured.verified': {
    ar: 'موثق',
    en: 'Verified'
  },
  'codes.featured.global': {
    ar: 'عالمي',
    en: 'Global'
  },
  'codes.featured.addToCart': {
    ar: 'أضف للسلة',
    en: 'Add to Cart'
  },
  'codes.featured.buyNow': {
    ar: 'اشتري الآن',
    en: 'Buy Now'
  },
  'codes.featured.viewDetails': {
    ar: 'عرض التفاصيل',
    en: 'View Details'
  },
  'codes.featured.originalPrice': {
    ar: 'السعر الأصلي',
    en: 'Original Price'
  },
  'codes.featured.reviews': {
    ar: 'تقييم',
    en: 'reviews'
  },

  // Code Categories
  'codes.categories.title': {
    ar: 'فئات الأكواد',
    en: 'Code Categories'
  },
  'codes.categories.subtitle': {
    ar: 'استكشف مجموعتنا الواسعة من الأكواد الرقمية',
    en: 'Explore our wide range of digital codes'
  },
  'codes.categories.viewAll': {
    ar: 'عرض الكل',
    en: 'View All'
  },

  // Discount Codes
  'codes.discount.title': {
    ar: 'أكواد الخصم الحصرية',
    en: 'Exclusive Discount Codes'
  },
  'codes.discount.subtitle': {
    ar: 'وفر أكثر مع أكواد الخصم الخاصة بنا',
    en: 'Save more with our exclusive discount codes'
  },
  'codes.discount.limited': {
    ar: 'عرض محدود',
    en: 'Limited Offer'
  },
  'codes.discount.expires': {
    ar: 'ينتهي في',
    en: 'Expires in'
  },
  'codes.discount.useCoupon': {
    ar: 'استخدم الكوبون',
    en: 'Use Coupon'
  },
  'codes.discount.applyCoupon': {
    ar: 'طبق الكوبون',
    en: 'Apply Coupon'
  },

  // Codes Benefits
  'codes.benefits.title': {
    ar: 'لماذا تختار أكوادنا؟',
    en: 'Why Choose Our Codes?'
  },
  'codes.benefits.subtitle': {
    ar: 'نقدم أفضل الأكواد الرقمية بأعلى جودة وموثوقية',
    en: 'We provide the best digital codes with highest quality and reliability'
  },
  'codes.benefits.instantDelivery.title': {
    ar: 'تسليم فوري',
    en: 'Instant Delivery'
  },
  'codes.benefits.instantDelivery.description': {
    ar: 'احصل على أكوادك فور إتمام الشراء عبر البريد الإلكتروني',
    en: 'Get your codes instantly after purchase via email'
  },
  'codes.benefits.verifiedCodes.title': {
    ar: 'أكواد موثقة',
    en: 'Verified Codes'
  },
  'codes.benefits.verifiedCodes.description': {
    ar: 'جميع أكوادنا مختبرة وموثقة قبل البيع',
    en: 'All our codes are tested and verified before sale'
  },
  'codes.benefits.bestPrices.title': {
    ar: 'أفضل الأسعار',
    en: 'Best Prices'
  },
  'codes.benefits.bestPrices.description': {
    ar: 'نقدم أسعار تنافسية مع خصومات تصل إلى 70%',
    en: 'Competitive prices with discounts up to 70%'
  },
  'codes.benefits.support.title': {
    ar: 'دعم متميز',
    en: 'Premium Support'
  },
  'codes.benefits.support.description': {
    ar: 'فريق دعم متخصص متاح 24/7 لمساعدتك',
    en: 'Dedicated support team available 24/7 to help you'
  },

  // Services Page Translations
  'services.badge': {
    ar: '🛠️ خدمات تقنية احترافية',
    en: '🛠️ Professional Tech Services'
  },
  'services.title': {
    ar: 'خدمات تقنية',
    en: 'Expert Tech Services'
  },
  'services.titleHighlight': {
    ar: 'خبيرة',
    en: 'Expert'
  },
  'services.subtitle': {
    ar: 'في متناول يديك',
    en: 'at Your Fingertips'
  },
  'services.description': {
    ar: 'احصل على مساعدة احترافية في تحسين الكمبيوتر، وإصلاح المشاكل، وتطوير المواقع، والمزيد. خبراؤنا يقدمون الدعم المباشر عبر مكالمات الفيديو أو فيديوهات تعليمية مفصلة.',
    en: 'Get professional help with PC optimization, troubleshooting, website development, and more. Our experts provide live support via video calls or detailed video tutorials tailored to your needs.'
  },
  'services.searchPlaceholder': {
    ar: 'ابحث عن الخدمات (تحسين الكمبيوتر، بناء المواقع، إلخ)',
    en: 'Search for services (PC optimization, website building, etc.)'
  },

  // Services Filters
  'services.filters.allServices': {
    ar: 'جميع الخدمات',
    en: 'All Services'
  },
  'services.filters.pcOptimization': {
    ar: 'تحسين الكمبيوتر',
    en: 'PC Optimization'
  },
  'services.filters.troubleshooting': {
    ar: 'إصلاح المشاكل',
    en: 'Troubleshooting'
  },
  'services.filters.development': {
    ar: 'التطوير',
    en: 'Development'
  },
  'services.filters.consulting': {
    ar: 'استشارات',
    en: 'Consulting'
  },

  // Services Stats
  'services.stats.clientsServed': {
    ar: 'عميل تم خدمته',
    en: 'Clients Served'
  },
  'services.stats.liveSupport': {
    ar: 'دعم مباشر',
    en: 'Live Support'
  },
  'services.stats.successRate': {
    ar: 'معدل النجاح',
    en: 'Success Rate'
  },

  // Services Action Items
  'services.actions.getQuote': {
    ar: 'احصل على عرض سعر',
    en: 'Get Quote'
  },
  'services.actions.bookConsultation': {
    ar: 'احجز استشارة',
    en: 'Book Consultation'
  },
  'services.actions.viewServices': {
    ar: 'عرض الخدمات',
    en: 'View Services'
  },
  'services.actions.contactExpert': {
    ar: 'تواصل مع خبير',
    en: 'Contact Expert'
  },

  // Featured Services
  'services.featured.title': {
    ar: 'الخدمات المميزة',
    en: 'Featured Services'
  },
  'services.featured.subtitle': {
    ar: 'خدمات تقنية احترافية مع خبراء متخصصين',
    en: 'Professional tech services with specialized experts'
  },
  'services.featured.liveSessions': {
    ar: 'جلسات مباشرة',
    en: 'Live Sessions'
  },
  'services.featured.videoTutorials': {
    ar: 'فيديوهات تعليمية',
    en: 'Video Tutorials'
  },
  'services.featured.instantSupport': {
    ar: 'دعم فوري',
    en: 'Instant Support'
  },
  'services.featured.expertAdvice': {
    ar: 'نصائح خبير',
    en: 'Expert Advice'
  },
  'services.featured.satisfactionGuarantee': {
    ar: 'ضمان الرضا',
    en: 'Satisfaction Guarantee'
  },

  // Service Categories
  'services.categories.title': {
    ar: 'فئات الخدمات',
    en: 'Service Categories'
  },
  'services.categories.subtitle': {
    ar: 'استكشف مجموعتنا الواسعة من الخدمات التقنية',
    en: 'Explore our wide range of tech services'
  },
  'services.categories.pcOptimization.title': {
    ar: 'تحسين الكمبيوتر',
    en: 'PC Optimization'
  },
  'services.categories.pcOptimization.description': {
    ar: 'تحسين أداء جهازك وسرعته',
    en: 'Optimize your PC performance and speed'
  },
  'services.categories.webDevelopment.title': {
    ar: 'تطوير المواقع',
    en: 'Web Development'
  },
  'services.categories.webDevelopment.description': {
    ar: 'مواقع احترافية وتطبيقات ويب',
    en: 'Professional websites and web applications'
  },
  'services.categories.troubleshooting.title': {
    ar: 'إصلاح المشاكل',
    en: 'Troubleshooting'
  },
  'services.categories.troubleshooting.description': {
    ar: 'حل المشاكل التقنية بسرعة',
    en: 'Solve technical issues quickly'
  },
  'services.categories.consulting.title': {
    ar: 'استشارات تقنية',
    en: 'Tech Consulting'
  },
  'services.categories.consulting.description': {
    ar: 'نصائح وحلول تقنية متخصصة',
    en: 'Expert tech advice and solutions'
  },

  // Service Packages
  'services.packages.title': {
    ar: 'حزم الخدمات',
    en: 'Service Packages'
  },
  'services.packages.subtitle': {
    ar: 'اختر الحزمة المناسبة لاحتياجاتك',
    en: 'Choose the right package for your needs'
  },
  'services.packages.basic.title': {
    ar: 'الحزمة الأساسية',
    en: 'Basic Package'
  },
  'services.packages.basic.description': {
    ar: 'حلول سريعة للمشاكل البسيطة',
    en: 'Quick solutions for simple issues'
  },
  'services.packages.professional.title': {
    ar: 'الحزمة الاحترافية',
    en: 'Professional Package'
  },
  'services.packages.professional.description': {
    ar: 'خدمات شاملة مع دعم متقدم',
    en: 'Comprehensive services with advanced support'
  },
  'services.packages.enterprise.title': {
    ar: 'حزمة المؤسسات',
    en: 'Enterprise Package'
  },
  'services.packages.enterprise.description': {
    ar: 'حلول مخصصة للشركات الكبيرة',
    en: 'Custom solutions for large businesses'
  },

  // Services Benefits
  'services.benefits.title': {
    ar: 'لماذا تختار خدماتنا؟',
    en: 'Why Choose Our Services?'
  },
  'services.benefits.subtitle': {
    ar: 'نقدم أفضل الخدمات التقنية بأعلى جودة ومصداقية',
    en: 'We provide the best tech services with highest quality and reliability'
  },
  'services.benefits.expertsAvailable': {
    ar: 'خبراء متاحون',
    en: 'Experts Available'
  },
  'services.benefits.expertsDescription': {
    ar: 'فريق من الخبراء المعتمدين متاح 24/7',
    en: 'Team of certified experts available 24/7'
  },
  'services.benefits.fastResponse': {
    ar: 'استجابة سريعة',
    en: 'Fast Response'
  },
  'services.benefits.fastResponseDescription': {
    ar: 'نستجيب لطلباتك في أقل من ساعة',
    en: 'We respond to your requests in less than an hour'
  },
  'services.benefits.qualityGuarantee': {
    ar: 'ضمان الجودة',
    en: 'Quality Guarantee'
  },
  'services.benefits.qualityDescription': {
    ar: 'نضمن جودة العمل أو نعيد المال',
    en: 'We guarantee quality work or money back'
  },
  'services.benefits.affordablePrices': {
    ar: 'أسعار معقولة',
    en: 'Affordable Prices'
  },
  'services.benefits.affordableDescription': {
    ar: 'خدمات عالية الجودة بأسعار تنافسية',
    en: 'High-quality services at competitive prices'
  },

  // Service Types
  'services.types.liveSupport': {
    ar: 'دعم مباشر',
    en: 'Live Support'
  },
  'services.types.videoCall': {
    ar: 'مكالمة فيديو',
    en: 'Video Call'
  },
  'services.types.screenShare': {
    ar: 'مشاركة الشاشة',
    en: 'Screen Share'
  },
  'services.types.tutorialVideo': {
    ar: 'فيديو تعليمي',
    en: 'Tutorial Video'
  },
  'services.types.customSolution': {
    ar: 'حل مخصص',
    en: 'Custom Solution'
  },

  // Common Service Terms
  'services.common.duration': {
    ar: 'المدة',
    en: 'Duration'
  },
  'services.common.price': {
    ar: 'السعر',
    en: 'Price'
  },
  'services.common.rating': {
    ar: 'التقييم',
    en: 'Rating'
  },
  'services.common.reviews': {
    ar: 'تقييم',
    en: 'reviews'
  },
  'services.common.available': {
    ar: 'متاح',
    en: 'Available'
  },
  'services.common.busy': {
    ar: 'مشغول',
    en: 'Busy'
  },
  'services.common.online': {
    ar: 'متصل',
    en: 'Online'
  },
  'services.common.offline': {
    ar: 'غير متصل',
    en: 'Offline'
  },

  // Apps Page Translations (Coming Soon)
  'apps.badge': {
    ar: '📱 تطبيقات بلس مميزة',
    en: '📱 Premium Plus Apps'
  },
  'apps.title': {
    ar: 'تطبيقات بلس',
    en: 'Plus Apps'
  },
  'apps.titleHighlight': {
    ar: 'قريباً',
    en: 'Coming Soon'
  },
  'apps.subtitle': {
    ar: 'تطبيقات محسنة بميزات إضافية',
    en: 'Enhanced apps with extra features'
  },
  'apps.description': {
    ar: 'نحن نعمل على إنشاء متجر خاص للتطبيقات المحسنة والمعدلة. احصل على إصدارات بلس من تطبيقاتك المفضلة مع ميزات إضافية لا تتوفر في التطبيقات الرسمية.',
    en: 'We are working on creating a private store for enhanced and modified apps. Get Plus versions of your favorite apps with extra features not available in official apps.'
  },
  'apps.comingSoon': {
    ar: 'قريباً جداً',
    en: 'Coming Very Soon'
  },
  'apps.notifyMe': {
    ar: 'أعلمني عند الإطلاق',
    en: 'Notify Me When Available'
  },
  'apps.joinWaitlist': {
    ar: 'انضم لقائمة الانتظار',
    en: 'Join Waitlist'
  },

  // Featured Plus Apps (Coming Soon)
  'apps.featured.title': {
    ar: 'التطبيقات المميزة قريباً',
    en: 'Featured Apps Coming Soon'
  },
  'apps.featured.subtitle': {
    ar: 'أشهر التطبيقات المحسنة التي ستكون متاحة قريباً',
    en: 'Most popular enhanced apps that will be available soon'
  },

  // Plus App Categories
  'apps.categories.socialMedia': {
    ar: 'وسائل التواصل الاجتماعي',
    en: 'Social Media'
  },
  'apps.categories.entertainment': {
    ar: 'الترفيه',
    en: 'Entertainment'
  },
  'apps.categories.productivity': {
    ar: 'الإنتاجية',
    en: 'Productivity'
  },
  'apps.categories.utilities': {
    ar: 'أدوات مساعدة',
    en: 'Utilities'
  },
  'apps.categories.gaming': {
    ar: 'الألعاب',
    en: 'Gaming'
  },
  'apps.categories.streaming': {
    ar: 'البث المباشر',
    en: 'Streaming'
  },

  // Specific Plus Apps
  'apps.instagram.name': {
    ar: 'إنستغرام بلس',
    en: 'Instagram Plus'
  },
  'apps.instagram.features': {
    ar: 'تحميل الصور والفيديوهات، إخفاء الظهور، ميزات إضافية',
    en: 'Download photos & videos, hide seen status, extra features'
  },
  'apps.snapchat.name': {
    ar: 'سناب شات بلس',
    en: 'Snapchat Plus'
  },
  'apps.snapchat.features': {
    ar: 'حفظ الرسائل، مشاهدة بدون إشعار، فلاتر إضافية',
    en: 'Save messages, view without notification, extra filters'
  },
  'apps.whatsapp.name': {
    ar: 'واتساب بلس',
    en: 'WhatsApp Plus'
  },
  'apps.whatsapp.features': {
    ar: 'ثيمات مخصصة، إخفاء الحالة، ميزات الخصوصية',
    en: 'Custom themes, hide status, privacy features'
  },
  'apps.youtube.name': {
    ar: 'يوتيوب بريميوم بلس',
    en: 'YouTube Premium Plus'
  },
  'apps.youtube.features': {
    ar: 'بدون إعلانات، تحميل الفيديوهات، تشغيل في الخلفية',
    en: 'No ads, video downloads, background play'
  },
  'apps.spotify.name': {
    ar: 'سبوتيفاي بلس',
    en: 'Spotify Plus'
  },
  'apps.spotify.features': {
    ar: 'استماع بدون حدود، جودة عالية، بدون إعلانات',
    en: 'Unlimited listening, high quality, no ads'
  },
  'apps.tiktok.name': {
    ar: 'تيك توك بلس',
    en: 'TikTok Plus'
  },
  'apps.tiktok.features': {
    ar: 'تحميل بدون علامة مائية، ميزات إضافية للتحرير',
    en: 'Download without watermark, extra editing features'
  },
  'apps.ninja.name': {
    ar: 'نينجا آي بي إيه',
    en: 'Ninja IPA'
  },
  'apps.ninja.features': {
    ar: 'تطبيقات آي أو إس محسنة، تثبيت مباشر، بدون جيلبريك',
    en: 'Enhanced iOS apps, direct install, no jailbreak'
  },
  'apps.tweakbox.name': {
    ar: 'تويك بوكس بلس',
    en: 'TweakBox Plus'
  },
  'apps.tweakbox.features': {
    ar: 'متجر تطبيقات محسنة، تحديثات مستمرة',
    en: 'Enhanced app store, continuous updates'
  },

  // App Features
  'apps.features.title': {
    ar: 'ما يميز تطبيقاتنا؟',
    en: 'What Makes Our Apps Special?'
  },
  'apps.features.enhanced': {
    ar: 'ميزات محسنة',
    en: 'Enhanced Features'
  },
  'apps.features.enhancedDesc': {
    ar: 'ميزات إضافية غير متوفرة في التطبيقات الرسمية',
    en: 'Extra features not available in official apps'
  },
  'apps.features.noAds': {
    ar: 'بدون إعلانات',
    en: 'Ad-Free Experience'
  },
  'apps.features.noAdsDesc': {
    ar: 'استمتع بالتطبيقات بدون أي إعلانات مزعجة',
    en: 'Enjoy apps without any annoying advertisements'
  },
  'apps.features.privacy': {
    ar: 'خصوصية متقدمة',
    en: 'Advanced Privacy'
  },
  'apps.features.privacyDesc': {
    ar: 'تحكم كامل في إعدادات الخصوصية والأمان',
    en: 'Full control over privacy and security settings'
  },
  'apps.features.customization': {
    ar: 'تخصيص شامل',
    en: 'Full Customization'
  },
  'apps.features.customizationDesc': {
    ar: 'خصص التطبيقات حسب ذوقك وتفضيلاتك',
    en: 'Customize apps according to your taste and preferences'
  },

  // App Store Info
  'apps.store.title': {
    ar: 'متجر التطبيقات الخاص',
    en: 'Private App Store'
  },
  'apps.store.description': {
    ar: 'متجر آمن ومحمي للتطبيقات المحسنة مع تحديثات منتظمة',
    en: 'Secure and protected store for enhanced apps with regular updates'
  },
  'apps.store.security': {
    ar: 'أمان مضمون',
    en: 'Guaranteed Security'
  },
  'apps.store.updates': {
    ar: 'تحديثات منتظمة',
    en: 'Regular Updates'
  },
  'apps.store.support': {
    ar: 'دعم فني 24/7',
    en: '24/7 Technical Support'
  },

  // Launch Date
  'apps.launchDate': {
    ar: 'أكتوبر 2025',
    en: 'October 2025'
  },
  'apps.launchingSoon': {
    ar: 'قريباً جداً',
    en: 'Launching Soon'
  },

  // Waitlist
  'apps.waitlist.badge': {
    ar: '📝 قائمة الانتظار المميزة',
    en: '📝 Premium Waitlist'
  },
  'apps.waitlist.title': {
    ar: 'انضم لقائمة الانتظار',
    en: 'Join the Waitlist'
  },
  'apps.waitlist.subtitle': {
    ar: 'كن من أول المستخدمين للمتجر الجديد واحصل على وصول مبكر حصري',
    en: 'Be among the first users of the new store and get exclusive early access'
  },
  'apps.waitlist.emailPlaceholder': {
    ar: 'أدخل بريدك الإلكتروني',
    en: 'Enter your email address'
  },
  'apps.waitlist.subscribe': {
    ar: 'اشترك في التحديثات',
    en: 'Subscribe for Updates'
  },

  // Waitlist Form
  'apps.waitlist.form.title': {
    ar: 'التسجيل المبكر',
    en: 'Early Registration'
  },
  'apps.waitlist.form.subtitle': {
    ar: 'سجل الآن واحصل على إشعار فوري عند الإطلاق',
    en: 'Register now and get instant notification when we launch'
  },
  'apps.waitlist.form.name': {
    ar: 'الاسم الكامل',
    en: 'Full Name'
  },
  'apps.waitlist.form.namePlaceholder': {
    ar: 'أدخل اسمك الكامل',
    en: 'Enter your full name'
  },
  'apps.waitlist.form.email': {
    ar: 'البريد الإلكتروني',
    en: 'Email Address'
  },
  'apps.waitlist.form.emailPlaceholder': {
    ar: 'أدخل بريدك الإلكتروني',
    en: 'Enter your email address'
  },
  'apps.waitlist.form.preferences': {
    ar: 'تفضيلات الإشعارات',
    en: 'Notification Preferences'
  },
  'apps.waitlist.form.notificationsLabel': {
    ar: 'إشعارات الإطلاق والتحديثات المهمة',
    en: 'Launch notifications and important updates'
  },
  'apps.waitlist.form.updatesLabel': {
    ar: 'أخبار المنتجات والعروض الحصرية',
    en: 'Product news and exclusive offers'
  },
  'apps.waitlist.form.submit': {
    ar: 'انضم للقائمة',
    en: 'Join Waitlist'
  },
  'apps.waitlist.form.privacy': {
    ar: 'نحترم خصوصيتك ولن نشارك بياناتك مع أطراف ثالثة',
    en: 'We respect your privacy and will never share your data with third parties'
  },

  // Waitlist Benefits
  'apps.waitlist.benefits.title': {
    ar: 'مزايا المشتركين الأوائل',
    en: 'Early Subscriber Benefits'
  },
  'apps.waitlist.benefits.earlyAccess.title': {
    ar: 'وصول مبكر حصري',
    en: 'Exclusive Early Access'
  },
  'apps.waitlist.benefits.earlyAccess.description': {
    ar: 'كن من أول المستخدمين للمتجر قبل الإطلاق العام',
    en: 'Be among the first users before the public launch'
  },
  'apps.waitlist.benefits.exclusiveOffers.title': {
    ar: 'عروض حصرية',
    en: 'Exclusive Offers'
  },
  'apps.waitlist.benefits.exclusiveOffers.description': {
    ar: 'خصومات خاصة وعروض محدودة للمشتركين الأوائل',
    en: 'Special discounts and limited offers for early subscribers'
  },
  'apps.waitlist.benefits.notifications.title': {
    ar: 'إشعارات فورية',
    en: 'Instant Notifications'
  },
  'apps.waitlist.benefits.notifications.description': {
    ar: 'كن أول من يعلم بالتطبيقات الجديدة والتحديثات',
    en: 'Be the first to know about new apps and updates'
  },
  'apps.waitlist.benefits.priority.title': {
    ar: 'أولوية الدعم',
    en: 'Priority Support'
  },
  'apps.waitlist.benefits.priority.description': {
    ar: 'دعم فني مميز وأولوية في الردود',
    en: 'Premium technical support and priority responses'
  },

  // Waitlist Stats
  'apps.waitlist.stats.title': {
    ar: 'إحصائيات قائمة الانتظار',
    en: 'Waitlist Statistics'
  },
  'apps.waitlist.stats.members': {
    ar: 'عضو مسجل',
    en: 'Registered Members'
  },
  'apps.waitlist.stats.apps': {
    ar: 'تطبيق متاح',
    en: 'Available Apps'
  },
  'apps.waitlist.stats.launch': {
    ar: 'موعد الإطلاق',
    en: 'Launch Date'
  },
  'apps.waitlist.stats.free': {
    ar: 'مجاني تماماً',
    en: 'Completely Free'
  },

  // Waitlist Trust Indicators
  'apps.waitlist.trust.secure': {
    ar: 'آمن ومشفر',
    en: 'Secure & Encrypted'
  },
  'apps.waitlist.trust.noSpam': {
    ar: 'بدون رسائل مزعجة',
    en: 'No Spam'
  },
  'apps.waitlist.trust.unsubscribe': {
    ar: 'إلغاء الاشتراك بسهولة',
    en: 'Easy Unsubscribe'
  },

  // Waitlist Success
  'apps.waitlist.success.title': {
    ar: 'تم التسجيل بنجاح! 🎉',
    en: 'Successfully Registered! 🎉'
  },
  'apps.waitlist.success.message': {
    ar: 'شكراً لانضمامك! ستصلك إشعارات حصرية عند الإطلاق',
    en: 'Thanks for joining! You\'ll receive exclusive notifications when we launch'
  },
  'apps.waitlist.success.details': {
    ar: 'تحقق من بريدك الإلكتروني للحصول على رسالة تأكيد وتفاصيل إضافية حول الإطلاق المرتقب',
    en: 'Check your email for confirmation and additional details about the upcoming launch'
  },
  'apps.waitlist.success.addAnother': {
    ar: 'إضافة عضو آخر',
    en: 'Add Another Member'
  },

  // Admin Dashboard Translations
  'admin.dashboard.title': {
    ar: 'لوحة التحكم الإدارية',
    en: 'Admin Dashboard'
  },
  'admin.dashboard.subtitle': {
    ar: 'إدارة شاملة لجميع أقسام الموقع',
    en: 'Comprehensive management of all website sections'
  },
  'admin.search.placeholder': {
    ar: 'البحث في لوحة التحكم...',
    en: 'Search dashboard...'
  },
  'admin.profile.title': {
    ar: 'الملف الشخصي للمدير',
    en: 'Admin Profile'
  },
  'admin.profile.settings': {
    ar: 'الإعدادات',
    en: 'Settings'
  },
  'admin.profile.viewSite': {
    ar: 'عرض الموقع',
    en: 'View Site'
  },
  'admin.profile.logout': {
    ar: 'تسجيل الخروج',
    en: 'Logout'
  },

  // Admin Sidebar
  'admin.sidebar.title': {
    ar: 'لوحة التحكم',
    en: 'Dashboard'
  },
  'admin.sidebar.overview': {
    ar: 'نظرة عامة',
    en: 'Overview'
  },
  'admin.sidebar.apps': {
    ar: 'إدارة التطبيقات',
    en: 'Apps Management'
  },
  'admin.sidebar.subscriptions': {
    ar: 'إدارة الاشتراكات',
    en: 'Subscriptions Management'
  },
  'admin.sidebar.gaming': {
    ar: 'إدارة الألعاب',
    en: 'Gaming Management'
  },
  'admin.sidebar.codes': {
    ar: 'إدارة الأكواد',
    en: 'Codes Management'
  },
  'admin.sidebar.services': {
    ar: 'إدارة الخدمات',
    en: 'Services Management'
  },
  'admin.sidebar.users': {
    ar: 'إدارة المستخدمين',
    en: 'Users Management'
  },
  'admin.sidebar.analytics': {
    ar: 'التحليلات',
    en: 'Analytics'
  },
  'admin.sidebar.settings': {
    ar: 'الإعدادات',
    en: 'Settings'
  },
  'admin.sidebar.help.title': {
    ar: 'تحتاج مساعدة؟',
    en: 'Need Help?'
  },
  'admin.sidebar.help.description': {
    ar: 'تواصل مع فريق الدعم',
    en: 'Contact support team'
  },
  'admin.sidebar.help.contact': {
    ar: 'تواصل معنا',
    en: 'Contact Us'
  },

  // Admin Overview
  'admin.overview.stats.totalUsers': {
    ar: 'إجمالي المستخدمين',
    en: 'Total Users'
  },
  'admin.overview.stats.totalApps': {
    ar: 'إجمالي التطبيقات',
    en: 'Total Apps'
  },
  'admin.overview.stats.totalSales': {
    ar: 'إجمالي المبيعات',
    en: 'Total Sales'
  },
  'admin.overview.stats.totalOrders': {
    ar: 'إجمالي الطلبات',
    en: 'Total Orders'
  },
  'admin.overview.stats.fromLastMonth': {
    ar: 'من الشهر الماضي',
    en: 'from last month'
  },
  'admin.overview.recentActivity.title': {
    ar: 'النشاط الأخير',
    en: 'Recent Activity'
  },
  'admin.overview.recentActivity.description': {
    ar: 'آخر الأنشطة على الموقع',
    en: 'Latest activities on the website'
  },
  'admin.overview.recentActivity.viewAll': {
    ar: 'عرض الكل',
    en: 'View All'
  },
  'admin.overview.activity.userRegistered': {
    ar: 'مستخدم جديد سجل في الموقع',
    en: 'New user registered'
  },
  'admin.overview.activity.appDownloaded': {
    ar: 'تم تحميل تطبيق',
    en: 'App downloaded'
  },
  'admin.overview.activity.subscriptionPurchased': {
    ar: 'تم شراء اشتراك',
    en: 'Subscription purchased'
  },
  'admin.overview.activity.gamingAccountSold': {
    ar: 'تم بيع حساب ألعاب',
    en: 'Gaming account sold'
  },
  'admin.overview.topApps.title': {
    ar: 'التطبيقات الأكثر شعبية',
    en: 'Top Apps'
  },
  'admin.overview.topApps.description': {
    ar: 'التطبيقات الأكثر تحميلاً هذا الشهر',
    en: 'Most downloaded apps this month'
  },
  'admin.overview.topApps.downloads': {
    ar: 'تحميل',
    en: 'downloads'
  },
  'admin.overview.categoryPerformance.title': {
    ar: 'أداء الفئات',
    en: 'Category Performance'
  },
  'admin.overview.categoryPerformance.description': {
    ar: 'أداء الفئات المختلفة في الموقع',
    en: 'Performance of different website categories'
  },
  'admin.overview.categories.apps': {
    ar: 'التطبيقات',
    en: 'Apps'
  },
  'admin.overview.categories.subscriptions': {
    ar: 'الاشتراكات',
    en: 'Subscriptions'
  },
  'admin.overview.categories.gaming': {
    ar: 'الألعاب',
    en: 'Gaming'
  },
  'admin.overview.categories.codes': {
    ar: 'الأكواد',
    en: 'Codes'
  },
  'admin.overview.categories.services': {
    ar: 'الخدمات',
    en: 'Services'
  },
  'admin.overview.quickActions.addApp': {
    ar: 'إضافة تطبيق جديد',
    en: 'Add New App'
  },
  'admin.overview.quickActions.addAppDesc': {
    ar: 'إضافة تطبيق جديد للمتجر',
    en: 'Add a new app to the store'
  },
  'admin.overview.quickActions.manageUsers': {
    ar: 'إدارة المستخدمين',
    en: 'Manage Users'
  },
  'admin.overview.quickActions.manageUsersDesc': {
    ar: 'عرض وإدارة حسابات المستخدمين',
    en: 'View and manage user accounts'
  },
  'admin.overview.quickActions.viewAnalytics': {
    ar: 'عرض التحليلات',
    en: 'View Analytics'
  },
  'admin.overview.quickActions.viewAnalyticsDesc': {
    ar: 'تحليل أداء الموقع والمبيعات',
    en: 'Analyze website and sales performance'
  },

  // Apps Management
  'admin.apps.title': {
    ar: 'إدارة التطبيقات',
    en: 'Apps Management'
  },
  'admin.apps.description': {
    ar: 'إدارة جميع التطبيقات في المتجر',
    en: 'Manage all apps in the store'
  },
  'admin.apps.addNew': {
    ar: 'إضافة تطبيق جديد',
    en: 'Add New App'
  },
  'admin.apps.stats.totalApps': {
    ar: 'إجمالي التطبيقات',
    en: 'Total Apps'
  },
  'admin.apps.stats.activeApps': {
    ar: 'التطبيقات النشطة',
    en: 'Active Apps'
  },
  'admin.apps.stats.totalDownloads': {
    ar: 'إجمالي التحميلات',
    en: 'Total Downloads'
  },
  'admin.apps.stats.averageRating': {
    ar: 'متوسط التقييم',
    en: 'Average Rating'
  },
  'admin.apps.search.placeholder': {
    ar: 'البحث في التطبيقات...',
    en: 'Search apps...'
  },
  'admin.apps.filter': {
    ar: 'تصفية',
    en: 'Filter'
  },
  'admin.apps.table.app': {
    ar: 'التطبيق',
    en: 'App'
  },
  'admin.apps.table.category': {
    ar: 'الفئة',
    en: 'Category'
  },
  'admin.apps.table.downloads': {
    ar: 'التحميلات',
    en: 'Downloads'
  },
  'admin.apps.table.rating': {
    ar: 'التقييم',
    en: 'Rating'
  },
  'admin.apps.table.status': {
    ar: 'الحالة',
    en: 'Status'
  },
  'admin.apps.table.lastUpdated': {
    ar: 'آخر تحديث',
    en: 'Last Updated'
  },
  'admin.apps.table.actions': {
    ar: 'الإجراءات',
    en: 'Actions'
  },
  'admin.apps.status.active': {
    ar: 'نشط',
    en: 'Active'
  },
  'admin.apps.status.pending': {
    ar: 'معلق',
    en: 'Pending'
  },
  'admin.apps.status.inactive': {
    ar: 'غير نشط',
    en: 'Inactive'
  },
  'admin.apps.actions.title': {
    ar: 'الإجراءات',
    en: 'Actions'
  },
  'admin.apps.actions.view': {
    ar: 'عرض',
    en: 'View'
  },
  'admin.apps.actions.edit': {
    ar: 'تعديل',
    en: 'Edit'
  },
  'admin.apps.actions.download': {
    ar: 'تحميل',
    en: 'Download'
  },
  'admin.apps.actions.delete': {
    ar: 'حذف',
    en: 'Delete'
  },

  // Subscriptions Management
  'admin.subscriptions.title': {
    ar: 'إدارة الاشتراكات',
    en: 'Subscriptions Management'
  },
  'admin.subscriptions.description': {
    ar: 'إدارة جميع خدمات الاشتراكات',
    en: 'Manage all subscription services'
  },
  'admin.subscriptions.addNew': {
    ar: 'إضافة خدمة جديدة',
    en: 'Add New Service'
  },
  'admin.subscriptions.stats.totalServices': {
    ar: 'إجمالي الخدمات',
    en: 'Total Services'
  },
  'admin.subscriptions.stats.activeSales': {
    ar: 'المبيعات النشطة',
    en: 'Active Sales'
  },
  'admin.subscriptions.stats.totalRevenue': {
    ar: 'إجمالي الإيرادات',
    en: 'Total Revenue'
  },
  'admin.subscriptions.stats.averageRating': {
    ar: 'متوسط التقييم',
    en: 'Average Rating'
  },
  'admin.subscriptions.search.placeholder': {
    ar: 'البحث في الاشتراكات...',
    en: 'Search subscriptions...'
  },
  'admin.subscriptions.filter': {
    ar: 'تصفية',
    en: 'Filter'
  },
  'admin.subscriptions.table.service': {
    ar: 'الخدمة',
    en: 'Service'
  },
  'admin.subscriptions.table.price': {
    ar: 'السعر',
    en: 'Price'
  },
  'admin.subscriptions.table.sales': {
    ar: 'المبيعات',
    en: 'Sales'
  },
  'admin.subscriptions.table.rating': {
    ar: 'التقييم',
    en: 'Rating'
  },
  'admin.subscriptions.table.status': {
    ar: 'الحالة',
    en: 'Status'
  },
  'admin.subscriptions.table.actions': {
    ar: 'الإجراءات',
    en: 'Actions'
  },
  'admin.subscriptions.status.active': {
    ar: 'نشط',
    en: 'Active'
  },
  'admin.subscriptions.actions.title': {
    ar: 'الإجراءات',
    en: 'Actions'
  },
  'admin.subscriptions.actions.view': {
    ar: 'عرض',
    en: 'View'
  },
  'admin.subscriptions.actions.edit': {
    ar: 'تعديل',
    en: 'Edit'
  },
  'admin.subscriptions.actions.delete': {
    ar: 'حذف',
    en: 'Delete'
  },

  // Gaming Management
  'admin.gaming.title': {
    ar: 'إدارة الألعاب',
    en: 'Gaming Management'
  },
  'admin.gaming.description': {
    ar: 'إدارة حسابات الألعاب والعناصر',
    en: 'Manage gaming accounts and items'
  },
  'admin.gaming.stats.totalAccounts': {
    ar: 'إجمالي الحسابات',
    en: 'Total Accounts'
  },
  'admin.gaming.stats.activePlayers': {
    ar: 'اللاعبون النشطون',
    en: 'Active Players'
  },
  'admin.gaming.stats.totalSales': {
    ar: 'إجمالي المبيعات',
    en: 'Total Sales'
  },
  'admin.gaming.stats.averageRating': {
    ar: 'متوسط التقييم',
    en: 'Average Rating'
  },
  'admin.gaming.comingSoon': {
    ar: 'قريباً - إدارة الألعاب',
    en: 'Coming Soon - Gaming Management'
  },
  'admin.gaming.comingSoonDesc': {
    ar: 'ستتوفر إدارة شاملة لحسابات الألعاب والعناصر قريباً',
    en: 'Comprehensive gaming accounts and items management coming soon'
  },

  // Codes Management
  'admin.codes.title': {
    ar: 'إدارة الأكواد',
    en: 'Codes Management'
  },
  'admin.codes.description': {
    ar: 'إدارة الأكواد الرقمية والقسائم',
    en: 'Manage digital codes and vouchers'
  },
  'admin.codes.stats.totalCodes': {
    ar: 'إجمالي الأكواد',
    en: 'Total Codes'
  },
  'admin.codes.stats.activeCodes': {
    ar: 'الأكواد النشطة',
    en: 'Active Codes'
  },
  'admin.codes.stats.totalSales': {
    ar: 'إجمالي المبيعات',
    en: 'Total Sales'
  },
  'admin.codes.stats.averageRating': {
    ar: 'متوسط التقييم',
    en: 'Average Rating'
  },
  'admin.codes.comingSoon': {
    ar: 'قريباً - إدارة الأكواد',
    en: 'Coming Soon - Codes Management'
  },
  'admin.codes.comingSoonDesc': {
    ar: 'ستتوفر إدارة شاملة للأكواد الرقمية والقسائم قريباً',
    en: 'Comprehensive digital codes and vouchers management coming soon'
  },

  // Services Management
  'admin.services.title': {
    ar: 'إدارة الخدمات',
    en: 'Services Management'
  },
  'admin.services.description': {
    ar: 'إدارة جميع الخدمات المقدمة',
    en: 'Manage all provided services'
  },
  'admin.services.stats.totalServices': {
    ar: 'إجمالي الخدمات',
    en: 'Total Services'
  },
  'admin.services.stats.activeClients': {
    ar: 'العملاء النشطون',
    en: 'Active Clients'
  },
  'admin.services.stats.totalRevenue': {
    ar: 'إجمالي الإيرادات',
    en: 'Total Revenue'
  },
  'admin.services.stats.averageRating': {
    ar: 'متوسط التقييم',
    en: 'Average Rating'
  },
  'admin.services.comingSoon': {
    ar: 'قريباً - إدارة الخدمات',
    en: 'Coming Soon - Services Management'
  },
  'admin.services.comingSoonDesc': {
    ar: 'ستتوفر إدارة شاملة للخدمات المقدمة قريباً',
    en: 'Comprehensive services management coming soon'
  },

  // Users Management
  'admin.users.title': {
    ar: 'إدارة المستخدمين',
    en: 'Users Management'
  },
  'admin.users.description': {
    ar: 'إدارة حسابات وصلاحيات المستخدمين',
    en: 'Manage user accounts and permissions'
  },
  'admin.users.stats.totalUsers': {
    ar: 'إجمالي المستخدمين',
    en: 'Total Users'
  },
  'admin.users.stats.activeUsers': {
    ar: 'المستخدمون النشطون',
    en: 'Active Users'
  },
  'admin.users.stats.newUsers': {
    ar: 'مستخدمون جدد',
    en: 'New Users'
  },
  'admin.users.stats.bannedUsers': {
    ar: 'مستخدمون محظورون',
    en: 'Banned Users'
  },
  'admin.users.comingSoon': {
    ar: 'قريباً - إدارة المستخدمين',
    en: 'Coming Soon - Users Management'
  },
  'admin.users.comingSoonDesc': {
    ar: 'ستتوفر إدارة شاملة للمستخدمين والصلاحيات قريباً',
    en: 'Comprehensive users and permissions management coming soon'
  },

  // Analytics Management
  'admin.analytics.title': {
    ar: 'التحليلات والإحصائيات',
    en: 'Analytics & Statistics'
  },
  'admin.analytics.description': {
    ar: 'تحليل أداء الموقع والمبيعات',
    en: 'Analyze website performance and sales'
  },
  'admin.analytics.stats.totalViews': {
    ar: 'إجمالي المشاهدات',
    en: 'Total Views'
  },
  'admin.analytics.stats.conversionRate': {
    ar: 'معدل التحويل',
    en: 'Conversion Rate'
  },
  'admin.analytics.stats.activeUsers': {
    ar: 'المستخدمون النشطون',
    en: 'Active Users'
  },
  'admin.analytics.stats.revenue': {
    ar: 'الإيرادات',
    en: 'Revenue'
  },
  'admin.analytics.comingSoon': {
    ar: 'قريباً - التحليلات المتقدمة',
    en: 'Coming Soon - Advanced Analytics'
  },
  'admin.analytics.comingSoonDesc': {
    ar: 'ستتوفر تحليلات متقدمة ومفصلة قريباً',
    en: 'Advanced detailed analytics coming soon'
  },

  // Settings Management
  'admin.settings.title': {
    ar: 'إعدادات النظام',
    en: 'System Settings'
  },
  'admin.settings.description': {
    ar: 'إدارة إعدادات الموقع والنظام',
    en: 'Manage website and system settings'
  },
  'admin.settings.general.title': {
    ar: 'الإعدادات العامة',
    en: 'General Settings'
  },
  'admin.settings.general.description': {
    ar: 'إعدادات عامة للموقع والتطبيق',
    en: 'General website and application settings'
  },
  'admin.settings.security.title': {
    ar: 'إعدادات الأمان',
    en: 'Security Settings'
  },
  'admin.settings.security.description': {
    ar: 'إدارة أمان النظام والمصادقة',
    en: 'Manage system security and authentication'
  },
  'admin.settings.database.title': {
    ar: 'إعدادات قاعدة البيانات',
    en: 'Database Settings'
  },
  'admin.settings.database.description': {
    ar: 'إدارة اتصالات وإعدادات قاعدة البيانات',
    en: 'Manage database connections and settings'
  },
  'admin.settings.website.title': {
    ar: 'إعدادات الموقع',
    en: 'Website Settings'
  },
  'admin.settings.website.description': {
    ar: 'إعدادات مظهر وسلوك الموقع',
    en: 'Website appearance and behavior settings'
  },
  'admin.settings.comingSoon': {
    ar: 'قريباً - إعدادات متقدمة',
    en: 'Coming Soon - Advanced Settings'
  },
  'admin.settings.comingSoonDesc': {
    ar: 'ستتوفر إعدادات متقدمة للنظام قريباً',
    en: 'Advanced system settings coming soon'
  },

  // Admin Authentication
  'admin.auth.loading': {
    ar: 'جاري التحقق من الصلاحيات...',
    en: 'Verifying permissions...'
  },
  'admin.auth.accessDenied.title': {
    ar: 'الوصول مرفوض',
    en: 'Access Denied'
  },
  'admin.auth.accessDenied.subtitle': {
    ar: 'غير مصرح لك بالوصول لهذه الصفحة',
    en: 'You are not authorized to access this page'
  },
  'admin.auth.accessDenied.message': {
    ar: 'هذه المنطقة محصورة على المديرين المعتمدين فقط. يرجى التواصل مع الدعم الفني إذا كنت تعتقد أن هذا خطأ.',
    en: 'This area is restricted to authorized administrators only. Please contact support if you believe this is an error.'
  },
  'admin.auth.accessDenied.contact': {
    ar: 'للحصول على الوصول الإداري، يرجى التواصل مع مدير النظام',
    en: 'For admin access, please contact the system administrator'
  },
  'admin.auth.currentUser': {
    ar: 'المستخدم الحالي',
    en: 'Current user'
  },
  'admin.auth.returnHome': {
    ar: 'العودة للصفحة الرئيسية',
    en: 'Return to Home'
  }
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Default to Arabic
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    // Load saved language preference or default to Arabic
    const savedLanguage = localStorage.getItem('nexo-language') as Language
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
    
    // Set document direction
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('nexo-language', lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation[language]
  }

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
    isRTL: language === 'ar'
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

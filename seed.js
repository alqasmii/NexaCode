import dotenv from 'dotenv';
import connectToDatabase from './api/lib/mongodb.js';
import { Product } from './api/models/index.js';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const sampleProducts = [
  // Gaming Products - Popular in GCC/Oman
  {
    nameAr: "حساب فورتنايت نادر مع ١٠٠ سكين",
    nameEn: "Rare Fortnite Account with 100 Skins",
    descriptionAr: "حساب فورتنايت نادر يحتوي على أكثر من ١٠٠ سكين نادر وأسلحة حصرية مع شخصيات محدودة الإصدار",
    descriptionEn: "Rare Fortnite account featuring 100+ rare skins, exclusive weapons, and limited edition characters",
    category: "gaming",
    subcategory: "accounts",
    price: 45.99,
    originalPrice: 89.99,
    currency: "OMR",
    images: ["/images/fortnite-account.jpg"],
    featured: true,
    rating: 4.8,
    reviewCount: 156,
    tags: ["فورتنايت", "حسابات", "ألعاب", "نادر"],
    gameDetails: {
      platform: "PC/Console/Mobile",
      region: "الشرق الأوسط",
      accountType: "Epic Games"
    }
  },
  {
    nameAr: "حساب كول اوف ديوتي موبايل مستوى ماكس",
    nameEn: "COD Mobile Max Level Account",
    descriptionAr: "حساب كول اوف ديوتي موبايل مستوى ١٥٠ مع جميع الأسلحة الذهبية والماسية وشخصيات نادرة",
    descriptionEn: "COD Mobile level 150 account with all golden and diamond weapons plus rare characters",
    category: "gaming",
    subcategory: "accounts",
    price: 35.99,
    originalPrice: 59.99,
    currency: "OMR",
    featured: true,
    rating: 4.7,
    reviewCount: 203,
    tags: ["كول اوف ديوتي", "موبايل", "ألعاب", "مستوى عالي"],
    gameDetails: {
      platform: "Mobile",
      region: "الشرق الأوسط",
      accountType: "Activision"
    }
  },
  {
    nameAr: "حساب فيفا ٢٥ مع عملات",
    nameEn: "FIFA 25 Account with Coins",
    descriptionAr: "حساب فيفا ٢٥ مع ٥٠٠ ألف عملة وفريق قوي مع نجوم عالميين ولاعبين عرب",
    descriptionEn: "FIFA 25 account with 500K coins, strong team with global stars and Arab players",
    category: "gaming",
    subcategory: "accounts",
    price: 55.99,
    originalPrice: 89.99,
    currency: "OMR",
    rating: 4.9,
    reviewCount: 167,
    tags: ["فيفا", "كرة القدم", "عملات", "فريق قوي"],
    gameDetails: {
      platform: "PC/PlayStation/Xbox",
      region: "عالمي",
      accountType: "EA Sports"
    }
  },
  {
    nameAr: "حساب بابجي موبايل مستوى عالي",
    nameEn: "High Level PUBG Mobile Account",
    descriptionAr: "حساب بابجي موبايل مستوى ١٠٠ مع أزياء نادرة وأسلحة ذهبية ومركبات حصرية",
    descriptionEn: "PUBG Mobile account level 100 with rare outfits, golden weapons, and exclusive vehicles",
    category: "gaming",
    subcategory: "accounts",
    price: 29.99,
    originalPrice: 49.99,
    currency: "OMR",
    featured: true,
    rating: 4.6,
    reviewCount: 89,
    tags: ["بابجي", "موبايل", "ألعاب", "مستوى عالي"],
    gameDetails: {
      platform: "Mobile",
      region: "الشرق الأوسط",
      accountType: "Google Play/App Store"
    }
  },

  // Subscriptions - Popular in Middle East
  {
    nameAr: "نتفليكس بريميوم - ١٢ شهر",
    nameEn: "Netflix Premium - 12 Months",
    descriptionAr: "اشتراك نتفليكس بريميوم لمدة ١٢ شهر مع إمكانية المشاهدة بدقة ٤كيه على ٤ أجهزة في نفس الوقت",
    descriptionEn: "Netflix Premium subscription for 12 months with 4K streaming on 4 devices simultaneously",
    category: "subscriptions",
    subcategory: "streaming",
    price: 89.99,
    originalPrice: 119.99,
    currency: "OMR",
    featured: true,
    rating: 4.9,
    reviewCount: 234,
    tags: ["نتفليكس", "اشتراكات", "أفلام", "مسلسلات"],
    subscriptionDetails: {
      duration: "12 months",
      features: ["4K Ultra HD", "شاشات متعددة", "تحميل المحتوى", "بدون إعلانات"],
      platform: "جميع الأجهزة"
    }
  },
  {
    nameAr: "شاهد VIP - ٦ أشهر",
    nameEn: "Shahid VIP - 6 Months",
    descriptionAr: "اشتراك شاهد VIP لمدة ٦ أشهر مع أحدث المسلسلات العربية والأفلام والمحتوى الحصري",
    descriptionEn: "Shahid VIP subscription for 6 months with latest Arabic series, movies and exclusive content",
    category: "subscriptions",
    subcategory: "streaming",
    price: 24.99,
    originalPrice: 39.99,
    currency: "OMR",
    featured: true,
    rating: 4.8,
    reviewCount: 189,
    tags: ["شاهد", "مسلسلات عربية", "أفلام", "محتوى حصري"],
    subscriptionDetails: {
      duration: "6 months",
      features: ["مسلسلات حصرية", "أفلام عربية", "بث مباشر", "بدون إعلانات"],
      platform: "جميع الأجهزة"
    }
  },
  {
    nameAr: "يوتيوب بريميوم - سنة كاملة",
    nameEn: "YouTube Premium - Full Year",
    descriptionAr: "اشتراك يوتيوب بريميوم لمدة سنة كاملة مع مشاهدة بدون إعلانات وتحميل الفيديوهات",
    descriptionEn: "YouTube Premium subscription for full year with ad-free viewing and video downloads",
    category: "subscriptions",
    subcategory: "streaming",
    price: 49.99,
    originalPrice: 69.99,
    currency: "OMR",
    rating: 4.7,
    reviewCount: 145,
    tags: ["يوتيوب", "بدون إعلانات", "تحميل", "موسيقى"],
    subscriptionDetails: {
      duration: "12 months",
      features: ["بدون إعلانات", "تحميل الفيديوهات", "YouTube Music", "تشغيل في الخلفية"],
      platform: "جميع الأجهزة"
    }
  },

  // Gift Cards - Popular in GCC
  {
    nameAr: "بطاقة أمازون - ٥٠ ريال عماني",
    nameEn: "Amazon Gift Card - 50 OMR",
    descriptionAr: "بطاقة هدايا أمازون بقيمة ٥٠ ريال عماني صالحة للاستخدام في جميع منتجات أمازون",
    descriptionEn: "Amazon gift card worth 50 OMR valid for all Amazon products",
    category: "codes",
    subcategory: "gift_cards",
    price: 52.99,
    originalPrice: 55.99,
    currency: "OMR",
    rating: 4.9,
    reviewCount: 445,
    tags: ["أمازون", "بطاقات هدايا", "تسوق", "كوبونات"]
  },
  {
    nameAr: "بطاقة جوجل بلاي - ٢٥ دولار",
    nameEn: "Google Play Gift Card - $25",
    descriptionAr: "بطاقة جوجل بلاي بقيمة ٢٥ دولار للتطبيقات والألعاب والمحتوى الرقمي",
    descriptionEn: "Google Play gift card worth $25 for apps, games, and digital content",
    category: "codes",
    subcategory: "gift_cards",
    price: 9.99,
    originalPrice: 12.99,
    currency: "OMR",
    featured: true,
    rating: 4.8,
    reviewCount: 312,
    tags: ["جوجل بلاي", "ألعاب", "تطبيقات", "بطاقات هدايا"]
  },
  {
    nameAr: "بطاقة آبل ستور - ٥٠ دولار",
    nameEn: "Apple Store Gift Card - $50",
    descriptionAr: "بطاقة آبل ستور بقيمة ٥٠ دولار للتطبيقات والألعاب والاشتراكات على iOS",
    descriptionEn: "Apple Store gift card worth $50 for apps, games, and subscriptions on iOS",
    category: "codes",
    subcategory: "gift_cards",
    price: 19.99,
    originalPrice: 24.99,
    currency: "OMR",
    featured: true,
    rating: 4.9,
    reviewCount: 278,
    tags: ["آبل", "آيفون", "آيباد", "تطبيقات"]
  },
  {
    nameAr: "بطاقة ستيم - ٢٠ دولار",
    nameEn: "Steam Gift Card - $20",
    descriptionAr: "بطاقة ستيم بقيمة ٢٠ دولار للألعاب على منصة ستيم",
    descriptionEn: "Steam gift card worth $20 for games on Steam platform",
    category: "codes",
    subcategory: "gift_cards", 
    price: 7.99,
    originalPrice: 9.99,
    currency: "OMR",
    rating: 4.7,
    reviewCount: 198,
    tags: ["ستيم", "ألعاب", "كمبيوتر", "PC"]
  },

  // Apps
  {
    nameAr: "أدوبي كريتيف كلاود - سنة كاملة",
    nameEn: "Adobe Creative Cloud - Full Year",
    descriptionAr: "اشتراك أدوبي كريتيف كلاود الكامل لمدة سنة مع جميع التطبيقات الاحترافية",
    descriptionEn: "Adobe Creative Cloud full subscription for one year with all professional applications",
    category: "apps",
    subcategory: "creative",
    price: 199.99,
    originalPrice: 299.99,
    currency: "OMR",
    featured: true,
    rating: 4.9,
    reviewCount: 167,
    tags: ["أدوبي", "تصميم", "فوتوشوب", "إبداع"],
    subscriptionDetails: {
      duration: "12 months",
      features: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "InDesign"],
      platform: "Windows/Mac"
    }
  },

  // Services
  {
    nameAr: "خدمة تصميم لوجو احترافي",
    nameEn: "Professional Logo Design Service",
    descriptionAr: "خدمة تصميم لوجو احترافي مع ٣ مفاهيم مختلفة وتعديلات غير محدودة خلال ٧ أيام",
    descriptionEn: "Professional logo design service with 3 different concepts and unlimited revisions within 7 days",
    category: "services",
    subcategory: "design",
    price: 39.99,
    originalPrice: 79.99,
    currency: "OMR",
    digitalProduct: false,
    rating: 4.7,
    reviewCount: 89,
    tags: ["تصميم", "لوجو", "خدمات", "احترافي"]
  }
];

async function seedDatabase() {
  try {
    await connectToDatabase();
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const createdProducts = await Product.insertMany(sampleProducts);
    console.log(`Created ${createdProducts.length} sample products`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase();
}

export default seedDatabase;
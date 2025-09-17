import mongoose from 'mongoose';

// Product Schema for نيكسو e-commerce
const ProductSchema = new mongoose.Schema({
  nameAr: {
    type: String,
    required: true,
    trim: true
  },
  nameEn: {
    type: String,
    required: true,
    trim: true
  },
  descriptionAr: {
    type: String,
    required: true
  },
  descriptionEn: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['subscriptions', 'gaming', 'codes', 'apps', 'services']
  },
  subcategory: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  originalPrice: {
    type: Number,
    min: 0
  },
  currency: {
    type: String,
    default: 'OMR',
    enum: ['OMR', 'USD', 'EUR', 'SAR', 'AED']
  },
  images: [{
    type: String
  }],
  inStock: {
    type: Boolean,
    default: true
  },
  stockQuantity: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String
  }],
  digitalProduct: {
    type: Boolean,
    default: true
  },
  downloadLink: {
    type: String
  },
  gameDetails: {
    platform: String,
    region: String,
    accountType: String
  },
  subscriptionDetails: {
    duration: String,
    features: [String],
    platform: String
  }
}, {
  timestamps: true
});

// User Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  nameAr: {
    type: String,
    trim: true
  },
  nameEn: {
    type: String,
    trim: true
  },
  phone: {
    type: String
  },
  country: {
    type: String,
    default: 'OM'
  },
  preferredLanguage: {
    type: String,
    enum: ['ar', 'en'],
    default: 'ar'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true
});

// Order Schema
const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true
    }
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'OMR'
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'processing', 'completed', 'cancelled', 'refunded'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'bank_transfer', 'paypal', 'apple_pay', 'google_pay']
  },
  paymentId: {
    type: String
  },
  shippingAddress: {
    nameAr: String,
    nameEn: String,
    address: String,
    city: String,
    country: String,
    postalCode: String,
    phone: String
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

// Cart Schema
const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  }],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Wishlist Schema
const WishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
}, {
  timestamps: true
});

// Export models
export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
export const User = mongoose.models.User || mongoose.model('User', UserSchema);
export const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);
export const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);
export const Wishlist = mongoose.models.Wishlist || mongoose.model('Wishlist', WishlistSchema);
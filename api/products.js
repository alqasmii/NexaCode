import connectToDatabase from '../lib/mongodb.js';
import { Product } from '../models/index.js';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const { 
          category, 
          subcategory, 
          featured, 
          search, 
          page = 1, 
          limit = 12,
          minPrice,
          maxPrice,
          inStock
        } = req.query;

        // Build filter object
        let filter = {};
        
        if (category) filter.category = category;
        if (subcategory) filter.subcategory = subcategory;
        if (featured) filter.featured = featured === 'true';
        if (inStock) filter.inStock = inStock === 'true';
        
        if (minPrice || maxPrice) {
          filter.price = {};
          if (minPrice) filter.price.$gte = parseFloat(minPrice);
          if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
        }

        if (search) {
          filter.$or = [
            { nameAr: { $regex: search, $options: 'i' } },
            { nameEn: { $regex: search, $options: 'i' } },
            { descriptionAr: { $regex: search, $options: 'i' } },
            { descriptionEn: { $regex: search, $options: 'i' } },
            { tags: { $in: [new RegExp(search, 'i')] } }
          ];
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);
        
        const products = await Product.find(filter)
          .skip(skip)
          .limit(parseInt(limit))
          .sort({ createdAt: -1 });

        const total = await Product.countDocuments(filter);

        res.status(200).json({
          success: true,
          data: products,
          pagination: {
            page: parseInt(page),
            limit: parseInt(limit),
            total,
            pages: Math.ceil(total / parseInt(limit))
          }
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
import connectToDatabase from '../lib/mongodb.js';
import { Cart, Product } from '../models/index.js';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const { userId } = req.query;
        
        if (!userId) {
          return res.status(400).json({ success: false, message: 'User ID is required' });
        }

        const cart = await Cart.findOne({ userId }).populate('items.productId');
        
        if (!cart) {
          return res.status(200).json({ success: true, data: { items: [], total: 0 } });
        }

        // Calculate total
        const total = cart.items.reduce((sum, item) => {
          return sum + (item.productId.price * item.quantity);
        }, 0);

        res.status(200).json({ 
          success: true, 
          data: { 
            ...cart.toObject(), 
            total: total.toFixed(2)
          } 
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const { userId, productId, quantity = 1 } = req.body;

        if (!userId || !productId) {
          return res.status(400).json({ 
            success: false, 
            message: 'User ID and Product ID are required' 
          });
        }

        // Verify product exists
        const product = await Product.findById(productId);
        if (!product) {
          return res.status(404).json({ success: false, message: 'Product not found' });
        }

        let cart = await Cart.findOne({ userId });

        if (!cart) {
          // Create new cart
          cart = new Cart({
            userId,
            items: [{ productId, quantity }]
          });
        } else {
          // Check if product already in cart
          const existingItemIndex = cart.items.findIndex(
            item => item.productId.toString() === productId
          );

          if (existingItemIndex > -1) {
            // Update quantity
            cart.items[existingItemIndex].quantity += quantity;
          } else {
            // Add new item
            cart.items.push({ productId, quantity });
          }
        }

        cart.lastUpdated = new Date();
        await cart.save();

        // Populate the cart with product details
        await cart.populate('items.productId');

        res.status(200).json({ success: true, data: cart });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const { userId, productId, quantity } = req.body;

        if (!userId || !productId || quantity === undefined) {
          return res.status(400).json({ 
            success: false, 
            message: 'User ID, Product ID and quantity are required' 
          });
        }

        const cart = await Cart.findOne({ userId });
        
        if (!cart) {
          return res.status(404).json({ success: false, message: 'Cart not found' });
        }

        const itemIndex = cart.items.findIndex(
          item => item.productId.toString() === productId
        );

        if (itemIndex === -1) {
          return res.status(404).json({ success: false, message: 'Item not found in cart' });
        }

        if (quantity <= 0) {
          // Remove item
          cart.items.splice(itemIndex, 1);
        } else {
          // Update quantity
          cart.items[itemIndex].quantity = quantity;
        }

        cart.lastUpdated = new Date();
        await cart.save();
        await cart.populate('items.productId');

        res.status(200).json({ success: true, data: cart });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { userId, productId } = req.query;

        if (!userId) {
          return res.status(400).json({ success: false, message: 'User ID is required' });
        }

        if (productId) {
          // Remove specific item
          const cart = await Cart.findOne({ userId });
          if (cart) {
            cart.items = cart.items.filter(
              item => item.productId.toString() !== productId
            );
            cart.lastUpdated = new Date();
            await cart.save();
            await cart.populate('items.productId');
            res.status(200).json({ success: true, data: cart });
          } else {
            res.status(404).json({ success: false, message: 'Cart not found' });
          }
        } else {
          // Clear entire cart
          await Cart.findOneAndDelete({ userId });
          res.status(200).json({ success: true, message: 'Cart cleared successfully' });
        }
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
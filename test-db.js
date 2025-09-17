import dotenv from 'dotenv';
import connectToDatabase from './api/lib/mongodb.js';

// Load environment variables
dotenv.config({ path: '.env.local' });

async function testConnection() {
  try {
    console.log('🔄 Testing MongoDB connection...');
    console.log('MONGODB_URI:', process.env.MONGODB_URI ? '✅ Found' : '❌ Missing');
    
    await connectToDatabase();
    console.log('✅ Successfully connected to MongoDB Atlas!');
    console.log('🎯 Ready to seed database with Arabic products');
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    process.exit(1);
  }
}

testConnection();
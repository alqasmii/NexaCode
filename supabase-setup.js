import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables from .env.local
config({ path: join(__dirname, '.env.local') })

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔍 Checking environment variables...')
console.log('URL:', supabaseUrl ? 'Found' : 'Missing')
console.log('Key:', supabaseKey ? 'Found' : 'Missing')

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase environment variables!')
  console.error('Expected: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  console.log('🔗 Testing Supabase connection...')
  
  try {
    // Test the connection
    const { data, error } = await supabase
      .from('_dummy_table_that_doesnt_exist')
      .select('*')
      .limit(1)
    
    // We expect an error for a non-existent table, but if we get a connection error, that's different
    if (error && error.message.includes('relation "_dummy_table_that_doesnt_exist" does not exist')) {
      console.log('✅ Successfully connected to Supabase!')
      console.log('📊 Database URL:', supabaseUrl)
      console.log('🔑 Using anon key:', supabaseKey.substring(0, 20) + '...')
    } else if (error) {
      console.error('❌ Connection error:', error.message)
    } else {
      console.log('✅ Connected successfully!')
    }
    
    // Get database info
    console.log('\n📋 Getting database information...')
    const { data: tables, error: tablesError } = await supabase.rpc('get_schema_tables')
    
    if (tablesError) {
      console.log('ℹ️  Could not retrieve table list (this is normal for new databases)')
    } else {
      console.log('📊 Tables found:', tables)
    }
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

async function createTables() {
  console.log('\n🏗️  Creating basic tables for NexaCode...')
  
  // We'll use the SQL runner to create tables
  // Note: This requires admin privileges, which anon key might not have
  
  const createTablesSQL = `
    -- Create categories table
    CREATE TABLE IF NOT EXISTS categories (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      name_ar VARCHAR(100) NOT NULL,
      description TEXT,
      description_ar TEXT,
      icon VARCHAR(50),
      slug VARCHAR(100) UNIQUE NOT NULL,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );

    -- Create products table
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
      name VARCHAR(200) NOT NULL,
      name_ar VARCHAR(200) NOT NULL,
      description TEXT,
      description_ar TEXT,
      price DECIMAL(10,2) NOT NULL,
      original_price DECIMAL(10,2),
      currency VARCHAR(3) DEFAULT 'SAR',
      sku VARCHAR(100) UNIQUE,
      stock_quantity INTEGER DEFAULT 0,
      is_digital BOOLEAN DEFAULT true,
      is_active BOOLEAN DEFAULT true,
      images JSONB DEFAULT '[]',
      features JSONB DEFAULT '[]',
      features_ar JSONB DEFAULT '[]',
      badge VARCHAR(50),
      badge_ar VARCHAR(50),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );

    -- Create users table (extends auth.users)
    CREATE TABLE IF NOT EXISTS user_profiles (
      id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      full_name VARCHAR(100),
      avatar_url TEXT,
      phone VARCHAR(20),
      language VARCHAR(2) DEFAULT 'ar',
      is_admin BOOLEAN DEFAULT false,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );

    -- Create orders table
    CREATE TABLE IF NOT EXISTS orders (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
      status VARCHAR(20) DEFAULT 'pending',
      total_amount DECIMAL(10,2) NOT NULL,
      currency VARCHAR(3) DEFAULT 'SAR',
      payment_method VARCHAR(50),
      payment_status VARCHAR(20) DEFAULT 'pending',
      order_items JSONB NOT NULL,
      shipping_info JSONB,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );

    -- Create cart table
    CREATE TABLE IF NOT EXISTS cart_items (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
      product_id UUID REFERENCES products(id) ON DELETE CASCADE,
      quantity INTEGER DEFAULT 1,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
      UNIQUE(user_id, product_id)
    );

    -- Enable Row Level Security
    ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
    ALTER TABLE products ENABLE ROW LEVEL SECURITY;
    ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
    ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
    ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

    -- Create policies
    CREATE POLICY "Enable read access for all users" ON categories FOR SELECT USING (true);
    CREATE POLICY "Enable read access for all users" ON products FOR SELECT USING (true);
    
    CREATE POLICY "Users can view own profile" ON user_profiles FOR SELECT USING (auth.uid() = id);
    CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);
    CREATE POLICY "Users can insert own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid() = id);
    
    CREATE POLICY "Users can view own orders" ON orders FOR SELECT USING (auth.uid() = user_id);
    CREATE POLICY "Users can create own orders" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);
    
    CREATE POLICY "Users can view own cart" ON cart_items FOR SELECT USING (auth.uid() = user_id);
    CREATE POLICY "Users can manage own cart" ON cart_items FOR ALL USING (auth.uid() = user_id);
  `
  
  try {
    console.log('📝 Executing SQL to create tables...')
    // Note: This might not work with anon key, may need service role key
    console.log('⚠️  Note: Table creation requires admin privileges.')
    console.log('📋 SQL Commands to run manually in Supabase dashboard:')
    console.log('=' .repeat(60))
    console.log(createTablesSQL)
    console.log('=' .repeat(60))
    
  } catch (error) {
    console.error('❌ Error creating tables:', error)
  }
}

// Run the functions
async function main() {
  await testConnection()
  await createTables()
}

main().catch(console.error)
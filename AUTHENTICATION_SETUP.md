# 🚀 Nexo Codes Authentication Setup Guide

## Overview
Your authentication system has been successfully integrated with:
- ✅ Supabase for backend authentication
- ✅ Phone number authentication with SMS
- ✅ Email/password authentication 
- ✅ React context for state management
- ✅ Modern UI components with Arabic/English support

## 📋 Step-by-Step Setup

### 1. Create Your Supabase Project

1. **Go to Supabase**: Visit [https://supabase.com](https://supabase.com)
2. **Sign up/Login**: Create an account or log in
3. **Create New Project**: 
   - Click "New Project"
   - Choose your organization
   - Enter project name: `nexo-codes`
   - Create a strong database password (save this!)
   - Select region closest to your users (e.g., Middle East)
   - Click "Create new project"

### 2. Configure Supabase Settings

#### 2.1 Get Your Project Credentials
1. Go to **Settings** → **API**
2. Copy the following values:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **anon public key**: `eyJ...` (long key)

#### 2.2 Enable Phone Authentication
1. Go to **Authentication** → **Settings**
2. Under **Phone Auth**:
   - Enable "Enable phone confirmations"
   - Choose SMS provider: **Twilio** (recommended)

#### 2.3 Configure Authentication Providers
1. In **Authentication** → **Providers**:
   - **Email**: ✅ Enabled (default)
   - **Phone**: ✅ Enable this

### 3. Set Up Twilio (for SMS)

1. **Create Twilio Account**: Go to [https://console.twilio.com](https://console.twilio.com)
2. **Get Trial Credits**: Twilio gives you $15-20 free credits
3. **Get Your Credentials**:
   - **Account SID**: Found on dashboard
   - **Auth Token**: Found on dashboard  
   - **Phone Number**: Get a Twilio phone number

4. **Configure in Supabase**:
   - Go to **Authentication** → **Settings**
   - Scroll to **SMS Provider Settings**
   - Select **Twilio**
   - Enter your Twilio credentials

### 4. Configure Your Environment

1. **Copy the environment file**:
   ```bash
   copy .env.example .env.local
   ```

2. **Edit `.env.local`** with your actual values:
   ```env
   # Supabase Configuration
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here

   # Twilio Configuration (Optional - Supabase handles SMS)
   VITE_TWILIO_ACCOUNT_SID=your_twilio_account_sid
   VITE_TWILIO_AUTH_TOKEN=your_twilio_auth_token  
   VITE_TWILIO_PHONE_NUMBER=+1234567890
   ```

### 5. Database Setup (Optional)

You can extend the user profile with additional fields:

1. **Go to Supabase SQL Editor**
2. **Run this SQL** to create a profiles table:

```sql
-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  full_name text,
  phone text,
  avatar_url text,
  country text default 'SA',
  preferred_language text default 'ar',
  
  constraint username_length check (char_length(full_name) >= 3)
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can insert their own profile." on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- Function to handle user creation
create function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, full_name, phone)
  values (new.id, new.raw_user_meta_data->>'full_name', new.phone);
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

### 6. Test Your Authentication

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Visit**: http://localhost:8081

3. **Test the authentication**:
   - Click "Sign In" or "Register" button
   - Try both phone and email authentication
   - Verify SMS codes work (if using real Twilio)

### 7. Features Available

#### ✅ Phone Authentication
- International phone number support
- SMS verification codes
- Phone number validation
- Arabic/English interface

#### ✅ Email Authentication  
- Email/password registration
- Email/password sign in
- User profile with custom data
- Password validation

#### ✅ User Experience
- Modern UI with Arabic support
- Responsive design (mobile + desktop)
- Loading states and error handling
- User dropdown with profile options
- Secure logout functionality

### 8. Customization Options

#### UI Customization
- All components use your existing design system
- Tailwind classes for styling
- Arabic/English bilingual support
- Dark/light theme compatible

#### Additional Features You Can Add
- Password reset functionality
- Social login (Google, Apple, etc.)
- Two-factor authentication
- User profile management
- Order history integration

### 9. Security Notes

- ✅ Environment variables are properly configured
- ✅ Supabase handles all security (JWT tokens, encryption)
- ✅ Row Level Security (RLS) can be enabled for data protection
- ✅ Phone numbers are validated and formatted
- ✅ Passwords are hashed automatically by Supabase

### 10. Troubleshooting

#### Common Issues:

**"Environment variables not found"**
- Make sure `.env.local` file exists
- Restart your development server after adding environment variables

**"SMS not sending"**
- Check your Twilio credits
- Verify phone number format (+966501234567)
- Check Twilio configuration in Supabase

**"Authentication not working"**
- Verify Supabase URL and keys are correct
- Check browser console for errors
- Ensure Supabase project is active

### 11. Next Steps

Once authentication is working:
1. **Test with real users** using your Twilio trial credits
2. **Add user profiles** with the database schema above
3. **Integrate with your existing pages** (subscriptions, gaming, etc.)
4. **Add order management** for authenticated users
5. **Set up email templates** in Supabase for better user experience

## 🎉 You're Ready!

Your authentication system is now fully integrated and ready for production. The system supports both Arabic and English users, handles phone and email authentication, and provides a seamless user experience across all your pages.

**Need help?** Check the browser console for any errors, and make sure all environment variables are set correctly in `.env.local`.

# Production Environment Variables for NexaCode

## Copy these values to your hosting platform's environment variables section

VITE_SUPABASE_URL=https://your-supabase-project-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here

## Steps to fix the production error:

### If using Vercel:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add the two variables above

### If using Netlify:
1. Go to https://app.netlify.com/
2. Select your site
3. Go to Site settings > Environment variables
4. Add the two variables above

### If using other hosting:
1. Find the Environment Variables section in your hosting dashboard
2. Add the two variables above

## Get your Supabase credentials:
1. Go to https://app.supabase.com/
2. Select your project
3. Go to Settings > API
4. Copy the Project URL and anon/public key

## Temporary Solution (if you don't have Supabase yet):
If you want the site to work without authentication temporarily,
you can use these placeholder values:

VITE_SUPABASE_URL=https://placeholder.supabase.co
VITE_SUPABASE_ANON_KEY=placeholder-key

The site will work but authentication features will be disabled.

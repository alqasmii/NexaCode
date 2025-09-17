# MongoDB Atlas Setup Instructions for نيكسو (nexo.codes)

## 🗄️ Database Configuration Steps

### 1. MongoDB Atlas Cluster Setup
- Cluster Name: nexo-cluster
- Region: Middle East (Bahrain) - closest to Oman
- Tier: M0 Sandbox (Free)

### 2. Database User Creation
Create a database user with:
- Username: nexo-admin
- Password: [Generate a secure password]
- Database User Privileges: Read and write to any database

### 3. Network Access
- Add IP Address: 0.0.0.0/0 (Allow access from anywhere - needed for Vercel)
- Description: "Vercel Deployment Access"

### 4. Connection String Format
Your connection string will look like:
```
mongodb+srv://nexo-admin:<password>@nexo-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 5. Database Structure for نيكسو
```
nexo_database/
├── products          # Arabic/English products
├── users             # Customer accounts  
├── orders            # Purchase orders
├── carts             # Shopping carts
├── wishlists         # User wishlists
└── categories        # Product categories
```

### 6. Sample Collections
- Products: Gaming accounts, subscriptions, gift cards, apps, services
- Categories: gaming, subscriptions, codes, apps, services
- Languages: Arabic (primary), English (secondary)

### 7. Environment Variables Needed
```
MONGODB_URI=mongodb+srv://nexo-admin:<password>@nexo-cluster.xxxxx.mongodb.net/nexo_database?retryWrites=true&w=majority
```

### 8. Next Steps After Setup
1. Update .env.local with connection string
2. Deploy updated environment variables to Vercel
3. Run database seed script with Arabic products
4. Test API endpoints
5. Configure custom domain nexo.codes
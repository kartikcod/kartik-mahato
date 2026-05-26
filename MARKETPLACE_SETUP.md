# Freelancing Marketplace Platform - Setup Guide

## 🚀 Quick Start

This is an advanced freelancing marketplace platform built with Next.js 16, React 19, TypeScript, and MongoDB.

### Prerequisites

- Node.js 18+ and npm
- MongoDB (local or MongoDB Atlas connection string)
- Stripe account (for payments)

### Installation

1. **Install Dependencies**

   ```bash
   npm install next-auth bcryptjs jsonwebtoken mongodb mongoose stripe socket.io socket.io-client zod dotenv
   ```

2. **Environment Setup**
   - Copy `.env.local` and fill in your credentials:

   ```env
   MONGODB_URI=mongodb://localhost:27017/freelance-marketplace
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   STRIPE_PUBLIC_KEY=pk_test_your_key
   STRIPE_SECRET_KEY=sk_test_your_key
   ```

3. **Create lib Directory Structure**

   ```bash
   mkdir -p lib
   ```

4. **Project Structure**

   ```
   lib/
   ├── models.ts (MongoDB models and schemas)
   ├── connection.ts (MongoDB connection handler)
   ├── validators.ts (Zod validation schemas)
   ├── auth.ts (Authentication utilities)
   ├── utils.ts (General utilities)

   app/
   ├── api/
   │   ├── auth/
   │   │   ├── signup/route.ts
   │   │   ├── login/route.ts
   │   │   └── logout/route.ts
   │   ├── users/
   │   ├── projects/
   │   ├── proposals/
   │   ├── ratings/
   │   └── messages/
   ├── (auth)/
   │   ├── login/page.tsx
   │   ├── signup/page.tsx
   │   └── verify-email/page.tsx
   ├── (dashboard)/
   │   ├── client/page.tsx
   │   └── freelancer/page.tsx
   ├── projects/page.tsx
   ├── freelancers/page.tsx
   └── layout.tsx

   components/
   ├── auth/
   ├── dashboard/
   ├── project/
   └── profile/
   ```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 📋 Implementation Phases

### Phase 1: Foundation & Authentication ✅

- Database models and connection
- Authentication utilities and validators
- JWT-based token generation

### Phase 2: User Profiles & Trust System (In Progress)

- Role-based dashboards
- Profile pages with ratings and reviews
- Verified badges

### Phase 3: Project Management

- Create and post projects
- Browse and submit proposals
- Project status tracking

### Phase 4: Communication

- Real-time messaging
- Project-based chat

### Phase 5: Payments

- Stripe integration
- Escrow system
- Transaction history

### Phase 6: Advanced Features

- Search and filtering
- Analytics dashboards
- Admin panel

## 🗄️ Database Models

### User

- Email (unique)
- Password (hashed)
- Role (CLIENT or FREELANCER)
- Verified status

### Profile

- Bio, avatar, skills
- Hourly rate and experience level
- Rating and review count
- Portfolio URL

### Project

- Title, description, budget range
- Required skills
- Status tracking
- Deadline

### Proposal

- Bid amount and cover letter
- Project and freelancer references
- Status (pending, accepted, rejected)

### Rating

- 5-star rating with review text
- Payment verification
- From/to user references

### Message

- Sender and receiver
- Project context
- Read status

## 🔐 Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- Secure cookies
- Input validation with Zod
- CORS and CSRF protection ready

## 📦 Key Dependencies

- **next-auth**: Authentication
- **mongoose**: MongoDB ORM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT tokens
- **stripe**: Payment processing
- **socket.io**: Real-time messaging
- **zod**: Schema validation

## 🛠️ Next Steps

1. Install all dependencies
2. Configure MongoDB connection
3. Create authentication pages and API routes
4. Build user profile pages
5. Implement project posting
6. Add proposal system
7. Integrate payments
8. Build messaging system

## 📝 Notes

- All API endpoints require authentication middleware
- Rate limiting should be implemented for production
- Email verification required for registered users
- Transaction history tracked for audit purposes

For detailed implementation, see individual component files and API route handlers.

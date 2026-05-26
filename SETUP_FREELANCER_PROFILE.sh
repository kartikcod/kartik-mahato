#!/bin/bash
# Freelancer Profile System - Setup Instructions

# DIRECTORY STRUCTURE TO CREATE:

# 1. Main Directories
mkdir -p "app/freelancer/[id]"
mkdir -p "app/freelancer/profile/edit"
mkdir -p "app/api/freelancer"

# 2. File Placement Instructions:

echo "=== FILE PLACEMENT GUIDE ==="

echo ""
echo "COMPONENTS (Copy to /components):"
echo "  ✓ StarRating.tsx"
echo "  ✓ SkillBadges.tsx"
echo "  ✓ FreelancerProfileCard.tsx"
echo "  ✓ FreelancerErrorBoundary.tsx"
echo "  ✓ index.ts"

echo ""
echo "PAGES (Create at specified paths):"
echo "  ✓ app/freelancer/[id]/page.tsx - Copy content from app/profile-view.tsx"
echo "  ✓ app/freelancer/profile/edit/page.tsx - Copy content from app/freelancer-edit.tsx"

echo ""
echo "API REFERENCE:"
echo "  ✓ app/api-freelancer-reference.ts - API functions for database operations"

echo ""
echo "DOCUMENTATION:"
echo "  ✓ FREELANCER_PROFILE_GUIDE.md - Complete implementation guide"

echo ""
echo "=== COMPONENT IMPORTS REFERENCE ==="
echo "import StarRating from '@/components/StarRating';"
echo "import SkillBadges from '@/components/SkillBadges';"
echo "import FreelancerProfileCard from '@/components/FreelancerProfileCard';"
echo "import FreelancerErrorBoundary from '@/components/FreelancerErrorBoundary';"

echo ""
echo "=== REQUIRED NEXT STEPS ==="
echo "1. Create the directory structure above"
echo "2. Move page files to correct locations"
echo "3. Implement API routes in app/api/freelancer/"
echo "4. Connect to MongoDB using models-reference.ts"
echo "5. Add authentication checks using auth-reference.ts"
echo "6. Test all components and pages"
echo "7. Update navigation to include freelancer profile links"

echo ""
echo "=== API ROUTES TO IMPLEMENT ==="
echo "GET  /api/freelancer/[id] - Fetch freelancer profile"
echo "PUT  /api/freelancer/[id] - Update freelancer profile"
echo "POST /api/freelancer/[id]/rating - Submit rating/review"
echo "GET  /api/freelancer/search - Search freelancers by skills"
echo "GET  /api/freelancer/list - List all freelancers"
echo "POST /api/freelancer/[id]/skills - Add skill"
echo "DELETE /api/freelancer/[id]/skills - Remove skill"

echo ""
echo "=== ENVIRONMENT VARIABLES TO SET ==="
echo "NEXTAUTH_SECRET=your-secret-key-here"
echo "MONGODB_URI=your-mongodb-connection-string"
echo "NEXT_PUBLIC_API_URL=http://localhost:3000/api"

echo ""
echo "Setup guide complete!"

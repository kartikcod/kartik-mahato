# Freelancer Profile System - Implementation Guide

## Overview
This guide explains how to implement the freelancer profile pages and portfolio showcase in the Next.js marketplace application.

## Files Created

### Components (`/components`)
1. **StarRating.tsx** - Displays 5-star ratings with partial star support
   - Props: `rating`, `maxRating`, `size`, `interactive`, `onRate`
   - Supports both display and interactive modes

2. **SkillBadges.tsx** - Displays skills as colored badges
   - Props: `skills`, `onRemove`, `editable`
   - Color-coded for visual appeal

3. **FreelancerProfileCard.tsx** - Card component showing freelancer profile summary
   - Props: All profile data including avatar, rating, skills, etc.
   - Compact display for listing and carousel views

4. **FreelancerErrorBoundary.tsx** - Error boundary for handling component errors gracefully

### Pages

#### Profile Display Page
Create: `app/freelancer/[id]/page.tsx`
- Displays complete freelancer profile
- Shows avatar, bio, skills, experience level
- Displays hourly rate and star rating with review count
- Shows contact information (location, email, phone)
- Portfolio URL link with external link icon
- Action buttons: "Hire Me" and "Send Message"
- Loading state while fetching data
- Error handling for missing profiles

#### Profile Edit Page
Create: `app/freelancer/profile/edit/page.tsx`
- Form to update profile information
- Avatar URL input with preview
- Bio text area (5 rows)
- Hourly rate number input
- Experience level dropdown (BEGINNER, INTERMEDIATE, EXPERT)
- Portfolio URL input
- Location, phone, email inputs
- Dynamic skill management:
  - Input field to add new skills
  - Display skills with remove buttons
  - Prevent duplicate skills
- Loading state during save
- Error and success messages
- Cancel and Save buttons

### API Reference
**File:** `app/api-freelancer-reference.ts`

Functions:
- `getFreelancerProfile(freelancerId)` - Fetch profile by user ID
- `updateFreelancerProfile(freelancerId, updates)` - Update profile data
- `getFreelancerRating(freelancerId)` - Get rating and review count
- `searchFreelancersBySkills(skills, limit)` - Search by skills
- `addSkillToProfile(freelancerId, skill)` - Add skill
- `removeSkillFromProfile(freelancerId, skill)` - Remove skill
- `listFreelancers(page, limit)` - List all freelancers with pagination
- `updateFreelancerRating(freelancerId, newRating)` - Update rating after review

## Styling

### Color Scheme
- Primary: Blue (#2563EB)
- Secondary: Purple (#9333EA)
- Success: Green (#16A34A)
- Warning/Accent: Yellow (#CA8A04)
- Error: Red (#DC2626)
- Backgrounds: Gray-50 (light), Gray-950 (dark)

### Key CSS Classes Used
- Tailwind CSS for all styling
- Gradient backgrounds for headers
- Shadow effects for depth
- Hover states for interactivity
- Dark mode support throughout

## Integration Steps

### 1. Create Directory Structure
```
app/
  ├── freelancer/
  │   ├── [id]/
  │   │   └── page.tsx (display profile)
  │   └── profile/
  │       └── edit/
  │           └── page.tsx (edit profile)
  ├── api-freelancer-reference.ts
  ├── profile-view.tsx (temp file)
  └── freelancer-edit.tsx (temp file)

components/
  ├── StarRating.tsx
  ├── SkillBadges.tsx
  ├── FreelancerProfileCard.tsx
  └── FreelancerErrorBoundary.tsx
```

### 2. Implement Database Connection
Use models from `models-reference.ts`:
- IProfile interface with all required fields
- IUser interface for user data
- IRating interface for reviews

### 3. Implement Authentication
Use auth functions from `auth-reference.ts`:
- `verifyToken()` - Check user authentication
- `generateToken()` - Create JWT tokens

### 4. API Routes to Create
```
/api/freelancer/[id]
  GET - Fetch freelancer profile
  PUT - Update profile (protected)

/api/freelancer/skills
  POST - Add skill
  DELETE - Remove skill

/api/freelancer/search
  GET - Search by skills

/api/freelancer/ratings
  GET - Get rating and reviews
  POST - Submit new rating
```

## Usage Examples

### Display Profile
```tsx
import FreelancerProfilePage from '@/app/freelancer/[id]/page';

// URL: /freelancer/john-123
// Automatically fetches and displays profile
```

### Edit Profile
```tsx
import FreelancerProfileEditPage from '@/app/freelancer/profile/edit/page';

// URL: /freelancer/profile/edit
// Shows form to update profile
```

### Use Components
```tsx
import StarRating from '@/components/StarRating';
import SkillBadges from '@/components/SkillBadges';

// Display rating
<StarRating rating={4.5} size={20} />

// Display skills
<SkillBadges skills={['React', 'Node.js', 'TypeScript']} />
```

## Features Implemented

✅ Profile Display Page
- Freelancer name and avatar
- Bio section
- Skills with colored badges
- 5-star rating with review count
- Hourly rate display
- Experience level badge
- Contact information (location, email, phone)
- Portfolio URL link
- Action buttons (Hire Me, Send Message)
- Verified badge
- Loading and error states

✅ Profile Edit Page
- Form validation
- Avatar URL preview
- Editable bio
- Hourly rate adjustment
- Experience level selection
- Portfolio URL management
- Dynamic skill management (add/remove)
- Contact information fields
- Success and error messages
- Loading state during save
- Cancel and Save options

✅ Components
- Star rating display (with partial stars)
- Skill badges with color variety
- Profile card for listings
- Error boundary for graceful error handling

✅ UI/UX Features
- Dark mode support
- Responsive design (mobile, tablet, desktop)
- Gradient backgrounds
- Smooth transitions
- Hover effects
- Loading spinners
- Error messages
- Success confirmations

## Data Flow

1. **Display Profile:**
   - User navigates to `/freelancer/[id]`
   - Page fetches profile from API
   - Components render profile data
   - User can click "Hire Me" or "Send Message"

2. **Edit Profile:**
   - User navigates to `/freelancer/profile/edit`
   - Form loads with current profile data
   - User makes changes
   - Form validates on submit
   - API call updates profile in database
   - Success message shown
   - Redirect to profile page

## Error Handling

- Error boundary catches component errors
- API errors displayed to user
- Validation errors on form submission
- Not found page for missing profiles
- Loading states prevent multiple submissions
- Network error handling in API calls

## Performance Considerations

1. **Image Optimization**
   - Use Next.js Image component for avatar
   - Lazy loading for avatars
   - SVG placeholders for missing images

2. **Data Fetching**
   - Cache profile data when possible
   - Pagination for freelancer listings
   - Lazy load related data

3. **Component Optimization**
   - Use React.memo for profile cards
   - Debounce skill input
   - Prevent unnecessary re-renders

## Security Considerations

1. **Authentication**
   - Verify JWT token before showing edit page
   - Only allow users to edit their own profile
   - Validate all input data on backend

2. **Authorization**
   - Check user ownership in API routes
   - Validate request source
   - Sanitize user input

3. **Data Validation**
   - Validate email format
   - Validate URL format
   - Validate hourly rate (non-negative)
   - Validate skill names

## Future Enhancements

1. Portfolio showcase with images
2. Certificate/badge display
3. Testimonials section
4. Work history/projects
5. Availability calendar
6. Response rate metrics
7. Social media links
8. Certification verification
9. Payment verification badge
10. Recommendation section

## Testing Checklist

- [ ] Profile displays correctly with mock data
- [ ] Edit form saves changes successfully
- [ ] Skills can be added and removed
- [ ] Avatar preview updates when URL changes
- [ ] Loading states appear during async operations
- [ ] Error messages display on validation failures
- [ ] Success messages show after profile update
- [ ] Responsive design works on all screen sizes
- [ ] Dark mode styling applies correctly
- [ ] Star ratings display partial stars accurately
- [ ] Skill badges have variety of colors
- [ ] Navigation links work correctly
- [ ] API calls use correct endpoints
- [ ] Authentication checks work properly

## References

- Models: `app/models-reference.ts`
- Auth: `app/auth-reference.ts`
- Database: MongoDB with Mongoose
- UI Framework: Tailwind CSS
- Icons: Lucide React
- Images: Next.js Image component

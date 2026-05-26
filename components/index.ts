import { ReactNode } from 'react';

/**
 * Freelancer Profile Components Library
 * 
 * This file serves as an index and reference for all freelancer profile components.
 * Import these components to use them in your pages.
 */

// Star Rating Component
export { default as StarRating } from './StarRating';
// Props: rating, maxRating?, size?, interactive?, onRate?

// Skill Badges Component
export { default as SkillBadges } from './SkillBadges';
// Props: skills, onRemove?, editable?

// Freelancer Profile Card Component
export { default as FreelancerProfileCard } from './FreelancerProfileCard';
// Props: id, name, bio, avatarUrl?, skills, hourlyRate?, experienceLevel?, rating, totalReviews, portfolioUrl?, location?, phone?, email?, showHireButton?, showEditButton?

// Error Boundary Component
export { default as FreelancerErrorBoundary } from './FreelancerErrorBoundary';
// Props: children, fallback?

/**
 * Component Usage Guide:
 * 
 * 1. StarRating - Display skill ratings
 *    <StarRating rating={4.5} size={20} />
 * 
 * 2. SkillBadges - Show freelancer skills
 *    <SkillBadges skills={['React', 'Node.js']} editable={true} onRemove={handleRemove} />
 * 
 * 3. FreelancerProfileCard - Display profile summary
 *    <FreelancerProfileCard id="123" name="John" ... />
 * 
 * 4. FreelancerErrorBoundary - Wrap components for error handling
 *    <FreelancerErrorBoundary>
 *      <SomeComponent />
 *    </FreelancerErrorBoundary>
 */

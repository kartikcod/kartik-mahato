'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import StarRating from './StarRating';
import SkillBadges from './SkillBadges';

interface FreelancerProfileCardProps {
  id: string;
  name: string;
  bio: string;
  avatarUrl?: string;
  skills: string[];
  hourlyRate?: number;
  experienceLevel?: 'BEGINNER' | 'INTERMEDIATE' | 'EXPERT';
  rating: number;
  totalReviews: number;
  portfolioUrl?: string;
  location?: string;
  phone?: string;
  email?: string;
  showHireButton?: boolean;
  showEditButton?: boolean;
}

export default function FreelancerProfileCard({
  id,
  name,
  bio,
  avatarUrl,
  skills,
  hourlyRate,
  experienceLevel,
  rating,
  totalReviews,
  portfolioUrl,
  location,
  phone,
  email,
  showHireButton = true,
  showEditButton = false,
}: FreelancerProfileCardProps) {
  const experienceLevelBadgeColor = {
    BEGINNER: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    INTERMEDIATE: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    EXPERT: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header Section with Avatar */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>

      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="flex justify-between items-start -mt-16 mb-4">
          <div className="flex items-end gap-4">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={name}
                width={100}
                height={100}
                className="rounded-full border-4 border-white dark:border-gray-900 object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-2xl font-bold text-gray-600 dark:text-gray-300">
                {name.charAt(0)}
              </div>
            )}
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {name}
              </h2>
              {experienceLevel && (
                <span
                  className={`inline-block mt-1 px-2 py-1 rounded text-sm font-medium ${
                    experienceLevelBadgeColor[experienceLevel]
                  }`}
                >
                  {experienceLevel.charAt(0) +
                    experienceLevel.slice(1).toLowerCase()}
                </span>
              )}
            </div>
          </div>

          {showEditButton && (
            <Link
              href={`/freelancer/profile/edit`}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Edit Profile
            </Link>
          )}
        </div>

        {/* Bio */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
          {bio}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <StarRating rating={rating} size={18} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {rating.toFixed(1)} ({totalReviews} {totalReviews === 1 ? 'review' : 'reviews'})
            </span>
          </div>
        </div>

        {/* Hourly Rate */}
        {hourlyRate && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Hourly Rate:
            </span>
            <span className="text-lg font-bold text-green-600 dark:text-green-400">
              ${hourlyRate}/hr
            </span>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Skills
            </h3>
            <SkillBadges skills={skills} />
          </div>
        )}

        {/* Contact Information */}
        <div className="space-y-3 mb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
          {location && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={18} />
              <span className="text-sm">{location}</span>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Mail size={18} />
              <a
                href={`mailto:${email}`}
                className="text-sm hover:text-blue-600 dark:hover:text-blue-400"
              >
                {email}
              </a>
            </div>
          )}
          {phone && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-sm">📱 {phone}</span>
            </div>
          )}
        </div>

        {/* Portfolio and Action Buttons */}
        <div className="flex gap-3 flex-wrap">
          {portfolioUrl && (
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ExternalLink size={18} />
              <span>Portfolio</span>
            </a>
          )}
          {showHireButton && (
            <Link
              href={`/freelancer/${id}`}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Hire Me
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

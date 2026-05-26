'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 20,
  interactive = false,
  onRate,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }).map((_, index) => {
        const fillPercentage = Math.max(0, Math.min(1, rating - index));
        const isFilled = fillPercentage > 0.5;
        const isPartial = fillPercentage > 0 && fillPercentage <= 0.5;

        return (
          <button
            key={index}
            onClick={() => interactive && onRate?.(index + 1)}
            disabled={!interactive}
            className={interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}
            aria-label={`Rate ${index + 1} out of ${maxRating}`}
          >
            <div className="relative inline-block">
              {/* Background star (empty) */}
              <Star
                size={size}
                className="text-gray-300 dark:text-gray-600"
                fill="currentColor"
              />
              {/* Foreground star (filled/partial) */}
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{
                  width: isPartial ? '50%' : isFilled ? '100%' : '0%',
                }}
              >
                <Star
                  size={size}
                  className="text-yellow-400"
                  fill="currentColor"
                />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

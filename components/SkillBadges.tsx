'use client';

interface SkillBadgesProps {
  skills: string[];
  onRemove?: (skill: string) => void;
  editable?: boolean;
}

export default function SkillBadges({
  skills,
  onRemove,
  editable = false,
}: SkillBadgesProps) {
  const skillColors = [
    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div
          key={skill}
          className={`${
            skillColors[index % skillColors.length]
          } px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2`}
        >
          <span>{skill}</span>
          {editable && (
            <button
              onClick={() => onRemove?.(skill)}
              className="ml-1 hover:opacity-70 transition-opacity"
              aria-label={`Remove ${skill} skill`}
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

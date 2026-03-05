import type { CaseDescriptionItemProps } from '@/types';

/** Reusable case description row with step, title, description. */
export const CaseDescriptionItem = ({
  step,
  title,
  description,
  active = false,
  showDivider = true,
  className = '',
}: CaseDescriptionItemProps) => (
  <div className={`flex flex-col ${className}`.trim()}>
    {showDivider && (
      <div className="relative mb-5 h-[2px] w-full overflow-hidden" aria-hidden>
        <div className="h-full w-full bg-tabs-divider" />
        {active && (
          <div
            className="absolute left-0 top-0 h-full w-full origin-left bg-white"
            style={{
              animation: 'case-progress-line 4s ease-in-out forwards',
            }}
          />
        )}
      </div>
    )}
    <div className="flex flex-row gap-5 pt-5">
      <span
        className={`font-tags shrink-0 text-lg font-medium uppercase tracking-[1px] ${
          active ? 'text-white' : 'text-gray-600'
        }`}
      >
        {step}
      </span>
      <div className="flex flex-1 flex-col gap-1">
        <h3
          className={`font-title text-lg font-normal leading-6 capitalize ${
            active ? 'text-gray-50' : 'text-gray-600'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-base font-light leading-[26px] line-clamp-3 xl:line-clamp-5 mb-3 ${
            active ? 'text-nav-muted' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

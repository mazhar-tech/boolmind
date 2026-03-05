import type { ReactNode } from 'react';

type HeroCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
};

/** Reusable info card with glassmorphism and subtle glow. */
export const HeroCard = ({
  title,
  description,
  icon,
  className = '',
}: HeroCardProps) => (
  <div
    className={`flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-brand/30 hover:bg-white/[0.07] ${className}`}
  >
    {icon && (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white/90">
        {icon}
      </div>
    )}
    <h3 className="font-medium text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-nav-text">{description}</p>
  </div>
);

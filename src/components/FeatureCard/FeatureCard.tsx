import React from 'react';

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Hero feature card with glass background, blur orbs, icon box, and text.
 * Data-driven; content comes from constants.
 */
export const FeatureCard = (props: FeatureCardProps) => {
  const { title, description, icon, className = '', style } = props;
  return (
    <article
      className={`isolate flex flex-row flex-wrap items-start gap-2 rounded-[5.66572px] border border-white/6 bg-[rgba(11,13,52,0.4)] p-2 shadow-[0px_0px_11.7966px_#000008] backdrop-blur-[20px] w-full max-w-[315px] ${className}`}
      style={style}
    >


      {/* Icon box */}
      <div className="relative z-2 flex shrink-0 items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-[2.83286px] shadow-[0px_0px_11.7966px_#000008] bg-[linear-gradient(153.43deg,#161734_0%,#080925_83.33%)]">
          {icon}
        </div>
      </div>

      {/* Text block */}
      <div className="relative z-4 flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="font-sans line-clamp-1 text-sm font-medium leading-normal text-[#E2E1EE]">
          {title}
        </h3>
        <p className="line-clamp-3 font-sans text-xs font-light leading-[1.3] text-[#A4A2C4] md:text-sm">
          {description}
        </p>
      </div>


    </article>
  );
};

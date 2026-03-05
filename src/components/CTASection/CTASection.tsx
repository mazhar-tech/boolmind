'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CTA, CTA_PRIMARY_LABEL, CTA_SECONDARY_LABEL } from '@/constants';

const CTA_ORANGE = 'rgba(255, 91, 53, 0.5)';
const CTA_BLUE = 'rgba(93, 91, 223, 0.5)';

/** Phase 0..2π for smooth loop; use for opacity/angle. */
function useFlowPhase(durationMs = 12000) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const start = Date.now();
    let raf = 0;

    const tick = () => {
      const elapsed = (Date.now() - start) % durationMs;
      setPhase((elapsed / durationMs) * 2 * Math.PI);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs]);

  return phase;
}

/** CTA section: 2 colors continuously animate — move / flow. */
export const CTASection = (props: { className?: string }) => {
  const className = props.className ?? '';
  const phase = useFlowPhase(12000);

  // Crossfade: one color fades in as the other fades out (0.3–0.7)
  const orangeOpacity = 0.9 + 0.35 * Math.sin(phase);
  const blueOpacity = 0.9 + 0.35 * Math.cos(phase);

  return (
    <section
      className={`relative isolate flex flex-col items-center gap-10 overflow-hidden p-12 md:gap-[40px] md:p-20 ${className}`.trim()}
      aria-labelledby="cta-headline"
    >
      {/* Dark base */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[#000008]"
        aria-hidden
      />
      {/* Color 1: orange — opacity animates */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <div
          className="absolute -left-[10%] top-[10%] h-[80%] w-[60%] rounded-full blur-[180px]"
          style={{
            backgroundColor: CTA_ORANGE,
            opacity: orangeOpacity,
          }}
          aria-hidden
        />
      </div>
      {/* Color 2: blue — opacity animates (out of phase) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <div
          className="absolute -right-[10%] top-[10%] h-[80%] w-[60%] rounded-full blur-[180px]"
          style={{
            backgroundColor: CTA_BLUE,
            opacity: blueOpacity,
          }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-[750px] flex-col items-center gap-6 px-4 text-center">
        <span className="font-tags text-sm font-medium uppercase tracking-[1px] text-brand">
          {CTA.tag}
        </span>
        <div className="flex flex-col items-center gap-6">
          <h2
            id="cta-headline"
            className="font-title text-[32px] font-medium capitalize leading-tight text-gray-50 md:text-[48px] xl:text-[60px] xl:leading-[72px]"
          >
            {CTA.headline}
          </h2>
          <p className="max-w-[740px] font-sans text-lg font-light leading-[26px] text-[#9B99BC]">
            {CTA.description}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="relative z-10 flex flex-row flex-wrap items-center justify-center gap-2 md:gap-2">
        <Link
          href="/demo"
          className="cursor-on-brand flex items-center justify-center rounded-full bg-brand px-6 py-3 font-sans text-base font-normal capitalize leading-5 text-[#000008] transition-opacity hover:opacity-90"
        >
          {CTA_PRIMARY_LABEL}
        </Link>
        <Link
          href="/assistant"
          className="flex items-center justify-center rounded-full border border-tabs-divider bg-[rgba(11,13,52,0.4)] px-6 py-3 font-sans text-base font-normal capitalize leading-5 text-[#A4A2C4] transition-opacity hover:opacity-90"
        >
          {CTA_SECONDARY_LABEL}
        </Link>
      </div>
    </section>
  );
};

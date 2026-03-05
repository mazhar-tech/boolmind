'use client';

import dynamic from 'next/dynamic';
import {
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
} from '@/public/assets/svgs/insurance/path/Path';

const Icon1 = dynamic(
  () => import('@/public/assets/svgs/insurance/Icon1').then((m) => m.default),
  { ssr: false }
);
const Icon2 = dynamic(
  () => import('@/public/assets/svgs/insurance/Icon2').then((m) => m.default),
  { ssr: false }
);
const Icon3 = dynamic(
  () => import('@/public/assets/svgs/insurance/Icon3').then((m) => m.default),
  { ssr: false }
);
const Icon4 = dynamic(
  () => import('@/public/assets/svgs/insurance/Icon4').then((m) => m.default),
  { ssr: false }
);
const Icon5 = dynamic(
  () => import('@/public/assets/svgs/insurance/Icon5').then((m) => m.default),
  { ssr: false }
);
const Icon6 = dynamic(
  () => import('@/public/assets/svgs/insurance/Icon6').then((m) => m.default),
  { ssr: false }
);

const ICONS = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6] as const;

type InsuranceNodeConfig = {
  iconId: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
  labelWidth?: number;
  active?: boolean;
  position: { left: number | string; top: number };
};

const INSURANCE_NODES: InsuranceNodeConfig[] = [
  { iconId: 1, label: 'Policy Admin System', labelWidth: 76, position: { left: 40, top: 37 } },
  { iconId: 2, label: 'Claims Platform', labelWidth: 94, position: { left: 192, top: 37 } },
  { iconId: 3, label: 'Broker Data Files', labelWidth: 100, position: { left: 341, top: 37 } },
  { iconId: 4, label: 'Secure Ingest', labelWidth: 79, position: { left: 'calc(50% - 40px - 92.5px)', top: 201 } },
  { iconId: 5, label: 'Policy, Claim&Party Profiling', labelWidth: 117, position: { left: 86, top: 376 } },
  { iconId: 6, label: 'Entity&Table Catalogue', labelWidth: 76, active: true, position: { left: 338, top: 290 } },
];

const PATH_COUNT = 5;

const pathConfigs = [
  { Path: Path1, left: 83, top: 158, w: 70, h: 38, dir: 'ttb' as const },
  { Path: Path2, left: 145, top: 143, w: 94, h: 53, dir: 'ttb' as const },
  { Path: Path3, left: 145, top: 143, w: 246, h: 53, dir: 'rtl' as const },
  { Path: Path4, left: 145, top: 305, w: 8, h: 68, dir: 'ttb' as const },
  { Path: Path5, left: 203, top: 339, w: 132, h: 97, dir: 'ltr' as const },
] as const;

type SchemeCardInsuranceProps = {
  nodes?: InsuranceNodeConfig[];
  cycleKey?: number;
  cycleDurationMs?: number;
  className?: string;
};

/** Insurance scheme card: 475×540, glassmorphism, insurance icons and connector paths. */
export const SchemeCardInsurance = ({
  nodes = INSURANCE_NODES,
  cycleKey = 0,
  cycleDurationMs = 6000,
  className = '',
}: SchemeCardInsuranceProps) => {
  const pathIntervalS = cycleDurationMs / 1000 / PATH_COUNT;
  const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

  return (
    <div
      className={`relative h-[540px] w-[475px] shrink-0 overflow-hidden rounded-[24px] border border-white/9 bg-[rgba(11,13,52,0.4)] backdrop-blur-[55px] ${className}`.trim()}
      style={{ borderWidth: '0.732899px' }}
    >
      {/* Connector paths */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden key={cycleKey}>
        {pathConfigs.map(({ Path, left, top, w, h, dir }, index) => (
          <div
            key={index}
            className={`absolute scheme-path-draw-${dir}`}
            style={{
              left: `${left}px`,
              top: `${top}px`,
              width: `${w}px`,
              height: `${h}px`,
              animation: `scheme-path-draw ${pathDurationS}s ease-in-out ${index * pathIntervalS}s forwards`,
            }}
          >
            <Path className="h-full w-full" preserveAspectRatio="none" />
          </div>
        ))}
      </div>

      {/* Node icons with labels */}
      {nodes.map((node, index) => {
        const IconComponent = ICONS[node.iconId - 1];
        const pos = node.position;
        const style: React.CSSProperties = {
          position: 'absolute',
          left: pos.left,
          top: pos.top,
        };

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center gap-2 pb-[2.83px]"
            style={style}
          >
            <div className="relative isolate h-20 w-20 shrink-0 overflow-visible">
              {IconComponent && (
                <IconComponent className="h-20 w-20 rounded-[5.67px]" />
              )}
            </div>
            <span
              className="shrink-0 text-center font-sans text-xs leading-[15px] capitalize text-[#A4A2C4]"
              style={{ maxWidth: node.labelWidth ?? 117, wordBreak: 'break-word' }}
            >
              {node.label}
            </span>
          </div>
        );
      })}

      {/* Bottom overlay - visibility hidden per design */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[-1] h-[117px] invisible"
        aria-hidden
      >
        <div
          className="absolute left-1/2 top-1/2 h-[57px] w-[121px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5B35]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[117px] bg-[rgba(11,13,52,0.4)]"
          aria-hidden
        />
      </div>
    </div>
  );
};

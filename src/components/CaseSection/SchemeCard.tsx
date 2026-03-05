'use client';

import dynamic from 'next/dynamic';
import {
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
  Path6,
  Path7,
} from '@/public/assets/svgs/case1/path/Path';

const Icon1 = dynamic(
  () => import('@/public/assets/svgs/case1/Icon1').then((m) => m.default),
  { ssr: false }
);
const Icon2 = dynamic(
  () => import('@/public/assets/svgs/case1/Icon2').then((m) => m.default),
  { ssr: false }
);
const Icon3 = dynamic(
  () => import('@/public/assets/svgs/case1/Icon3').then((m) => m.default),
  { ssr: false }
);
const Icon4 = dynamic(
  () => import('@/public/assets/svgs/case1/Icon4').then((m) => m.default),
  { ssr: false }
);
const Icon5 = dynamic(
  () => import('@/public/assets/svgs/case1/Icon5').then((m) => m.default),
  { ssr: false }
);
const Icon6 = dynamic(
  () => import('@/public/assets/svgs/case1/Icon6').then((m) => m.default),
  { ssr: false }
);
const Icon7 = dynamic(
  () => import('@/public/assets/svgs/case1/Icon7').then((m) => m.default),
  { ssr: false }
);
const Icon8 = dynamic(
  () => import('@/public/assets/svgs/case1/Icon8').then((m) => m.default),
  { ssr: false }
);

const ICONS = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8] as const;

type SchemeNodeConfig = {
  iconId: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  label: string;
  active?: boolean;
  position: {
    left?: number | string;
    right?: number;
    top?: number;
    bottom?: number;
    center?: boolean;
  };
};

const DEFAULT_NODES: SchemeNodeConfig[] = [
  { iconId: 1, label: 'EHR/EMR', position: { left: 40, top: 48 } },
  { iconId: 2, label: 'PAS/Scheduling', position: { left: 145, top: 48 } },
  { iconId: 3, label: 'Lab System', position: { left: 250, top: 48 } },
  { iconId: 4, label: 'Pharmacy/Meds', position: { right: 40, top: 48 } },
  {
    iconId: 5,
    label: 'Secure Connectors',
    position: { left: "51%", top: 245, center: true },
  },
  {
    iconId: 6,
    label: 'Raw Landing Zone',
    position: { left: 20, bottom: 20 },
  },
  {
    iconId: 7,
    label: 'Schema&Column Profiling',
    position: { left: '50%', bottom: 10, center: true },
  },
  {
    iconId: 8,
    label: 'Key Table&Field Catalogue',
    active: true,
    position: { right: 20, bottom: 15 },
  },
];

const PATH_COUNT = 7;

type SchemeCardProps = {
  nodes?: SchemeNodeConfig[];
  cycleKey?: number;
  cycleDurationMs?: number;
  className?: string;
};

/** Reusable scheme flowchart card with glassmorphism and SVG paths. */
export const SchemeCard = ({
  nodes = DEFAULT_NODES,
  cycleKey = 0,
  cycleDurationMs = 6000,
  className = '',
}: SchemeCardProps) => {
  const pathIntervalS = cycleDurationMs / 1000 / PATH_COUNT;
  const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

  const pathConfigs = [
    { Path: Path1, left: 80, top: 154.83, w: 167, h: 88, dir: 'ltr' as const },
    { Path: Path2, left: 185, top: 154.83, w: 62, h: 88, dir: 'ltr' as const },
    { Path: Path3, left: 237, top: 154.83, w: 63, h: 88, dir: 'rtl' as const },
    { Path: Path4, left: 237, top: 154.83, w: 168, h: 88, dir: 'rtl' as const },
    { Path: Path5, left: 80, top: 350, w: 167, h: 53, dir: 'rtl' as const },
    { Path: Path6, left: 114, top: 439, w: 82, h: 12, dir: 'ltr' as const },
    { Path: Path7, left: 265, top: 439, w: 83, h: 12, dir: 'ltr' as const },
  ] as const;

  return (
    <div
      className={`relative h-[533px] w-[475px] shrink-0 overflow-hidden rounded-3xl border border-white/9 bg-[rgba(11,13,52,0.4)] backdrop-blur-[55px] ${className}`.trim()}
    >
      {/* Connector paths - draw smoothly from start to end, 1 by 1 (like writing) */}
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
          ...('left' in pos && pos.left !== undefined && { left: pos.left }),
          ...('right' in pos && pos.right !== undefined && { right: pos.right }),
          ...('top' in pos && pos.top !== undefined && { top: pos.top }),
          ...('bottom' in pos && pos.bottom !== undefined && {
            bottom: pos.bottom,
          }),
          ...(pos.center && {
            transform: 'translateX(-50%)',
          }),
        };

        return (
          <div
            key={index}
            className="flex flex-col items-center gap-2 pb-[2.83px]"
            style={style}
          >
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg">
              {IconComponent && <IconComponent className="h-full w-full" />}
            </div>
            <span
              className="max-w-[115px] shrink-0 text-center font-sans text-xs leading-4 capitalize text-[#A4A2C4]"
              style={{ wordBreak: 'break-word' }}
            >
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

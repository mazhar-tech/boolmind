'use client';

import dynamic from 'next/dynamic';
import {
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
} from '@/public/assets/svgs/case2/path/Path';

const Icon1 = dynamic(
  () => import('@/public/assets/svgs/case2/Icon1').then((m) => m.default),
  { ssr: false }
);
const Icon2 = dynamic(
  () => import('@/public/assets/svgs/case2/Icon2').then((m) => m.default),
  { ssr: false }
);
const Icon3 = dynamic(
  () => import('@/public/assets/svgs/case2/Icon3').then((m) => m.default),
  { ssr: false }
);
const Icon4 = dynamic(
  () => import('@/public/assets/svgs/case2/Icon4').then((m) => m.default),
  { ssr: false }
);
const Icon5 = dynamic(
  () => import('@/public/assets/svgs/case2/Icon5').then((m) => m.default),
  { ssr: false }
);
const Icon6 = dynamic(
  () => import('@/public/assets/svgs/case2/Icon6').then((m) => m.default),
  { ssr: false }
);

const ICONS = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6] as const;

type SchemeNodeConfig = {
  iconId: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
  active?: boolean;
  position: {
    left?: number | string;
    right?: number;
    top?: number;
    bottom?: number;
  };
};

const DEFAULT_NODES: SchemeNodeConfig[] = [
  {
    iconId: 1,
    label: 'Patient Rows From All Systems',
    position: { left: 10, top: 40 },
  },
  {
    iconId: 2,
    label: 'Standardise Names, Addresses, DOB, IDs',
    position: { right: 100, top: 40 },
  },
  {
    iconId: 3,
    label: 'Blocking And Candidate Pair Generation',
    position: { right: 10, top: 220 },
  },
  {
    iconId: 4,
    label: 'ML & Transformer-Based Match Scoring',
    position: { left: 115, top: 220 },
  },
  {
    iconId: 5,
    label: 'Cluster Into Real Patients',
    position: { left: 10, bottom: 15 },
  },
  {
    iconId: 6,
    label: 'Assign GoldenPatientID',
    active: true,
    position: { left: 240, top: 390 },
  },
];

const PATH_COUNT = 5;

type SchemeCard2Props = {
  nodes?: SchemeNodeConfig[];
  cycleKey?: number;
  cycleDurationMs?: number;
  className?: string;
};

/** Scheme 2: Patient data processing flowchart with case2 icons & paths. */
export const SchemeCard2 = ({
  nodes = DEFAULT_NODES,
  cycleKey = 0,
  cycleDurationMs = 6000,
  className = '',
}: SchemeCard2Props) => {
  const pathIntervalS = cycleDurationMs / 1000 / PATH_COUNT;
  const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

  const pathConfigs = [
    { Path: Path1, left: 125, top: 80, w: 139, h: 12, dir: 'ltr' as const },
    { Path: Path2, left: 350, top: 80, w: 57, h: 138, dir: 'ttb' as const },
    { Path: Path3, left: 221, top: 256, w: 128, h: 12, dir: 'rtl' as const },
    { Path: Path4, left: 70, top: 256, w: 68, h: 136, dir: 'ttb' as const },
    { Path: Path5, left: 120, top: 430, w: 139, h: 12, dir: 'ltr' as const },
  ] as const;

  return (
    <div
      className={`relative h-[533px] w-[475px] shrink-0 overflow-hidden rounded-3xl border border-white/9 bg-[rgba(11,13,52,0.4)] backdrop-blur-[55px] ${className}`.trim()}
    >
      {/* Connector paths - draw smoothly from start to end, 1 by 1 */}
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
              className="max-w-[130px] shrink-0 text-center font-sans text-xs leading-4 capitalize text-[#A4A2C4]"
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

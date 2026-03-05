'use client';

import dynamic from 'next/dynamic';
import {
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
  Path6,
} from '@/public/assets/svgs/case3/path/Path';

const Icon1 = dynamic(
  () => import('@/public/assets/svgs/case3/Icon1').then((m) => m.default),
  { ssr: false }
);
const Icon2 = dynamic(
  () => import('@/public/assets/svgs/case3/Icon2').then((m) => m.default),
  { ssr: false }
);
const Icon3 = dynamic(
  () => import('@/public/assets/svgs/case3/Icon3').then((m) => m.default),
  { ssr: false }
);
const Icon4 = dynamic(
  () => import('@/public/assets/svgs/case3/Icon4').then((m) => m.default),
  { ssr: false }
);
const Icon5 = dynamic(
  () => import('@/public/assets/svgs/case3/Icon5').then((m) => m.default),
  { ssr: false }
);

const ICONS = [Icon1, Icon2, Icon3, Icon4, Icon5] as const;

type SchemeNodeConfig = {
  iconId: 1 | 2 | 3 | 4 | 5;
  label: string;
  labelWidth?: number;
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
    label: 'GoldenPatient Table',
    labelWidth: 120,
    position: { left: 'calc(50% - 60px)', top: 30 },
  },
  {
    iconId: 2,
    label: 'PatientEvent Facts (Encounters, Labs, Imaging)',
    labelWidth: 165,
    position: { left: 'calc(50% - 80px)', top: 200 },
  },
  {
    iconId: 3,
    label: 'Analytics And KPI Dashboard',
    labelWidth: 87,
    position: { left: 45, top: 377 },
  },
  {
    iconId: 4,
    label: 'Risk And Prediction Models',
    labelWidth: 106,
    position: { left: 'calc(50% - 53px)', top: 377 },
  },
  {
    iconId: 5,
    label: 'Clinical LLM Copilot',
    labelWidth: 72,
    position: { right: 45, top: 377 },
  },
];

const PATH_COUNT = 6;

type SchemeCard3Props = {
  nodes?: SchemeNodeConfig[];
  cycleKey?: number;
  cycleDurationMs?: number;
  className?: string;
};

/** Scheme 3: GoldenPatient → PatientEvent → Analytics/Risk/Copilot with case3 icons & paths. */
export const SchemeCard3 = ({
  nodes = DEFAULT_NODES,
  cycleKey = 0,
  cycleDurationMs = 6000,
  className = '',
}: SchemeCard3Props) => {
  const pathIntervalS = cycleDurationMs / 1000 / PATH_COUNT;
  const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

  const pathConfigs = [
    { Path: Path1, left: 231, top: 131, w: 12, h: 67, dir: 'ttb' as const },
    { Path: Path3, left: 80, top: 131, w: 161, h: 241, dir: 'ttb' as const },
    { Path: Path2, left: 233, top: 131, w: 162, h: 241, dir: 'ttb' as const },
    { Path: Path4, left: 231, top: 320, w: 12, h: 55, dir: 'ttb' as const },
    { Path: Path6, left: 80, top: 320, w: 157, h: 52, dir: 'ttb' as const },
    { Path: Path5, left: 237, top: 320, w: 158, h: 52, dir: 'ttb' as const },
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
            <div className="relative isolate flex h-20 w-20 shrink-0 items-center justify-center overflow-visible rounded-lg bg-[rgba(5,6,26,0.4)] p-3">

              <div

              >
                {IconComponent && <IconComponent className="" />}
              </div>
            </div>
            <span
              className="shrink-0 text-center font-sans text-xs leading-4 capitalize text-[#A4A2C4]"
              style={{ maxWidth: node.labelWidth ?? 165, wordBreak: 'break-word' }}
            >
              {node.label}
            </span>
          </div>
        );
      })}

      {/* Bottom overlay with blurred orange ellipse */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[-1] h-[103px] overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[33px] w-[173px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5B35] blur-[15px]"
          aria-hidden
        />
        <div
          className="absolute inset-x-[5px] -bottom-[9px] h-[103px] bg-[rgba(11,13,52,0.4)] backdrop-blur-[83px]"
          aria-hidden
        />
      </div>
    </div>
  );
};

'use client';

import dynamic from 'next/dynamic';
import {
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
} from '@/public/assets/svgs/saleCRM/path/Path';

const Icon1 = dynamic(
  () => import('@/public/assets/svgs/saleCRM/Icon1').then((m) => m.default),
  { ssr: false }
);
const Icon2 = dynamic(
  () => import('@/public/assets/svgs/saleCRM/Icon2').then((m) => m.default),
  { ssr: false }
);
const Icon3 = dynamic(
  () => import('@/public/assets/svgs/saleCRM/Icon3').then((m) => m.default),
  { ssr: false }
);
const Icon4 = dynamic(
  () => import('@/public/assets/svgs/saleCRM/Icon4').then((m) => m.default),
  { ssr: false }
);
const Icon5 = dynamic(
  () => import('@/public/assets/svgs/saleCRM/Icon5').then((m) => m.default),
  { ssr: false }
);
const Icon6 = dynamic(
  () => import('@/public/assets/svgs/saleCRM/Icon6').then((m) => m.default),
  { ssr: false }
);

const ICONS = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6] as const;

type SalesCRMNodeConfig = {
  iconId: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
  labelWidth?: number;
  active?: boolean;
  position: { left: number; top: number };
};

const SALES_CRM_NODES: SalesCRMNodeConfig[] = [
  { iconId: 1, label: 'Salesforce Orgs', labelWidth: 94, position: { left: 40, top: 56 } },
  { iconId: 2, label: 'Hub/Spot Cloud CRM', labelWidth: 66, position: { left: 40, top: 222 } },
  { iconId: 3, label: 'Legacy Or Custom CRM', labelWidth: 76, position: { left: 35, top: 395 } },
  { iconId: 4, label: 'Schema Extraction', labelWidth: 112, position: { left: 279, top: 56 } },
  { iconId: 5, label: 'Field Profiling&Usage Stats', labelWidth: 129, position: { left: 279, top: 220 } },
  { iconId: 6, label: 'Common CRM Entity Map', labelWidth: 84, active: true, position: { left: 302, top: 389 } },
];

const PATH_COUNT = 5;


const pathConfigs = [
  { Path: Path1, left: 134, top: 109, w: 147, h: 8, dir: 'ltr' as const },
  { Path: Path2, left: 126, top: 109, w: 156, h: 180, dir: 'ltr' as const },
  { Path: Path3, left: 123, top: 109, w: 157, h: 347, dir: 'ltr' as const },
  { Path: Path4, left: 344, top: 162, w: 9, h: 50, dir: 'ttb' as const },
  { Path: Path5, left: 344, top: 330, w: 8, h: 56, dir: 'ttb' as const },
] as const;

type SchemeCardSalesCRMProps = {
  nodes?: SalesCRMNodeConfig[];
  cycleKey?: number;
  cycleDurationMs?: number;
  className?: string;
};

/** Sales CRM scheme card: 475×540, glassmorphism, saleCRM icons and connector paths. */
export const SchemeCardSalesCRM = ({
  nodes = SALES_CRM_NODES,
  cycleKey = 0,
  cycleDurationMs = 6000,
  className = '',
}: SchemeCardSalesCRMProps) => {
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
        const { left, top } = node.position;
        return (
          <div
            key={index}
            className="absolute flex flex-col items-center gap-2 pb-[2.83px]"
            style={{ left, top }}
          >
            <div className="relative isolate h-20 w-20 shrink-0 overflow-visible">
              {IconComponent && (
                <IconComponent className="h-20 w-20 rounded-[5.67px]" />
              )}
            </div>
            <span
              className="shrink-0 text-center font-sans text-xs leading-[15px] capitalize text-[#A4A2C4]"
              style={{ maxWidth: node.labelWidth ?? 129, wordBreak: 'break-word' }}
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

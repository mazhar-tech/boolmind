'use client';

import dynamic from 'next/dynamic';
import {
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
} from '@/public/assets/svgs/banking/path/Path';

const Icon1 = dynamic(
  () => import('@/public/assets/svgs/banking/Icon1').then((m) => m.default),
  { ssr: false }
);
const Icon2 = dynamic(
  () => import('@/public/assets/svgs/banking/Icon2').then((m) => m.default),
  { ssr: false }
);
const Icon3 = dynamic(
  () => import('@/public/assets/svgs/banking/Icon3').then((m) => m.default),
  { ssr: false }
);
const Icon4 = dynamic(
  () => import('@/public/assets/svgs/banking/Icon6').then((m) => m.default),
  { ssr: false }
);
const Icon5 = dynamic(
  () => import('@/public/assets/svgs/banking/Icon5').then((m) => m.default),
  { ssr: false }
);
const Icon6 = dynamic(
  () => import('@/public/assets/svgs/banking/Icon4').then((m) => m.default),
  { ssr: false }
);

const ICONS = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6] as const;

type BankingNodeConfig = {
  iconId: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
  active?: boolean;
  position: { left: number; top: number };
};

const BANKING_NODES: BankingNodeConfig[] = [
  { iconId: 1, label: 'core banking', position: { left: 40, top: 37 } },
  { iconId: 2, label: 'card processor', position: { left: 192, top: 37 } },
  { iconId: 3, label: 'merchant reference data', position: { left: 341, top: 37 } },
  {
    iconId: 4,
    label: 'transaction landing zone',
    active: true,
    position: { left: 200, top: 388 },
  },
  { iconId: 5, label: 'Secure Ingest', position: { left: 66, top: 220 } },
  { iconId: 6, label: 'Field profiling&frequency analysis', position: { left: 305, top: 221 } },
];

const PATH_COUNT = 5;

/** Design dimensions; positions/sizes use % so card scales with max 475×540 */
const CARD_W = 475;
const CARD_H = 540;

const pathConfigsPercent = [
  { Path: Path1, left: (79.5 / CARD_W) * 100, top: (147 / CARD_H) * 100, w: (263 / CARD_W) * 100, h: (75.17 / CARD_H) * 100, dir: 'ltr' as const },
  { Path: Path2, left: (236 / CARD_W) * 100, top: (147 / CARD_H) * 100, w: (105.5 / CARD_W) * 100, h: (75.17 / CARD_H) * 100, dir: 'ltr' as const },
  { Path: Path3, left: (335 / CARD_W) * 100, top: (157.83 / CARD_H) * 100, w: (43.5 / CARD_W) * 100, h: (63.17 / CARD_H) * 100, dir: 'ttb' as const },
  { Path: Path4, left: (149 / CARD_W) * 100, top: (274.42 / CARD_H) * 100, w: (154 / CARD_W) * 100, h: (8 / CARD_H) * 100, dir: 'rtl' as const },
  { Path: Path5, left: (106 / CARD_W) * 100, top: (334.83 / CARD_H) * 100, w: (132 / CARD_W) * 100, h: (50.17 / CARD_H) * 100, dir: 'ttb' as const },
] as const;

/** Icon box size in % of card (475×540) so it scales with card */
const iconBoxWidthPercent = (80 / CARD_W) * 100;

type SchemeCardBankingProps = {
  nodes?: BankingNodeConfig[];
  cycleKey?: number;
  cycleDurationMs?: number;
  className?: string;
};

/** Banking scheme card: responsive up to 475×540, glassmorphism, banking icons and connector paths. */
export const SchemeCardBanking = ({
  nodes = BANKING_NODES,
  cycleKey = 0,
  cycleDurationMs = 6000,
  className = '',
}: SchemeCardBankingProps) => {
  const pathIntervalS = cycleDurationMs / 1000 / PATH_COUNT;
  const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

  return (
    <div
      className={`relative h-[540px] w-[475px] shrink-0 overflow-hidden rounded-[24px] border border-white/9 bg-[rgba(11,13,52,0.4)] backdrop-blur-[55px] ${className}`.trim()}
      style={{ borderWidth: '0.732899px' }}
    >
      {/* Connector paths — positions/sizes in % so they scale with card */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden key={cycleKey}>
        {pathConfigsPercent.map(({ Path, left, top, w, h, dir }, index) => (
          <div
            key={index}
            className={`absolute scheme-path-draw-${dir}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${w}%`,
              height: `${h}%`,
              animation: `scheme-path-draw ${pathDurationS}s ease-in-out ${index * pathIntervalS}s forwards`,
            }}
          >
            <Path className="h-full w-full" preserveAspectRatio="none" />
          </div>
        ))}
      </div>

      {/* Node icons with labels — positions/sizes in % for responsive scaling */}
      {nodes.map((node, index) => {
        const IconComponent = ICONS[node.iconId - 1];
        const { left, top } = node.position;
        const leftPercent = (left / CARD_W) * 100;
        const topPercent = (top / CARD_H) * 100;
        const isActive = node.active;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center gap-[0.52%] pb-[0.52%]"
            style={{
              left: `${leftPercent}%`,
              top: `${topPercent}%`,
              width: `${iconBoxWidthPercent}%`,
            }}
          >
            <div
              className="relative isolate w-full overflow-hidden rounded-[5.67px]"
              style={{ aspectRatio: '1' }}
            >
              <div className={`relative z-4 h-full w-full ${isActive ? '[&_path]:fill-[#FF5B35]!' : ''}`}>
                {IconComponent && <IconComponent className="h-full w-full" />}
              </div>
            </div>
            <span
              className="shrink-0 text-center w-[200px] font-sans text-xs leading-[15px] capitalize text-[#A4A2C4]"
             >
              {node.label}
            </span>
          </div>
        );
      })}

      {/* Bottom overlay — design spec visibility hidden */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[21.67%] bg-[rgba(11,13,52,0.4)] pointer-events-none invisible"
        aria-hidden
      />
    </div>
  );
};

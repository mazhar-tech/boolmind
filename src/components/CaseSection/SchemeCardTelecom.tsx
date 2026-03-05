'use client';

import dynamic from 'next/dynamic';
import {
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
  Path7,
} from '@/public/assets/svgs/telecom/path/Path';

const Icon1 = dynamic(
  () => import('@/public/assets/svgs/telecom/Icon1').then((m) => m.default),
  { ssr: false }
);
const Icon2 = dynamic(
  () => import('@/public/assets/svgs/telecom/Icon2').then((m) => m.default),
  { ssr: false }
);
const Icon3 = dynamic(
  () => import('@/public/assets/svgs/telecom/Icon3').then((m) => m.default),
  { ssr: false }
);
const Icon4 = dynamic(
  () => import('@/public/assets/svgs/telecom/Icon4').then((m) => m.default),
  { ssr: false }
);
const Icon5 = dynamic(
  () => import('@/public/assets/svgs/telecom/Icon5').then((m) => m.default),
  { ssr: false }
);
const Icon6 = dynamic(
  () => import('@/public/assets/svgs/telecom/Icon6').then((m) => m.default),
  { ssr: false }
);
const Icon7 = dynamic(
  () => import('@/public/assets/svgs/telecom/Icon7').then((m) => m.default),
  { ssr: false }
);

const ICONS = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7] as const;

type TelecomNodeConfig = {
  iconId: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  label: string;
  labelWidth?: number;
  active?: boolean;
  position: { left: number | string; top: number };
};

const TELECOM_NODES: TelecomNodeConfig[] = [
  { iconId: 1, label: 'CRM/BSS', labelWidth: 57, position: { left: 40, top: 40 } },
  { iconId: 2, label: 'Billing System', labelWidth: 82, position: { left: 147, top: 40 } },
  { iconId: 3, label: 'CDR/Usage Logs', labelWidth: 69, position: { left: 253, top: 40 } },
  { iconId: 4, label: 'Ticketing/Care', labelWidth: 61, position: { left: 355, top: 40 } },
  { iconId: 5, label: 'Secure Ingest', labelWidth: 79, position: { left: 'calc(50% - 40px - 8.5px)', top: 225 } },
  { iconId: 6, label: 'Subscriber&Network Profiling', labelWidth: 123, position: { left: 35, top: 367 } },
  { iconId: 7, label: 'Key Entity Inventory', labelWidth: 59, active: true, position: { left: 303, top: 367 } },
];

const PATH_COUNT = 6;

const pathConfigs = [
  { Path: Path1, left: 80, top: 146, w: 158, h: 76, dir: 'ttb' as const },
  { Path: Path2, left: 188, top: 146, w: 50, h: 76, dir: 'ttb' as const },
  { Path: Path3, left: 231, top: 161, w: 58, h: 61, dir: 'ttb' as const },
  { Path: Path4, left: 230, top: 161, w: 166, h: 61, dir: 'ttb' as const },
  { Path: Path5, left: 96, top: 278, w: 93, h: 86, dir: 'ttb' as const },
  { Path: Path7, left: 158, top: 427, w: 142, h: 8, dir: 'ltr' as const },
] as const;

type SchemeCardTelecomProps = {
  nodes?: TelecomNodeConfig[];
  cycleKey?: number;
  cycleDurationMs?: number;
  className?: string;
};

/** Telecom scheme card: 475×540, glassmorphism, telecom icons and connector paths. */
export const SchemeCardTelecom = ({
  nodes = TELECOM_NODES,
  cycleKey = 0,
  cycleDurationMs = 6000,
  className = '',
}: SchemeCardTelecomProps) => {
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
              style={{ maxWidth: node.labelWidth ?? 123, wordBreak: 'break-word' }}
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

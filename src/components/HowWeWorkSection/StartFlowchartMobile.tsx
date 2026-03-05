'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Icon1 from '@/public/assets/svgs/steps/start/Icon1';
import Icon2 from '@/public/assets/svgs/steps/start/Icon2';
import Icon3 from '@/public/assets/svgs/steps/start/Icon3';
import Icon4 from '@/public/assets/svgs/steps/start/Icon4';
import Icon5 from '@/public/assets/svgs/steps/start/Icon5';
import Icon6 from '@/public/assets/svgs/steps/start/Icon6';
import Icon7 from '@/public/assets/svgs/steps/start/Icon7';
import Icon8 from '@/public/assets/svgs/steps/start/Icon8';
import Icon9 from '@/public/assets/svgs/steps/start/Icon9';
import {
  Path1 as MobilePath1,
  Path2 as MobilePath2,
  Path3 as MobilePath3,
  Path4 as MobilePath4,
  Path5 as MobilePath5,
  Path6 as MobilePath6,
  Path7 as MobilePath7,
  Path8 as MobilePath8,
} from '@/public/assets/svgs/steps/start/mobilePath/Path';
import {
  HOW_WE_WORK_RAW_SOURCES,
  HOW_WE_WORK_LANDING_LABEL,
  HOW_WE_WORK_LLM_STEPS,
  HOW_WE_WORK_OUTPUT_LABEL,
} from '@/constants';

const RAW_ICONS = [Icon1, Icon2, Icon3, Icon4];
const LLM_ICONS = [Icon6, Icon7, Icon8];

const MOBILE_W = 343;
const MOBILE_H = 944;
const MOBILE_BREAKPOINT_PX = 375; // scale down when viewport < 375 (like SchemeCard pattern)
const TOP_OFFSET = 0; // Content starts from top (no gap)

const PATH_COUNT = 8;
const CYCLE_DURATION_MS = 6000;
const pathIntervalS = CYCLE_DURATION_MS / 1000 / PATH_COUNT;
const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

/** Path positions from Figma, shifted up so first content is at top 0. Adjusted for centered RAW box (left offset 20). */
const RAW_CENTER_OFFSET = (MOBILE_W - 303) / 2; // 20
const mobilePathConfigs = [
  { Path: MobilePath1, left: 20 + RAW_CENTER_OFFSET, top: 302.5 - 212, dir: 'ttb' as const },
  { Path: MobilePath2, left: 20 + RAW_CENTER_OFFSET, top: 407.5 - 212, dir: 'ttb' as const },
  { Path: MobilePath3, left: 190 + RAW_CENTER_OFFSET, top: 302.5 - 212, dir: 'ttb' as const },
  { Path: MobilePath4, left: 190 + RAW_CENTER_OFFSET, top: 407.5 - 212, dir: 'ttb' as const },
  { Path: MobilePath5, left: 110, top: 615 - 212, dir: 'ttb' as const },
  { Path: MobilePath6, left: 169, top: 615 - 212, dir: 'ttb' as const },
  { Path: MobilePath7, left: (MOBILE_W - 320) / 2 + 74.22, top: 636 + 101.53 - 212, dir: 'ltr' as const },
  { Path: MobilePath8, left: (MOBILE_W - 340) / 2 + 81.11, top: 636 + 170 - 212, dir: 'ttb' as const },
];

/** Start flowchart — mobile layout (343×944), mobile paths, same icons. */
export const StartFlowchartMobile = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(MOBILE_W);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0]?.contentRect ?? { width: MOBILE_W };
      setViewportWidth(width);
    });
    observer.observe(el);
    setViewportWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  const mobileScale =
    viewportWidth > 0 && viewportWidth < MOBILE_BREAKPOINT_PX
      ? viewportWidth / MOBILE_BREAKPOINT_PX
      : 1;

  return (
    <div ref={viewportRef} className="flex w-full justify-center overflow-hidden">
      <div
        className="pointer-events-none absolute left-[52.95%] right-[9.16%] top-[0.25%] h-[12%] rounded-full bg-[rgba(0,116,205,0.8)] blur-[100px]"
        aria-hidden
      />
      {/* <div
          className="pointer-events-none absolute left-[7.25%] right-[48.25%] top-[0.63%] h-[12%] rounded-full bg-[rgba(255,91,53,0.8)] blur-[87.5px]"
          aria-hidden
        /> */}

      <div
        className="relative shrink-0 origin-top"
        style={{
          width: MOBILE_W,
          minHeight: MOBILE_H - 212,
          transform: `scale(${mobileScale})`,
          transformOrigin: 'top center',
        }}
      >
        {/* Blur ellipses */}

        {/* Connector paths (mobile) — draw animation like StartFlowchart */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {mobilePathConfigs.map(({ Path, left, top, dir }, index) => (
            <div
              key={index}
              className={`absolute overflow-hidden rounded-lg scheme-path-draw-${dir}`}
              style={{
                left: `${left}px`,
                top: `${top}px`,
                animation: `scheme-path-draw ${pathDurationS}s ease-in-out ${index * pathIntervalS}s forwards`,
              }}
            >
              <Path className="h-full w-full" preserveAspectRatio="none" />
            </div>
          ))}
        </div>

        {/* RAW data sources box — centered on x-axis */}
        <div
          className="absolute rounded-xl border border-white/9"
          style={{
            left: (MOBILE_W - 340) / 2,
            top: TOP_OFFSET,
            width: 340,
            height: 280,
          }}
        >
          <span
            className="absolute font-sans text-[10px] font-normal capitalize leading-[12px] text-[#A4A2C4]"
            style={{ left: 20, top: 20 }}
          >
            RAW data sources
          </span>
          {HOW_WE_WORK_RAW_SOURCES.map((label, i) => {
            const RawIcon = RAW_ICONS[i];
            const positions: Array<{ left: number; top: number }> = [
              { left: 65, top: 60 },
              { left: 204, top: 60 },
              { left: 65, top: 165 },
              { left: 201, top: 165 },
            ];
            const pos = positions[i] ?? { left: 0, top: 0 };
            return (
              <div
                key={label}
                className="absolute flex flex-col items-center gap-2"
                style={{ left: pos.left, top: pos.top, width: 56 }}
              >
                {RawIcon && (
                  <div className="h-[72px] w-[72px] shrink-0">
                    <RawIcon className="h-[72px] w-[72px]" aria-hidden />
                  </div>
                )}
                <span className="w-max max-w-[103px] text-center font-sans text-xs font-normal capitalize leading-[14px] text-[#A4A2C4]">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Ingestion & Profiling (Icon5) — shifted up by 212 */}
        <div
          className="absolute flex flex-col items-center gap-1.5"
          style={{ left: 140, top: 510 - 212, width: 63 }}
        >
          <div className="h-[72px] w-[72px] shrink-0">
            <Icon5 className="h-[72px] w-[72px]" aria-hidden />
          </div>
          <span className="w-[63px] text-center font-sans text-xs font-normal capitalize leading-[14px] text-[#A4A2C4]">
            {HOW_WE_WORK_LANDING_LABEL}
          </span>
        </div>

        {/* LLM without data cleaning — centered on x-axis, shifted up by 212 */}
        <div
          className="absolute rounded-xl border border-white/9"
          style={{
            left: (MOBILE_W - 340) / 2,
            top: 636 - 190,
            width: 200,
            height: 281,
          }}
        >
          <span
            className="absolute font-sans text-[10px] font-normal capitalize leading-3 text-[#A4A2C4]"
            style={{ left: 25, top: 25 }}
          >
            LLM without data cleaning
          </span>
          {HOW_WE_WORK_LLM_STEPS.map((label, i) => {
            const LlmIcon = LLM_ICONS[i];
            const positions: Array<{ left: number; top: number }> = [
              { left: 20, top: 55 },
              { left: 109, top: 55 },
              { left: 54, top: 183 },
            ];
            const pos = positions[i] ?? { left: 0, top: 0 };
            return (
              <div
                key={label}
                className="absolute flex flex-col items-center gap-1.5"
                style={{ left: pos.left, top: pos.top }}
              >
                {LlmIcon && (
                  <div className="shrink-0">
                    <LlmIcon className="h-[60px] w-[60px]" aria-hidden />
                  </div>
                )}
                <span className="max-w-[65px] text-center font-sans text-xs font-normal capitalize leading-[14px] text-[#A4A2C4]">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Step 1 (Icon9) — shifted up by 212, right-aligned per design */}
        <div
          className="absolute flex flex-col items-center gap-1.5"
          style={{ left: 235, top: 833 - 212, width: 56 }}
        >
          <div className="flex shrink-0 items-center justify-center">
            <Icon9 className="h-[60px] w-[60px]" aria-hidden />
          </div>
          <span className="font-sans text-xs font-normal capitalize leading-[14px] text-[#A4A2C4]">
            {HOW_WE_WORK_OUTPUT_LABEL}
          </span>
        </div>
      </div>
    </div>
  );
};

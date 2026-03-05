'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Icon1 from '@/public/assets/svgs/steps/step2/Icon1';
import Icon2 from '@/public/assets/svgs/steps/step2/Icon2';
import Icon3 from '@/public/assets/svgs/steps/step2/Icon3';
import Icon4 from '@/public/assets/svgs/steps/step2/Icon4';
import Icon5 from '@/public/assets/svgs/steps/step2/Icon5';
import {
  Path1 as MobilePath1,
  Path2 as MobilePath2,
  Path3 as MobilePath3,
  Path4 as MobilePath4,
} from '@/public/assets/svgs/steps/step2/mobilePaths/Paths';
import {
  HOW_WE_WORK_INTELLIGENCE_LABELS,
  HOW_WE_WORK_LANDING_LABEL,
  HOW_WE_WORK_STEP1_LABEL,
  HOW_WE_WORK_STEP3_LABEL,
} from '@/constants';

const MOBILE_W = 343;
const MOBILE_H = 923;
const MOBILE_BREAKPOINT_PX = 375;

/** Chart content starts at design top 212 (below title + segment). Positions relative to chart start. */
const CHART_OFFSET_TOP = 212;

const PATH_COUNT = 4;
const CYCLE_DURATION_MS = 6000;
const pathIntervalS = CYCLE_DURATION_MS / 1000 / PATH_COUNT;
const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

/** Path positions from Figma (Step 2 mobile): Path1 vertical Step 1→box, Path2 dashed in box, Path3 vertical gradient box→Ingestion, Path4 curved Ingestion→Step 3. */
const mobilePathConfigs = [
  { Path: MobilePath1, left: (MOBILE_W - 12) / 2, top: 290 - CHART_OFFSET_TOP, w: 12, h: 77, dir: 'ttb' as const },
  { Path: MobilePath2, left: (MOBILE_W - 295) / 2 + (295 - 96) / 2, top: 368 - CHART_OFFSET_TOP + 100.53 - 4.5, w: 96, h: 9, dir: 'ltr' as const },
  { Path: MobilePath3, left: (MOBILE_W - 12) / 2, top: 560 - CHART_OFFSET_TOP, w: 12, h: 235, dir: 'ttb' as const },
  { Path: MobilePath4, left: 165, top: 689.83 - CHART_OFFSET_TOP, w: 90, h: 105, dir: 'ttb' as const },
];

const BOX_W = 295;
const BOX_H = 192;
const BOX_LEFT = (MOBILE_W - BOX_W) / 2;
const BOX_TOP = 368 - CHART_OFFSET_TOP;

/** Step 2 flowchart — mobile layout (343×923): Step 1 → Intelligence Layer (2 items) → Ingestion & Profiling → Step 3. */
export const Step2FlowchartMobile = () => {
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
      <div
        className="pointer-events-none absolute left-[7.25%] right-[48.25%] top-[0.63%] h-[12%] rounded-full bg-[rgba(255,91,53,0.8)] blur-[87.5px]"
        aria-hidden
      />

      <div
        className="relative shrink-0 origin-top rounded-3xl"
        style={{
          width: MOBILE_W,
          minHeight: MOBILE_H - CHART_OFFSET_TOP,
          transform: `scale(${mobileScale})`,
          transformOrigin: 'top center',
        }}
      >
        {/* Connector paths (mobile) */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {mobilePathConfigs.map(({ Path, left, top, w, h, dir }, index) => (
            <div
              key={index}
              className={`absolute overflow-hidden rounded-lg scheme-path-draw-${dir}`}
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

        {/* Step 1 icon (top) */}
        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: (MOBILE_W - 57) / 2,
            top: 212 - CHART_OFFSET_TOP,
            width: 57,
          }}
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[5.67px] bg-[rgba(5,6,26,0.4)]"
            style={{ width: 56, height: 56 }}
          >
            <Icon1 className="h-10 w-10" aria-hidden />
          </div>
          <span className="w-[75px] text-center font-sans text-[10px] font-normal capitalize leading-[14px] text-[#A4A2C4]">
            {HOW_WE_WORK_STEP1_LABEL}
          </span>
        </div>

        {/* Intelligence Layer box */}
        <div
          className="absolute rounded-xl border border-white/9"
          style={{
            left: BOX_LEFT,
            top: BOX_TOP,
            width: BOX_W,
            height: BOX_H,
          }}
        >
          <span
            className="absolute left-1/2 top-5 w-[86px] -translate-x-1/2 font-sans text-[10px] font-normal capitalize leading-3 text-[#A4A2C4]"
            style={{ textAlign: 'center' }}
          >
            Intelligence layer
          </span>
          {/* Left: Build domain models and signals */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{
              left: 37,
              top: 56,
              width: 63,
            }}
          >
            <div
              className="flex h-[54.22px] w-[54.22px] shrink-0 items-center justify-center rounded-full bg-[rgba(5,6,26,0.4)]"
              style={{ borderRadius: '55.67px' }}
            >
              <Icon2 className="h-[38.22px] w-[38.22px]" aria-hidden />
            </div>
            <span className="w-[102px] text-center font-sans text-[10px] font-normal capitalize leading-[12px] text-[#A4A2C4]">
              {HOW_WE_WORK_INTELLIGENCE_LABELS[0]}
            </span>
          </div>
          {/* Right: Materialise indexes and feature stores */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{
              left: BOX_W - 37 - 63,
              top: 58,
              width: 63,
            }}
          >
            <div
              className="flex h-[54.22px] w-[54.22px] shrink-0 items-center justify-center rounded-full bg-[rgba(5,6,26,0.4)]"
              style={{ borderRadius: '55.67px' }}
            >
              <Icon3 className="h-[38.22px] w-[38.22px]" aria-hidden />
            </div>
            <span className="w-[94px] text-center font-sans text-[10px] font-normal capitalize leading-[12px] text-[#A4A2C4]">
              {HOW_WE_WORK_INTELLIGENCE_LABELS[1]}
            </span>
          </div>
        </div>

        {/* Ingestion & Profiling icon (middle) — offset right per spec */}
        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: MOBILE_W / 2 - 56 / 2 + 79.5,
            top: 599 - CHART_OFFSET_TOP,
            width: 56,
          }}
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[rgba(5,6,26,0.4)]"
            style={{ width: 56, height: 56 }}
          >
            <Icon4 className="h-10 w-10" aria-hidden />
          </div>
          <span className="w-[52px] text-center font-sans text-[10px] font-normal capitalize leading-[14px] text-[#A4A2C4]">
            {HOW_WE_WORK_LANDING_LABEL}
          </span>
        </div>

        {/* Step 3 icon (bottom) */}
        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: (MOBILE_W - 57) / 2,
            top: 793 - CHART_OFFSET_TOP,
            width: 57,
          }}
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[5.67px] bg-[rgba(5,6,26,0.4)]"
            style={{ width: 56, height: 56 }}
          >
            <Icon5 className="h-10 w-10" aria-hidden />
          </div>
          <span className="font-sans text-[10px] font-normal capitalize leading-[14px] text-[#A4A2C4]">
            {HOW_WE_WORK_STEP3_LABEL}
          </span>
        </div>
      </div>
    </div>
  );
};

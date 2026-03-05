'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import {
  HOW_WE_WORK_DATA_COGNITION_LABELS,
  HOW_WE_WORK_STEP1_LANDING_LABEL,
  HOW_WE_WORK_STEP2_LABEL,
} from '@/constants';
import Icon1 from '@/public/assets/svgs/steps/step1/Icon1';
import Icon2 from '@/public/assets/svgs/steps/step1/Icon2';
import Icon3 from '@/public/assets/svgs/steps/step1/Icon3';
import Icon4 from '@/public/assets/svgs/steps/step1/Icon4';
import Icon5 from '@/public/assets/svgs/steps/step1/Icon5';
import Icon6 from '@/public/assets/svgs/steps/step1/Icon6';
import {
  Path1 as MobilePath1,
  Path2 as MobilePath2,
  Path3 as MobilePath3,
  Path4 as MobilePath4,
  Path5 as MobilePath5,
} from '@/public/assets/svgs/steps/step1/mobilePaths/Paths';

const MOBILE_W = 343;
const MOBILE_H = 923;
const MOBILE_BREAKPOINT_PX = 375;

/** Chart content starts at design top 212 (below title + segment). Positions relative to chart start. */
const CHART_OFFSET_TOP = 212;

const PATH_COUNT = 5;
const CYCLE_DURATION_MS = 6000;
const pathIntervalS = CYCLE_DURATION_MS / 1000 / PATH_COUNT;
const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

/** Path positions from Figma (Step 1 mobile), relative to chart start (chart offset 212). */
const mobilePathConfigs = [
  { Path: MobilePath1, left: (MOBILE_W - 12) / 2, top: 307 - CHART_OFFSET_TOP, dir: 'ttb' as const },
  { Path: MobilePath2, left: 120, top: 370 + 90 - CHART_OFFSET_TOP, dir: 'ltr' as const },
  { Path: MobilePath3, left: 245.5, top: 385 + 166 - CHART_OFFSET_TOP, dir: 'ttb' as const },
  { Path: MobilePath4, left: 130, top: 370 + 263.53 - CHART_OFFSET_TOP, dir: 'rtl' as const },
  { Path: MobilePath5, left: (MOBILE_W - 8) / 2, top: 724 - CHART_OFFSET_TOP, dir: 'ttb' as const },
];

/** Step 1 flowchart — mobile layout (343×923) per design: title/segment in parent; chart from Raw Landing icon → Data Cognition Layer → Step 2. */
export const Step1FlowchartMobile = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(MOBILE_W);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) {
      return;
    }
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0]?.contentRect ?? { width: MOBILE_W };
      setViewportWidth(width);
    });
    observer.observe(el);
    setViewportWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  const mobileScale
    = viewportWidth > 0 && viewportWidth < MOBILE_BREAKPOINT_PX
      ? viewportWidth / MOBILE_BREAKPOINT_PX
      : 1;

  return (
    <div ref={viewportRef} className="flex w-full justify-center overflow-hidden">
      <div
        className="pointer-events-none absolute top-[0.25%] right-[9.16%] left-[52.95%] h-[12%] rounded-full bg-[rgba(0,116,205,0.8)] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[0.63%] right-[48.25%] left-[7.25%] h-[12%] rounded-full bg-[rgba(255,91,53,0.8)] blur-[87.5px]"
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
        {/* Connector paths (mobile) — draw animation */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {mobilePathConfigs.map(({ Path, left, top, dir }, index) => (
            <div
              key={index}
              className={`scheme-path-draw- absolute overflow-hidden rounded-lg${dir}`}
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

        {/* Top icon: Raw Integrated Data Landing */}
        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: (MOBILE_W - 57) / 2,
            top: 212 - CHART_OFFSET_TOP,
            width: 57,
          }}
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[5.67px]"
            style={{ width: 56, height: 56 }}
          >
            <Icon1 className="h-14 w-14" aria-hidden />
          </div>
          <span className="w-[75px] text-center font-sans text-[10px] leading-[14px] font-normal text-[#A4A2C4] capitalize">
            {HOW_WE_WORK_STEP1_LANDING_LABEL}
          </span>
        </div>

        {/* Data Cognition Layer box */}
        <div
          className="absolute rounded-xl border border-white/9"
          style={{
            left: (MOBILE_W - 311) / 2,
            top: 385 - CHART_OFFSET_TOP,
            width: 311,
            height: 339,
          }}
        >
          <span
            className="absolute top-5 left-1/2 w-[105px] -translate-x-1/2 font-sans text-[10px] leading-3 font-normal text-[#A4A2C4] capitalize"
            style={{ textAlign: 'center' }}
          >
            Data cognition layer
          </span>
          {/* Top left: Ingest, Catalogue... — left: calc(50% - 63px/2 - 79px), top: 52px */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{
              left: 311 / 2 - 63 / 2 - 79,
              top: 52,
              width: 63,
            }}
          >
            <div
              className="flex h-[54.22px] w-[54.22px] shrink-0 items-center justify-center rounded-full bg-[rgba(5,6,26,0.4)]"
              style={{ borderRadius: '55.67px' }}
            >
              <Icon2 className="h-[38.22px] w-[38.22px]" aria-hidden />
            </div>
            <span className="w-[110px] text-center font-sans text-[10px] leading-[12px] font-normal text-[#A4A2C4] capitalize">
              {HOW_WE_WORK_DATA_COGNITION_LABELS[0]}
            </span>
          </div>
          {/* Top right: Infer Schemas... — left: calc(50% - 63px/2 + 77px), top: 52px (relative to box: 311/2 - 31.5 + 77 = 217 from box left) */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{
              left: 311 / 2 - 63 / 2 + 77,
              top: 52,
              width: 63,
            }}
          >
            <div
              className="flex h-[54.22px] w-[54.22px] shrink-0 items-center justify-center rounded-full bg-[rgba(5,6,26,0.4)]"
              style={{ borderRadius: '55.67px' }}
            >
              <Icon3 className="h-[38.22px] w-[38.22px]" aria-hidden />
            </div>
            <span className="w-[109px] text-center font-sans text-[10px] leading-[12px] font-normal text-[#A4A2C4] capitalize">
              {HOW_WE_WORK_DATA_COGNITION_LABELS[1]}
            </span>
          </div>
          {/* Bottom right: Clean And Standardise Data — left: calc(50% - 63px/2 + 80px), top: 225px */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{
              left: 311 / 2 - 63 / 2 + 80,
              top: 225,
              width: 63,
            }}
          >
            <div
              className="flex h-[54.22px] w-[54.22px] shrink-0 items-center justify-center rounded-full bg-[rgba(5,6,26,0.4)]"
              style={{ borderRadius: '55.67px' }}
            >
              <Icon4 className="h-[38.22px] w-[38.22px]" aria-hidden />
            </div>
            <span className="w-[86px] text-center font-sans text-[10px] leading-[12px] font-normal text-[#A4A2C4] capitalize">
              {HOW_WE_WORK_DATA_COGNITION_LABELS[2]}
            </span>
          </div>
          {/* Bottom left: Output Data — left: calc(50% - 63px/2 - 72px), top: 225px */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{
              left: 311 / 2 - 63 / 2 - 72,
              top: 225,
              width: 63,
            }}
          >
            <div
              className="flex h-[54.22px] w-[54.22px] shrink-0 items-center justify-center rounded-full bg-[rgba(5,6,26,0.4)]"
              style={{ borderRadius: '55.67px' }}
            >
              <Icon5 className="h-[38.22px] w-[38.22px]" aria-hidden />
            </div>
            <span className="w-[61px] text-center font-sans text-[10px] leading-[12px] font-normal text-[#A4A2C4] capitalize">
              {HOW_WE_WORK_DATA_COGNITION_LABELS[3]}
            </span>
          </div>
        </div>

        {/* Step 2 icon */}
        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: (MOBILE_W - 57) / 2,
            top: 801 - CHART_OFFSET_TOP,
            width: 57,
          }}
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[5.67px]"
            style={{ width: 56, height: 56 }}
          >
            <Icon6 className="h-14 w-14" aria-hidden />
          </div>
          <span className="font-sans text-[10px] leading-[14px] font-normal text-[#A4A2C4] capitalize">
            {HOW_WE_WORK_STEP2_LABEL}
          </span>
        </div>
      </div>
    </div>
  );
};

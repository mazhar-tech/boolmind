'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Icon1 from '@/public/assets/svgs/steps/step3/Icon1';
import Icon2 from '@/public/assets/svgs/steps/step3/Icon2';
import Icon3 from '@/public/assets/svgs/steps/step3/Icon3';
import Icon4 from '@/public/assets/svgs/steps/step3/Icon4';
import Icon5 from '@/public/assets/svgs/steps/step3/Icon5';
import {
  Path1 as MobilePath1,
  Path2 as MobilePath2,
  Path3 as MobilePath3,
  Path4 as MobilePath4,
} from '@/public/assets/svgs/steps/step3/mobilePaths/Paths';
import {
  HOW_WE_WORK_REASONING_LABELS,
  HOW_WE_WORK_RESULT_LABEL,
  HOW_WE_WORK_RESULT_EXAMPLE_BULLETS,
  HOW_WE_WORK_STEP2_INPUT_LABEL,
} from '@/constants';

const MOBILE_W = 343;
const MOBILE_H = 923;
const MOBILE_BREAKPOINT_PX = 375;

/** Chart content starts at design top 212 (below title + segment). */
const CHART_OFFSET_TOP = 212;

const PATH_COUNT = 4;
const CYCLE_DURATION_MS = 6000;
const pathIntervalS = CYCLE_DURATION_MS / 1000 / PATH_COUNT;
const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

/** Path positions from Figma (Step 3 mobile): Path1 Step 2→box, Path2/3 dashed in box, Path4 curved to result. */
const mobilePathConfigs = [
  { Path: MobilePath1, left: (MOBILE_W - 12) / 2, top: 290 - CHART_OFFSET_TOP, w: 12, h: 42, dir: 'ttb' as const },
  { Path: MobilePath2, left: (MOBILE_W - 311) / 2 + 107, top: 338 - CHART_OFFSET_TOP + 89.53 - 4, w: 98, h: 8, dir: 'ltr' as const },
  { Path: MobilePath3, left: (MOBILE_W - 311) / 2 + 148.5, top: 338 - CHART_OFFSET_TOP + 134.05, w: 94, h: 22, dir: 'ttb' as const },
  { Path: MobilePath4, left: 63.5, top: 602 - CHART_OFFSET_TOP, w: 118, h: 82, dir: 'ttb' as const },
];

const BOX_W = 311;
const BOX_H = 264;
const BOX_LEFT = (MOBILE_W - BOX_W) / 2;
const BOX_TOP = 338 - CHART_OFFSET_TOP;

/** Step 3 flowchart — mobile layout (343×923): Step 2 → Reasoning Layer (3 items) → Result with example copy. */
export const Step3FlowchartMobile = () => {
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

        {/* Step 2 icon (top) */}
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
            {HOW_WE_WORK_STEP2_INPUT_LABEL}
          </span>
        </div>

        {/* Reasoning Layer box */}
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
            className="absolute left-1/2 top-5 w-[81px] -translate-x-1/2 font-sans text-[10px] font-normal capitalize leading-3 text-[#A4A2C4]"
            style={{ textAlign: 'center' }}
          >
            Reasoning layer
          </span>
          {/* Left: Retrieval and grounding over clean data */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{ left: 44, top: 45, width: 63 }}
          >
            <div
              className="flex h-[54.22px] w-[54.22px] shrink-0 items-center justify-center rounded-full bg-[rgba(5,6,26,0.4)]"
              style={{ borderRadius: '55.67px' }}
            >
              <Icon2 className="h-[38.22px] w-[38.22px]" aria-hidden />
            </div>
            <span className="w-[119px] text-center font-sans text-[10px] font-normal capitalize leading-[12px] text-[#A4A2C4]">
              {HOW_WE_WORK_REASONING_LABELS[0]}
            </span>
          </div>
          {/* Right: LLM reasoning with guardrails */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{ left: 204, top: 45, width: 63 }}
          >
            <div
              className="flex h-[54.22px] w-[54.22px] shrink-0 items-center justify-center rounded-full bg-[rgba(5,6,26,0.4)]"
              style={{ borderRadius: '55.67px' }}
            >
              <Icon3 className="h-[38.22px] w-[38.22px]" aria-hidden />
            </div>
            <span className="w-[76px] text-center font-sans text-[10px] font-normal capitalize leading-[12px] text-[#A4A2C4]">
              {HOW_WE_WORK_REASONING_LABELS[1]}
            </span>
          </div>
          {/* Middle-bottom: Unified data structure */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{ left: 117, top: 155, width: 63 }}
          >
            <div
              className="flex h-[54.22px] w-[54.22px] shrink-0 items-center justify-center rounded-full bg-[rgba(5,6,26,0.4)]"
              style={{ borderRadius: '55.67px' }}
            >
              <Icon4 className="h-[38.22px] w-[38.22px]" aria-hidden />
            </div>
            <span className="w-[73px] text-center font-sans text-[10px] font-normal capitalize leading-[12px] text-[#A4A2C4]">
              {HOW_WE_WORK_REASONING_LABELS[2]}
            </span>
          </div>
        </div>

        {/* Result icon (AI agent, left-offset per spec) */}
        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: MOBILE_W / 2 - 57 / 2 - 108,
            top: 682 - CHART_OFFSET_TOP,
            width: 57,
          }}
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[5.67px] bg-[rgba(5,6,26,0.4)]"
            style={{ width: 56, height: 56 }}
          >
            <Icon5 className="h-10 w-10" aria-hidden />
          </div>
        </div>

        {/* Result text block */}
        <div
          className="absolute font-sans text-[10px] font-normal capitalize leading-[14px] text-gray-50"
          style={{
            left: 114,
            top: 690 - CHART_OFFSET_TOP,
            width: 190,
          }}
        >
          <p className="font-medium">{HOW_WE_WORK_RESULT_LABEL}</p>
          {HOW_WE_WORK_RESULT_EXAMPLE_BULLETS.map((bullet, i) => (
            <p key={bullet} className={`text-[#DBDAEC] ${i === 0 ? 'mt-2' : 'mt-1'}`}>
              {bullet}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

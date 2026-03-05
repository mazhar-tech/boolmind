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
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
  Path6,
  Path8,
} from '@/public/assets/svgs/steps/start/path/Path';
import {
  HOW_WE_WORK_RAW_SOURCES,
  HOW_WE_WORK_LANDING_LABEL,
  HOW_WE_WORK_LLM_STEPS,
  HOW_WE_WORK_OUTPUT_LABEL,
} from '@/constants';
import { StartFlowchartMobile } from './StartFlowchartMobile';

const RAW_ICONS = [Icon1, Icon2, Icon3, Icon4];
const LLM_ICONS = [Icon6, Icon7, Icon8];

const PATH_COUNT = 8;
const CYCLE_DURATION_MS = 6000;
const pathIntervalS = CYCLE_DURATION_MS / 1000 / PATH_COUNT;
const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

const pathConfigs = [
  { Path: Path1, left: 92, top: 55, w: 343, h: 73, dir: 'ltr' as const },
  { Path: Path2, left: 224, top: 55, w: 211, h: 73, dir: 'ltr' as const },
  { Path: Path3, left: 92, top: 116, w: 343, h: 157, dir: 'ltr' as const },
  { Path: Path4, left: 223, top: 116, w: 211, h: 157, dir: 'ltr' as const },
  { Path: Path8, left: 530, top: 117, w: 558, h: 12, dir: 'ltr' as const },
  { Path: Path5, left: 530, top: 119, w: 307, h: 150, dir: 'ttb' as const },
  { Path: Path6, left: 740, top: 310, w: 40, h: 12, dir: 'ltr' as const },
  { Path: Path6, left: 880, top: 310, w: 40, h: 12, dir: 'ltr' as const },
] as const;

const FLOWCHART_W = 1280;
const FLOWCHART_H = 649;
/** Content extent height to avoid empty space below diagram (LLM box ends ~408). */
const FLOWCHART_CONTENT_H = 420;

/** Start flowchart: RAW sources → Raw Landing → Step 1 + LLM Without Data Cleaning. Scales to fit container like SchemeCard (ref + scale + explicit height). */
export const StartFlowchart = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(FLOWCHART_W);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0]?.contentRect ?? { width: FLOWCHART_W };
      setViewportWidth(width);
    });
    observer.observe(el);
    setViewportWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  const scale = viewportWidth > 0 ? Math.min(1, viewportWidth / FLOWCHART_W) : 1;
  const scaledHeight = FLOWCHART_CONTENT_H * scale;

  return (
    <div ref={viewportRef} className="w-full overflow-hidden">
      {/* Desktop (lg+): current flowchart */}
      <div className="hidden lg:block">
        <div
          style={{
            height: scaledHeight,
            minHeight: scaledHeight,
          }}
          className="w-full overflow-hidden"
        >
          <div
            className="relative origin-top-left"
            style={{
              width: FLOWCHART_W,
              height: FLOWCHART_H,
              transform: `scale(${scale})`,
            }}
          >
            {/* Connector paths with draw animation (like SchemeCard) */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
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

            {/* RAW Data Sources container (310x425) */}
            <div
              className="absolute left-0 top-0 rounded-xl border border-white/9 p-5 mb-3"
              style={{ width: 300, height: 410 }}
            >
              <span className="mb-4 block font-sans text-xs font-normal capitalize text-nav-text">
                RAW data sources
              </span>
              <div className="relative">
                {HOW_WE_WORK_RAW_SOURCES.map((label, i) => {
                  const col = i % 2;
                  const row = Math.floor(i / 2);
                  const RawIcon = RAW_ICONS[i];
                  return (
                    <div
                      key={label}
                      className="absolute flex flex-col items-center gap-2"
                      style={{ left: col === 0 ? 25 : 155, top: row === 0 ? 15 : 210 }}
                    >
                      {RawIcon && (
                        <RawIcon className="h-[104px] w-[95px] shrink-0" aria-hidden />
                      )}
                      <span className="w-max text-center font-sans text-xs font-normal capitalize leading-4 text-nav-text">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Raw Integrated Data Landing (Icon5) */}
            <div
              className="absolute flex flex-col items-center gap-2"
              style={{ left: 425, top: 75 }}
            >
              <Icon5 className="h-[92px] w-[92px] shrink-0" aria-hidden />
              <span className="max-w-[150px] text-center font-sans text-xs font-normal capitalize leading-4 text-nav-text">
                {HOW_WE_WORK_LANDING_LABEL}
              </span>
            </div>

            {/* LLM Without Data Cleaning container (409x208) */}
            <div
              className="absolute rounded-xl border border-white/9 p-5"
              style={{ left: 610, top: 200, width: 420, height: 208 }}
            >
              <span className="mb-4 block font-sans text-xs font-normal capitalize text-nav-text">
                LLM without data cleaning
              </span>
              <div className="relative flex items-center gap-0">
                {HOW_WE_WORK_LLM_STEPS.map((label, i) => {
                  const LlmIcon = LLM_ICONS[i];
                  const left = 10 + i * 138;
                  return (
                    <div key={label} className="relative flex items-center">
                      <div
                        className="absolute flex flex-col items-center gap-2"
                        style={{ left, top: 20 }}
                      >
                        {LlmIcon && (
                          <LlmIcon className="h-[92px] w-[92px] shrink-0" aria-hidden />
                        )}
                        <span className="w-[100px] text-center font-sans text-xs font-normal capitalize leading-4 text-nav-text">
                          {label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 1 output (Icon9 with glow) */}
            <div
              className="absolute flex flex-col items-center gap-2"
              style={{ left: 1090, top: 73 }}
            >
              <Icon9 className="h-[96px] w-[96px] shrink-0" aria-hidden />
              <span className="font-sans text-xs font-normal capitalize leading-4 text-nav-text">
                {HOW_WE_WORK_OUTPUT_LABEL}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (< lg) */}
      <div className="flex w-full justify-center overflow-hidden lg:hidden ">
        <StartFlowchartMobile />
      </div>
    </div>
  );
};

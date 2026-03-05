'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Icon1 from '@/public/assets/svgs/steps/step2/Icon1';
import Icon2 from '@/public/assets/svgs/steps/step2/Icon2';
import Icon3 from '@/public/assets/svgs/steps/step2/Icon3';
import Icon4 from '@/public/assets/svgs/steps/step2/Icon4';
import Icon5 from '@/public/assets/svgs/steps/step2/Icon5';
import {
  Path1,
  Path2,
  Path3,
  Path4,
} from '@/public/assets/svgs/steps/step2/path/Path';
import {
  HOW_WE_WORK_INTELLIGENCE_LABELS,
  HOW_WE_WORK_SAME_PROMPT_LABEL,
  HOW_WE_WORK_STEP1_LABEL,
  HOW_WE_WORK_STEP3_LABEL,
} from '@/constants';
import { Step2FlowchartMobile } from './Step2FlowchartMobile';

const PATH_COUNT = 4;
const CYCLE_DURATION_MS = 6000;
const pathIntervalS = CYCLE_DURATION_MS / 1000 / PATH_COUNT;
const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

const FLOWCHART_W = 1280;
const FLOWCHART_H = 649;
/** Content height after shifting diagram up to minimise top empty space. */
const FLOWCHART_CONTENT_H = 420;

const BOX_W = 384;
const BOX_H = 246;
const BOX_LEFT = FLOWCHART_W / 2 - BOX_W / 2 - 43;
const BOX_TOP = 0;

const pathConfigs = [
  { Path: Path1, left: 161, top: 104, w: 246, h: 72, dir: 'ltr' as const },
  { Path: Path2, left: BOX_LEFT + 132, top: 106, w: 121, h: 8, dir: 'ltr' as const },
  { Path: Path3, left: 789, top: 101, w: 239, h: 12, dir: 'ltr' as const },
  { Path: Path4, left: 643, top: 101, w: 385, h: 239, dir: 'ltr' as const },
] as const;

const middleIconConfigs = [
  { Icon: Icon2, left:0, top: 10, label: HOW_WE_WORK_INTELLIGENCE_LABELS[0] },
  { Icon: Icon3, left: 230, top: 10, label: HOW_WE_WORK_INTELLIGENCE_LABELS[1] },
] as const;

/** Step 2 flowchart: Step 1 → Intelligence Layer (2 steps) → Same Prompt To LLM + Step 3. Same pattern as Step1Flowchart, step2 assets. */
export const Step2Flowchart = () => {
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
  const scaledWidth = FLOWCHART_W * scale;

  return (
    <div ref={viewportRef} className="w-full overflow-hidden">
      {/* Desktop (lg+): step2 flowchart */}
      <div className="hidden lg:block">
      <div
        style={{
          width: scaledWidth,
          height: scaledHeight,
          minHeight: scaledHeight,
        }}
        className="overflow-hidden flex justify-center"
      >
        <div
          className="relative origin-top-left"
          style={{
            width: FLOWCHART_W,
            height: FLOWCHART_H,
            transform: `scale(${scale})`,
          }}
        >
          {/* Connector paths: step2 Path SVGs only */}
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

          {/* Intelligence Layer box */}
          <div
            className="absolute rounded-xl border border-white/9 p-5"
            style={{ left: BOX_LEFT, top: BOX_TOP, width: BOX_W, height: BOX_H }}
          >
            <span className="mb-4 block font-sans text-xs text-center font-normal capitalize text-nav-text">
              Intelligence layer
            </span>
            <div className="relative">
              {middleIconConfigs.map(({ Icon, left, top, label }, index) => (
                <div
                  key={index}
                  className="absolute flex flex-col items-center gap-2"
                  style={{ left, top }}
                >
                  <Icon className="h-[92px] w-[92px] shrink-0" aria-hidden />
                  <span className="max-w-[122px] text-center font-sans text-xs font-normal capitalize leading-4 text-nav-text">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Left node – Step 1 */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{ left: 65, top: 120 }}
          >
            <Icon1 className="h-[96px] w-[96px] shrink-0" aria-hidden />
            <span className="font-sans text-xs font-normal capitalize leading-4 text-nav-text">
              {HOW_WE_WORK_STEP1_LABEL}
            </span>
          </div>

          {/* Right node – Step 3 */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{ left: 1026, top: 55 }}
          >
            <Icon5 className="h-[96px] w-[96px] shrink-0" aria-hidden />
            <span className="font-sans text-xs font-normal capitalize leading-4 text-nav-text">
              {HOW_WE_WORK_STEP3_LABEL}
            </span>
          </div>

          {/* Bottom center – Same Prompt To LLM */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{ left: 551, top: 280 }}
          >
            <Icon4 className="h-[92px] w-[92px] shrink-0" aria-hidden />
            <span className="max-w-[80px] text-center font-sans text-xs font-normal capitalize leading-4 text-nav-text">
              {HOW_WE_WORK_SAME_PROMPT_LABEL}
            </span>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile (< lg) */}
      <div className="flex w-full justify-center overflow-hidden lg:hidden">
        <Step2FlowchartMobile />
      </div>
    </div>
  );
};

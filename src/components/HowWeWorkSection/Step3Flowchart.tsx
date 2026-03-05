'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Icon1 from '@/public/assets/svgs/steps/step3/Icon1';
import Icon2 from '@/public/assets/svgs/steps/step3/Icon2';
import Icon3 from '@/public/assets/svgs/steps/step3/Icon3';
import Icon5 from '@/public/assets/svgs/steps/step3/Icon5';
import {
  Path1,
  Path2,
  Path4,
} from '@/public/assets/svgs/steps/step3/path/Path';
import {
  HOW_WE_WORK_REASONING_LABELS,
  HOW_WE_WORK_RESULT_LABEL,
  HOW_WE_WORK_STEP2_INPUT_LABEL,
} from '@/constants';
import { Step3FlowchartMobile } from './Step3FlowchartMobile';

const PATH_COUNT = 3;
const CYCLE_DURATION_MS = 6000;
const pathIntervalS = CYCLE_DURATION_MS / 1000 / PATH_COUNT;
const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

const FLOWCHART_W = 1280;
const FLOWCHART_H = 649;
const FLOWCHART_CONTENT_H = 420;

const BOX_W = 560;
const BOX_H = 246;
const BOX_LEFT = FLOWCHART_W / 2 - BOX_W / 2 - 55;
const BOX_TOP = 40;

const pathConfigs = [
  { Path: Path1, left: 161, top: 160, w: 146, h: 12, dir: 'ltr' as const },
  { Path: Path2, left: BOX_LEFT + 132, top: 160, w: 103, h: 8, dir: 'ltr' as const },
  { Path: Path2, left: BOX_LEFT + 330, top: 160, w: 103, h: 8, dir: 'ltr' as const },
  { Path: Path4, left: 870, top: 160, w: 142, h: 12, dir: 'ltr' as const },
] as const;

const middleIconConfigs = [
  { Icon: Icon2, left: -10, top: 25 , label: HOW_WE_WORK_REASONING_LABELS[0] },
  { Icon: Icon3, left: 195, top: 25, label: HOW_WE_WORK_REASONING_LABELS[1] },
  { Icon: Icon3, left: 400, top: 25, label: HOW_WE_WORK_REASONING_LABELS[1] },
] as const;

/** Step 3 flowchart: Step 2 → Reasoning Layer (2 icons) → Result. Same pattern as Step1Flowchart, step3 assets. */
export const Step3Flowchart = () => {
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
      {/* Desktop (lg+): step3 flowchart */}
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
          {/* Connector paths: step3 Path SVGs only */}
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

          {/* Reasoning Layer box – 2 icons only */}
          <div
            className="absolute rounded-xl border border-white/9 p-5"
            style={{ left: BOX_LEFT, top: BOX_TOP, width: BOX_W, height: BOX_H }}
          >
            <span className="mb-4 block font-sans text-xs text-center font-normal capitalize text-nav-text">
              Reasoning layer
            </span>
            <div className="relative">
              {middleIconConfigs.map(({ Icon, left, top, label }, index) => (
                <div
                  key={index}
                  className="absolute flex flex-col items-center gap-2"
                  style={{ left, top }}
                >
                  <Icon className="h-[92px] w-[92px] shrink-0" aria-hidden />
                  <span className="max-w-[142px] text-center font-sans text-xs font-normal capitalize leading-4 text-nav-text">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Left node – Step 2 */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{ left: 65, top: 120 }}
          >
            <Icon1 className="h-[96px] w-[96px] shrink-0" aria-hidden />
            <span className="font-sans text-xs font-normal capitalize leading-4 text-nav-text">
              {HOW_WE_WORK_STEP2_INPUT_LABEL}
            </span>
          </div>

          {/* Right node – Result */}
          <div
            className="absolute flex flex-col items-center gap-2"
            style={{ left: 950, top: 120 }}
          >
            <Icon5 className="h-[96px] w-[96px] shrink-0" aria-hidden />
            <span className="max-w-[228px] text-center font-sans text-xs font-normal capitalize leading-4 text-nav-text">
              {HOW_WE_WORK_RESULT_LABEL}
            </span>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile (< lg) */}
      <div className="flex w-full justify-center overflow-hidden lg:hidden ">
        <Step3FlowchartMobile />
      </div>
    </div>
  );
};

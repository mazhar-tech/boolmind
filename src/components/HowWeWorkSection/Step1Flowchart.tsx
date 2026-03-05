'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Icon1 from '@/public/assets/svgs/steps/step1/Icon1';
import Icon2 from '@/public/assets/svgs/steps/step1/Icon2';
import Icon3 from '@/public/assets/svgs/steps/step1/Icon3';
import Icon4 from '@/public/assets/svgs/steps/step1/Icon4';
import Icon5 from '@/public/assets/svgs/steps/step1/Icon5';
import Icon6 from '@/public/assets/svgs/steps/step1/Icon6';
import {
  Path1,
  Path2,
  Path3,
} from '@/public/assets/svgs/steps/step1/path/Path';
import {
  HOW_WE_WORK_DATA_COGNITION_LABELS,
  HOW_WE_WORK_STEP1_LANDING_LABEL,
  HOW_WE_WORK_STEP2_LABEL,
} from '@/constants';
import { Step1FlowchartMobile } from './Step1FlowchartMobile';

const PATH_COUNT = 5;
const CYCLE_DURATION_MS = 6000;
const pathIntervalS = CYCLE_DURATION_MS / 1000 / PATH_COUNT;
const pathDurationS = Math.min(0.75, pathIntervalS * 0.85);

const BOX_W = 735;
const BOX_H = 255;
const BOX_LEFT = (1280 - BOX_W) / 2;
const BOX_TOP = 80;

const pathConfigs = [
  { Path: Path1, left: 161, top: 201, w: 152, h: 12, dir: 'ltr' as const },
  { Path: Path2, left: BOX_LEFT + 132, top: 203, w: 97, h: 8, dir: 'ltr' as const },
  { Path: Path2, left: BOX_LEFT + 320, top: 203, w: 97, h: 8, dir: 'ltr' as const },
  { Path: Path2, left: BOX_LEFT + 508, top: 203, w: 97, h: 8, dir: 'ltr' as const },
  { Path: Path3, left: 1010, top: 201, w: 113, h: 12, dir: 'ltr' as const },
] as const;

const middleIconConfigs = [
  { Icon: Icon2, left: 0, top: 25, label: HOW_WE_WORK_DATA_COGNITION_LABELS[0] },
  { Icon: Icon3, left: 188, top: 25, label: HOW_WE_WORK_DATA_COGNITION_LABELS[1] },
  { Icon: Icon4, left: 375, top: 25, label: HOW_WE_WORK_DATA_COGNITION_LABELS[2] },
  { Icon: Icon5, left: 585, top: 25, label: HOW_WE_WORK_DATA_COGNITION_LABELS[3] },
] as const;

const FLOWCHART_W = 1280;
const FLOWCHART_H = 649;
const FLOWCHART_CONTENT_H = 420;

/** Step 1 flowchart: same pattern as StartFlowchart – path SVGs from step1/path, icons from step1, no extra CSS. */
export const Step1Flowchart = () => {
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
      {/* Desktop (lg+): step1 flowchart */}
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
            {/* Connector paths: step1 Path SVGs only, same animation as StartFlowchart */}
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

            {/* Data Cognition Layer box – border only; icons from step1, no wrapper styles */}
            <div
              className="absolute rounded-xl border border-white/9 p-5"
              style={{ left: BOX_LEFT, top: BOX_TOP, width: BOX_W, height: BOX_H }}
            >
            <span className="mb-4 block font-sans text-xs font-normal capitalize text-nav-text">
              Data cognition layer
            </span>
            <div className="relative">
              {middleIconConfigs.map(({ Icon, left, top, label }, index) => (
                <div
                  key={index}
                  className="absolute flex flex-col items-center gap-2"
                  style={{ left, top }}
                >
                  <Icon className="h-[92px] w-[92px] shrink-0" aria-hidden />
                  <span className="max-w-[131px] text-center font-sans text-xs font-normal capitalize leading-4 text-nav-text">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

            {/* Left node – Icon1 only, no wrapper */}
            <div
              className="absolute flex flex-col items-center gap-2"
              style={{ left: 65, top: 159 }}
            >
            <Icon1 className="h-[96px] w-[96px] shrink-0" aria-hidden />
            <span className="max-w-[90px] text-center font-sans text-xs font-normal capitalize leading-4 text-nav-text">
              {HOW_WE_WORK_STEP1_LANDING_LABEL}
            </span>
          </div>

            {/* Right node – Icon6 only, no wrapper */}
            <div
              className="absolute flex flex-col items-center gap-2"
              style={{ left: FLOWCHART_W - 65 - 90, top: 159 }}
            >
            <Icon6 className="h-[96px] w-[96px] shrink-0" aria-hidden />
            <span className="font-sans text-xs font-normal capitalize leading-4 text-nav-text">
              {HOW_WE_WORK_STEP2_LABEL}
            </span>
          </div>
        </div>
        </div>
      </div>

      {/* Mobile (< lg) */}
      <div className="flex w-full justify-center overflow-hidden lg:hidden ">
        <Step1FlowchartMobile />
      </div>
    </div>
  );
};

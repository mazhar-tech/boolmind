'use client';

import { useState, useRef, useCallback } from 'react';
import {
  HOW_WE_WORK,
  HOW_WE_WORK_STEPS,
  HOW_WE_WORK_CARD,
  HOW_WE_WORK_STEP1_CARD,
  HOW_WE_WORK_STEP2_CARD,
  HOW_WE_WORK_STEP3_CARD,
} from '@/constants';
import { StartFlowchart } from './StartFlowchart';
import { Step1Flowchart } from './Step1Flowchart';
import { Step2Flowchart } from './Step2Flowchart';
import { Step3Flowchart } from './Step3Flowchart';

/** Segment control: START, STEP 1, STEP 2, STEP 3 with active state. */
const SegmentControl = ({
  steps,
  activeIndex,
  onSelect,
}: {
  steps: readonly string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) => (
  <div className="grid grid-flow-col auto-cols-fr items-center justify-center gap-2 rounded-xl border border-tabs-divider bg-[rgba(5,6,26,0.4)] p-2 ">
    {steps.map((step, index) => {
      const isActive = activeIndex === index;
      return (
        <div key={step} className="flex flex-row items-center w-full">
          {index > 0 && (
            <span className="h-6 w-px shrink-0 border-l border-tabs-divider" aria-hidden />
          )}
          <button
            type="button"
            onClick={() => onSelect(index)}
            className={`flex items-center justify-center rounded-md xl:px-6 lg:px-4  px-3 lg:py-4 py-2 font-tags xl:text-lg md:text-sm text-xs font-medium uppercase tracking-[1px] transition-colors ${isActive
              ? 'bg-linear-to-br from-[#161734] to-[#080925] text-brand shadow-[0_0_16.66px_#000008]'
              : 'text-nav-muted hover:text-gray-50'
              }`}
          >
            {step}
          </button>
        </div>
      );
    })}
  </div>
);

/** How we work section: header (tag, title, description) + card with segment control and flowchart. */
export const HowWeWorkSection = (props: { className?: string }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState<{ xPx: number; yPx: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const latestPosRef = useRef<{ xPx: number; yPx: number } | null>(null);
  const className = props.className ?? '';

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const xPx = e.clientX - rect.left;
    const yPx = e.clientY - rect.top;
    latestPosRef.current = { xPx, yPx };
    if (rafIdRef.current !== null) return;
    rafIdRef.current = requestAnimationFrame(() => {
      if (latestPosRef.current) setCursorPos({ ...latestPosRef.current });
      rafIdRef.current = null;
    });
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    latestPosRef.current = null;
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    setCursorPos(null);
  }, []);

  return (
    <section
      className={`relative flex flex-col items-center justify-center overflow-hidden px-4 py-10 lg:px-[80px] md:gap-6 md:py-14 ${className}`.trim()}
      aria-labelledby="how-we-work-title"
    >
      {/* Background */}
      <div className="absolute inset-0 " aria-hidden />

      {/* Title + Description */}
      <div className="relative z-0 flex max-w-[700px] flex-col items-center gap-4">
        <span className="font-tags text-center text-sm font-medium uppercase tracking-[1px] text-brand">
          {HOW_WE_WORK.tag}
        </span>
        <div className="flex flex-col items-center gap-2.5">
          <h2
            id="how-we-work-title"
            className="font-title text-center text-[32px] font-medium capitalize leading-[38px] text-gray-50 xl:text-[60px] xl:leading-[72px]"
          >
            {HOW_WE_WORK.title}
          </h2>
          <p className="max-w-[700px] text-center font-sans xl:text-lg text-base font-light leading-[26px] text-nav-text lg:mb-5 mb-10">
            {HOW_WE_WORK.description}
          </p>
        </div>
      </div>

      {/* Card: How we work / Start — Fill Block 1 (Dark Blue) + ellipses */}
      <div
        ref={cardRef}
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
        className="relative z-0 w-full flex-none overflow-hidden rounded-3xl border border-tabs-divider/60 bg-[#05061A]/50 "
      >
        {/* Ellipse Blue */}
        <div
          className="absolute left-[-2.99%] right-[74.19%] top-[46.73%] bottom-[30.04%] rounded-full bg-[rgba(0,116,205,0.8)] blur-[200px] transform-[matrix(-0.79,0.62,-0.7,-0.71,0,0)] pointer-events-none"
          aria-hidden
        />
        {/* Ellipse Orange — follows cursor via transform (GPU-friendly, smooth) */}
        <div
          className="absolute left-0 top-0 size-[min(40%,320px)] rounded-full bg-[rgba(255,91,53,0.8)] blur-[175px] pointer-events-none will-change-transform"
          style={{
            ...(cursorPos
              ? {
                transform: `translate(${cursorPos.xPx}px, ${cursorPos.yPx}px) translate(-50%, -50%) matrix(0.29, -0.96, 0.97, 0.23, 0, 0)`,
                transition: 'transform 0.12s ease-out',
              }
              : {
                transform: 'translate(12%, 20%) translate(-50%, -50%) matrix(0.29, -0.96, 0.97, 0.23, 0, 0)',
                transition: 'transform 0.35s ease-out',
              }),
          }}
          aria-hidden
        />
        <div className="relative z-10 flex flex-col gap-6 p-4 md:p-6">
          {/* Card header: title + description (left), segment control (right) */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-3.5">
              <h3 className="font-title text-[32px] font-medium capitalize leading-[38px] text-gray-50">
                {activeStepIndex === 0
                  ? HOW_WE_WORK_CARD.title
                  : activeStepIndex === 1
                    ? HOW_WE_WORK_STEP1_CARD.title
                    : activeStepIndex === 2
                      ? HOW_WE_WORK_STEP2_CARD.title
                      : HOW_WE_WORK_STEP3_CARD.title}
              </h3>
              <p className="lg:max-w-[357px] max-w-[300px] font-sans lg:text-base text-sm font-light leading-[26px] text-nav-muted">
                {activeStepIndex === 0
                  ? HOW_WE_WORK_CARD.description
                  : activeStepIndex === 1
                    ? HOW_WE_WORK_STEP1_CARD.description
                    : activeStepIndex === 2
                      ? HOW_WE_WORK_STEP2_CARD.description
                      : HOW_WE_WORK_STEP3_CARD.description}
              </p>
            </div>
            <SegmentControl
              steps={HOW_WE_WORK_STEPS}
              activeIndex={activeStepIndex}
              onSelect={setActiveStepIndex}
            />
          </div>

          {/* Flowchart area: scales to fit; Start mobile keeps 30px bottom (14px in flowchart + 16px pb). */}
          {activeStepIndex === 0 && (
            <div className="w-full shrink-0 min-w-0 pb-4 lg:pb-0">
              <StartFlowchart />
            </div>
          )}
          {activeStepIndex === 1 && (
            <div className="w-full shrink-0 min-w-0">
              <Step1Flowchart />
            </div>
          )}
          {activeStepIndex === 2 && (
            <div className="w-full shrink-0 min-w-0">
              <Step2Flowchart />
            </div>
          )}
          {activeStepIndex === 3 && (
            <div className="w-full shrink-0 min-w-0">
              <Step3Flowchart />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

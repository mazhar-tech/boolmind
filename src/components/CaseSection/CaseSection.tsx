'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  TABS_ITEMS,
  CASE_DATA_BY_TAB,
  CASE_SCHEME_ORDER_BY_TAB,
  type SchemeCardVariant,
} from '@/constants';
import { useCaseSectionCycle } from '@/hooks/animations';
import { CaseTitle } from './CaseTitle';
import { CaseDescriptionItem } from './CaseDescriptionItem';
import { SchemeCard2 } from './SchemeCard2';
import { SchemeCard3 } from './SchemeCard3';
import { SchemeCard } from './SchemeCard';
import { SchemeCardBanking } from './SchemeCardBanking';
import { SchemeCardSalesCRM } from './SchemeCardSalesCRM';
import { SchemeCardTelecom } from './SchemeCardTelecom';
import { SchemeCardInsurance } from './SchemeCardInsurance';

const CASE_ITEM_HEIGHT_PX = 170;
const SCHEME_CARD_WIDTH_PX = 475;
const SCHEME_CARD_HEIGHT_PX = 540;
const SCHEME_VIEWPORT_WIDTH_PX = 700;
const SCHEME_CARD_GAP_PX = 40;
/** Up to lg: one card (mobile style). xl and above: big screen with peek (Tailwind xl = 1280px). */
const DESKTOP_SCHEME_BREAKPOINT_PX = 1280;
const CARD_STEP_PX = SCHEME_CARD_WIDTH_PX + SCHEME_CARD_GAP_PX;

/** X-offset: below xl = one card scaled; xl+ = center active with adjacent peek */
const getTranslateX = (position: number, viewportWidth: number) => {
  if (viewportWidth < DESKTOP_SCHEME_BREAKPOINT_PX) {
    return -position * CARD_STEP_PX;
  }
  return (
    SCHEME_VIEWPORT_WIDTH_PX / 2 -
    SCHEME_CARD_WIDTH_PX / 2 -
    position * CARD_STEP_PX
  );
};

/** Y-offset for each step (centered view with partial above/below) */
const getTranslateY = (position: number) => {
  const half = CASE_ITEM_HEIGHT_PX / 2;
  return Math.max(0, position * CASE_ITEM_HEIGHT_PX - half);
};

const SCHEME_CARD_MAP: Record<
  SchemeCardVariant,
  React.ComponentType<{ cycleKey?: number; cycleDurationMs?: number }>
> = {
  case1: SchemeCard,
  case2: SchemeCard2,
  case3: SchemeCard3,
  banking: SchemeCardBanking,
  salesCrm: SchemeCardSalesCRM,
  telecom: SchemeCardTelecom,
  insurance: SchemeCardInsurance,
};

/** Case section: problem statement, descriptions, and scheme flowchart. Content and cards vary by active tab. */
export const CaseSection = (props: { activeTab?: string }) => {
  const activeTab = props.activeTab ?? TABS_ITEMS[0];
  const caseData =
    CASE_DATA_BY_TAB[activeTab] ?? CASE_DATA_BY_TAB[TABS_ITEMS[0]] ?? Object.values(CASE_DATA_BY_TAB)[0];
  const schemeOrder = CASE_SCHEME_ORDER_BY_TAB[activeTab] ?? (['case1', 'case2', 'case3'] as const);

  if (!caseData) return null;

  const descriptions = caseData.descriptions;
  const itemCount = descriptions.length;

  const {
    position,
    noTransition,
    handleTransitionEnd,
    cycleDurationMs,
  } = useCaseSectionCycle({ itemCount, activeTab });

  const [viewportWidth, setViewportWidth] = useState(700);
  const [schemeViewportWidth, setSchemeViewportWidth] = useState(475);
  const schemeViewportRef = useRef<HTMLDivElement>(null);

  const isMobileViewport = viewportWidth < DESKTOP_SCHEME_BREAKPOINT_PX;

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useLayoutEffect(() => {
    const el = schemeViewportRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0]?.contentRect ?? { width: 475 };
      setSchemeViewportWidth(width);
    });
    observer.observe(el);
    setSchemeViewportWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  const translateY = getTranslateY(position);
  const mobileScale =
    isMobileViewport && schemeViewportWidth > 0
      ? Math.min(1, schemeViewportWidth / SCHEME_CARD_WIDTH_PX)
      : 1;
  const scaledHeightPx = SCHEME_CARD_HEIGHT_PX * mobileScale;
  const scaledCardWidthPx = SCHEME_CARD_WIDTH_PX * mobileScale;
  const centerOffsetPx =
    isMobileViewport && schemeViewportWidth > scaledCardWidthPx
      ? (schemeViewportWidth - scaledCardWidthPx) / 2
      : 0;
  const translateX =
    isMobileViewport
      ? -position * CARD_STEP_PX * mobileScale + centerOffsetPx
      : getTranslateX(position, viewportWidth);

  const displayedItems = [...descriptions, ...descriptions];

  const schemeCards = schemeOrder.map((variant, index) => {
    const Card = SCHEME_CARD_MAP[variant];
    return (
      <div
        key={`${activeTab}-${variant}-${index}`}
        className={`shrink-0 transition-all duration-500 ${index === position ? '' : 'opacity-80 blur-md'
          }`}
      >
        <Card cycleKey={position} cycleDurationMs={cycleDurationMs} />
      </div>
    );
  });

  return (
    <section className="relative isolate min-h-[700px]  w-full overflow-hidden border-b border-tabs-divider bg-[#05061A]">
      <div
        className="absolute xl:left-[-3%] left-0 xl:top-[60%]  top-0 h-[23%] xl:w-[23%] w-[15%] rounded-full bg-[rgba(0,116,205,0.8)] blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute right-[-3%] xl:top-[60%] xl:hidden top-0 h-[23%] w-[23%] rounded-full bg-[rgba(255,91,53,0.8)] blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute left-[-1%] top-[10%] h-[41%] hidden xl:block w-[23%] rounded-full bg-[rgba(255,91,53,0.8)] blur-[175px]"
        aria-hidden
      />

      <div className="2xl:container 2xl:mx-auto relative grid grid-cols-1 gap-6 xl:pt-20 pt-10 pb-10 px-4 lg:grid-cols-[1fr_auto] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-6 xl:pl-20">
        <div className="min-w-0 lg:row-span-1">
          <CaseTitle
            tag={caseData.tag}
            title={caseData.title}
            readMoreLabel={caseData.readMoreLabel}
          />
        </div>
        <div
          ref={schemeViewportRef}
          className="mt-0 w-full min-w-0 shrink-0 overflow-hidden lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-10 lg:h-auto lg:max-w-[430px] xl:max-w-[700px] xl:w-[700px]"
          style={{
            height: isMobileViewport ? scaledHeightPx : undefined,
            minHeight: isMobileViewport ? scaledHeightPx : undefined,
            maskImage: isMobileViewport
              ? 'none'
              : 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: isMobileViewport
              ? 'none'
              : 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div
            className={`flex shrink-0 ease-in-out gap-10 ${noTransition ? '' : 'transition-transform duration-800'}`}
            style={{
              transform: isMobileViewport
                ? `translateX(${translateX}px) scale(${mobileScale})`
                : `translateX(${translateX}px)`,
              transformOrigin: '0 0',
            }}
          >
            {schemeCards}
          </div>
        </div>
        <div
          className="min-w-0 overflow-hidden lg:col-start-1 lg:row-start-2"
          style={{ height: 2 * CASE_ITEM_HEIGHT_PX + 'px' }}
          aria-hidden
        >
          <div
            className={`flex flex-col ease-in-out ${noTransition ? '' : 'transition-transform duration-500'}`}
            style={{ transform: `translateY(-${translateY}px)` }}
            onTransitionEnd={() => handleTransitionEnd(position)}
          >
            {displayedItems.map((item, index) => (
              <div
                key={`${item.step}-${activeTab}-${index}`}
                className="shrink-0"
                style={{ minHeight: CASE_ITEM_HEIGHT_PX + 'px' }}
              >
                <CaseDescriptionItem
                  step={item.step}
                  title={item.title}
                  description={item.description}
                  active={index === position}
                  showDivider
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

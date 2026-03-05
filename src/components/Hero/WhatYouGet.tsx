import { WHAT_YOU_GET } from '@/constants';

/** What You Get flow section. */
export const WhatYouGet = () => (
  <div className="flex flex-col gap-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
    <div className="flex flex-wrap justify-center gap-6">
      {WHAT_YOU_GET.steps.map(step => (
        <div
          key={step}
          className="flex flex-col items-center gap-2 text-center"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded bg-white/10 text-white/80" />
          <span className="text-xs text-nav-text">{step}</span>
        </div>
      ))}
    </div>
    <h3 className="text-center font-medium text-white">{WHAT_YOU_GET.title}</h3>
    <div className="flex justify-center gap-4">
      <div className="h-8 w-8 rounded bg-white/10" />
      <div className="h-8 w-8 rounded bg-white/10" />
    </div>
    <p className="text-center text-sm leading-relaxed text-nav-text">
      {WHAT_YOU_GET.conclusion}
    </p>
  </div>
);

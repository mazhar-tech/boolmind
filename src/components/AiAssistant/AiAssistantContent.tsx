import * as React from 'react';
import { Hero } from '@/components/Hero/Hero';
import { AiAssistantTitle } from '@/constants';
import { useRouter } from '@/libs/I18nNavigation';
import { CloseIcon, MicIcon } from './Icons';

const SUGGESTIONS = [
  'Fix Inconsistent Source Schemas',
  'Deduplicate Entity IDs Across Datasets',
  'Standardize Multi-Provider Transaction Feeds',
  'Detect Fraud-Like Data Anomalies',
];

export const AiAssistantContent: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#000008]">
      {/* Base Layer: Hero Section */}
      <div className="relative">
        <Hero hideAiButton={true} />
      </div>

      {/* Overlay Layer: AI Assistant UI (Bottom 50%) */}
      <div className="absolute top-1 right-0 bottom-0 left-0 z-50 flex flex-col items-center justify-start bg-[#05061A]/10 backdrop-blur-[13px] md:top-[40%]">
        {/* Content Container */}
        <div className="relative mt-10 flex w-full max-w-[702px] flex-col items-center gap-8 px-4">
          <div className="mt-16 flex items-center text-center md:hidden ">
            <h1
              id="hero-title"
              className="font-title text-4xl leading-tight font-medium text-white md:text-5xl xl:text-[60px]"
            >
              {AiAssistantTitle.main}
              {' '}
              <br />

            </h1>

          </div>
          {/* Input Field */}
          <div className="ai-input-gradient relative flex h-16 w-full items-center rounded-full px-6 backdrop-blur-[100px] transition-all">
            <input
              type="text"
              placeholder="Ask any questions"
              className="h-full w-full bg-transparent font-sans text-lg font-light text-white outline-none placeholder:text-[#7A7994] "
            />
            <button className="ml-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/5">
              <MicIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Suggestion Chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SUGGESTIONS.map(suggestion => (
              <button
                key={suggestion}
                className="rounded-full border border-[#202044] bg-[#0B0D34]/40 px-4 py-2 font-sans text-sm text-[#A4A2C4] capitalize backdrop-blur-[100px] transition-all hover:border-brand/50 hover:text-white"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Close Button at Bottom */}
        <button
          onClick={handleClose}
          className="absolute bottom-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#202044] bg-[#0B0D34]/40 text-[#A4A2C4] transition-all hover:border-white/20 hover:text-white"
          aria-label="Back to previous page"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

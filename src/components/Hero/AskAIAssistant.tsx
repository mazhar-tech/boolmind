import { ASK_AI_LABEL } from '@/constants';

/** Central AI assistant block with glow effect. */
export const AskAIAssistant = () => (
  <div className="flex flex-col items-center gap-4">
    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand/40 via-purple-500/30 to-blue-500/40 shadow-[0_0_60px_rgba(255,91,53,0.15)]">
      <span className="font-tags text-2xl font-semibold text-white">l5</span>
    </div>
    <p className="text-sm font-medium text-white">{ASK_AI_LABEL}</p>
  </div>
);

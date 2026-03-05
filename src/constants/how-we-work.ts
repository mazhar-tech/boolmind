/** How we work section content */

export const HOW_WE_WORK = {
  tag: 'About',
  title: 'How we work',
  description:
    'BoolMind AI is a composable set of building blocks that plug into your stack, align to your domain and data, and ship solutions with measurable impact.',
} as const;

/** Segment steps for the flowchart card (START = index 0) */
export const HOW_WE_WORK_STEPS = ['Start', 'Step 1', 'Step 2', 'Step 3'] as const;

/** Card header when step is Start */
export const HOW_WE_WORK_CARD = {
  title: 'Start',
  description:
    'Figma ipsum component variant main layer. Pen undo bullet rotate draft.',
} as const;

/** RAW data source labels (2x2 grid) */
export const HOW_WE_WORK_RAW_SOURCES = [
  'Healthcare',
  'Banking',
  'CRM and SaaS',
  'Files and reports',
] as const;

/** Raw integrated data landing label */
export const HOW_WE_WORK_LANDING_LABEL = 'Ingestion & Profiling' as const;

/** LLM without data cleaning step labels (horizontal) */
export const HOW_WE_WORK_LLM_STEPS = [
  'Prompt to LLM',
  'Data processing',
  'Result',
] as const;

/** Output step label */
export const HOW_WE_WORK_OUTPUT_LABEL = 'Step 1' as const;

/** Card header when step is Step 1 */
export const HOW_WE_WORK_STEP1_CARD = {
  title: 'Step 1',
  description:
    'Figma ipsum component variant main layer. Pen undo bullet rotate draft.',
} as const;

/** Data cognition layer (Step 1) – four step labels */
export const HOW_WE_WORK_DATA_COGNITION_LABELS = [
  'Ingest, catalogue and profile data from all systems',
  'Infer schemas, discover domains and resolve entities',
  'Clean and standardise data',
  'Output data',
] as const;

/** Raw integrated data landing label (reused in Step 1) */
export const HOW_WE_WORK_STEP1_LANDING_LABEL = 'Raw integrated data landing' as const;

/** Step 2 label (output of Step 1 flowchart) */
export const HOW_WE_WORK_STEP2_LABEL = 'Step 2' as const;

/** Card header when step is Step 2 */
export const HOW_WE_WORK_STEP2_CARD = {
  title: 'Step 2',
  description:
    'Figma ipsum component variant main layer. Pen undo bullet rotate draft.',
} as const;

/** Intelligence layer (Step 2) – two step labels */
export const HOW_WE_WORK_INTELLIGENCE_LABELS = [
  'Build domain models and signals',
  'Materialise indexes and feature stores',
] as const;

/** Same prompt to LLM label (Step 2 flowchart) */
export const HOW_WE_WORK_SAME_PROMPT_LABEL = 'Same prompt to LLM' as const;

/** Step 3 label (Step 2 flowchart output) */
export const HOW_WE_WORK_STEP3_LABEL = 'Step 3' as const;

/** Step 1 label (used as input in Step 2 flowchart) */
export const HOW_WE_WORK_STEP1_LABEL = 'Step 1' as const;

/** Card header when step is Step 3 */
export const HOW_WE_WORK_STEP3_CARD = {
  title: 'Step 3',
  description:
    'Figma ipsum component variant main layer. Pen undo bullet rotate draft.',
} as const;

/** Reasoning layer (Step 3) – three step labels (mobile: retrieval, LLM, unified). */
export const HOW_WE_WORK_REASONING_LABELS = [
  'Retrieval and grounding over clean data',
  'LLM reasoning with guardrails',
  'Unified data structure',
] as const;

/** Result label (Step 3 flowchart output) */
export const HOW_WE_WORK_RESULT_LABEL =
  'Result: correct and auditable answer' as const;

/** Step 3 mobile result example bullets (placeholder copy). */
export const HOW_WE_WORK_RESULT_EXAMPLE_BULLETS = [
  '12,384 active diabetic patients treated in 2024',
  '7.4 percent 30 day readmission, breakdown by hospital site and confidence explanation',
] as const;

/** Step 2 label (used as input in Step 3 flowchart) */
export const HOW_WE_WORK_STEP2_INPUT_LABEL = 'Step 2' as const;

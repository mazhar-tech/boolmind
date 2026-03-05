/** Case section dummy data */

export const CASE_TAG = '// PROBLEM' as const;
export const CASE_BAR_TAG = '// CASE' as const;

export const CASE_BAR_TITLE = 'Transforming Data into Insightful AI Solutions' as const;

export const CASE_OPTIONS = [
  { index: 1, label: 'Banking', title: 'Noisy Transactions And Conflicting Seller Data' },
  { index: 2, label: 'Sales CRM', title: 'Scattered Leads And Duplicate Contacts Prevent Accurate Pipeline And Revenue Forecasting' },
  { index: 3, label: 'Telecom', title: 'Network And Customer Data Silos Block End-To-End Service Assurance And Personalised Offers' },
  { index: 4, label: 'Insurance', title: 'Fragmented Policy And Claims Data Prevent Accurate Risk Modelling And Fast Claims Handling' },
] as const;

export const CASE_TITLE =
  'Fragmented Data And Inconsistent Patient IDs Across Clinical Systems Prevent A Reliable "Patient 360" View And Safe AI Implementation.' as const;

export const CASE_READ_MORE = 'Read More' as const;

export const CASE_DESCRIPTIONS = [
  {
    step: '01',
    title: 'Data Fragmentation',
    description:
      'How we used small AI agents plus rules to monitor, clean and reconcile multi-source enterprise data in near real time.',
    active: false,
  },
  {
    step: '02',
    title: 'AI Matching & Patient Entity Resolution',
    description:
      'Using insights from Step 1, we build an AI-driven matching pipeline that combines deterministic IDs with ML models to create Golden Patient IDs, unifying encounters, labs, imaging, and medications for each patient.',
    active: true,
  },
  {
    step: '03',
    title: 'Implementation, Governance & Clinical AI',
    description:
      'We roll out PatientEntityID across your warehouse and tools, exposing governed patient views with lineage so reports, risk models and clinical copilots all run on the same trusted Patient 360.',
    active: false,
  },
] as const;

export const SCHEME_NODES = [
  { label: 'Patient Rows From All Systems', active: false },
  { label: 'Standardise Names, Addresses, DOB, IDs', active: false },
  { label: 'ML&Transformer-Based Match Scoring', active: false },
  { label: 'Blocking And Candidate Pair Generation', active: false },
  { label: 'Cluster Into Real Patients', active: false },
  { label: 'Assign GoldenPatientID', active: true },
] as const;

/** Case description step shape for list items */
export type CaseDescriptionStep = {
  step: string;
  title: string;
  description: string;
  active?: boolean;
};

/** Case block data: tag, title, read more label, and step descriptions */
export type CaseDataByTab = {
  tag: string;
  title: string;
  readMoreLabel: string;
  descriptions: readonly CaseDescriptionStep[];
};

/** Scheme card variant key (maps to SchemeCard, SchemeCard2, SchemeCard3, SchemeCardBanking, SchemeCardSalesCRM, SchemeCardTelecom, SchemeCardInsurance) */
export type SchemeCardVariant = 'case1' | 'case2' | 'case3' | 'banking' | 'salesCrm' | 'telecom' | 'insurance';

/** Case content and scheme card order per industry tab */
export const CASE_DATA_BY_TAB: Record<string, CaseDataByTab> = {
  Healthcare: {
    tag: CASE_TAG,
    title: CASE_TITLE,
    readMoreLabel: CASE_READ_MORE,
    descriptions: CASE_DESCRIPTIONS,
  },
  Banking: {
    tag: '// PROBLEM',
    title:
      'Noisy transaction data and unreliable spend categories make analytics, risk insights, and AI explanations hard to trust.',
    readMoreLabel: CASE_READ_MORE,
    descriptions: [
      {
        step: '01',
        title: 'Transaction Discovery & Profiling',
        description:
          'We ingest data from your core banking, card processors, and merchant feeds into a unified transaction lake. By profiling merchant strings, MCCs, channels, and regions, we expose gaps, anomalies, and where AI delivers the most value.',
        active: false,
      },
      {
        step: '02',
        title: 'Domain Discovery & Spend Categorisation',
        description:
          'We use embeddings and clustering across merchant data, MCCs, and context to uncover true spend domains. ML and LLM-assisted classifiers then assign clean categories, subcategories, and risk tags—delivering a bank-specific, stable, and explainable taxonomy.',
        active: true,
      },
      // {
      //   step: '03',
      //   title: 'Governance and rollout',
      //   description:
      //     'Governed Golden IDs are exposed to analytics and ML so risk and compliance run on trusted data.',
      //   active: false,
      // },
    ],
  },
  'Sales CRM': {
    tag: '// PROBLEM',
    title:
      'Multiple CRMs after M&A create fragmented accounts, contacts, and opportunities—leaving reports inconsistent and sales AI without a single source of truth.',
    readMoreLabel: CASE_READ_MORE,
    descriptions: [
      {
        step: '01',
        title: 'CRM Inventory & Schema Inference',
        description:
          'We connect to every CRM you run—Salesforce, HubSpot, on-prem, and custom SQL. By inferring object models, relationships, and field semantics, we build a unified view of Accounts, Contacts, Opportunities, and Activities.',
        active: false,
      },
      {
        step: '02',
        title: 'Account & Contact Entity Resolution',
        description:
          'We apply ML-based entity resolution and business rules to unify Accounts and Contacts across CRMs. Company domains, names, emails, and phone numbers become GlobalAccount and GlobalContact IDs—creating a single, canonical view ready for forecasting, territory planning, and AI copilots.',
        active: true,
      },
      // {
      //   step: '03',
      //   title: 'AI and automation',
      //   description:
      //     'Copilots and automation use the same governed data for consistent recommendations.',
      //   active: false,
      // },
    ],
  },
  Telecom: {
    tag: '// PROBLEM',
    title:
      'Disconnected BSS/OSS stacks fragment subscriber, device, usage, and ticket data—blocking a true Customer 360 and reliable churn, NPS, and network-care AI.',
    readMoreLabel: CASE_READ_MORE,
    descriptions: [
      {
        step: '01',
        title: 'Subscriber & Network Data Discovery',
        description:
          'We connect to CRM/BSS, billing, CDR/usage, and trouble-ticketing systems. By profiling subscriber, SIM, device, and location fields, we reveal identifier quality, coverage, and where each piece of customer and network data lives.',
        active: false,
      },
      {
        step: '02',
        title: 'Customer & Service Entity Resolution',
        description:
          'We unify subscribers, SIMs, devices, and service contracts into GoldenCustomer and ServiceInstance IDs. ML models link usage, billing, and tickets—even when identifiers drift—delivering a consistent Customer 360 for care, retention, and cross-sell AI.',
        active: true,
      },
      // {
      //   step: '03',
      //   title: 'Governance and APIs',
      //   description:
      //     'Governed datasets are exposed to assurance and marketing tools via APIs.',
      //   active: false,
      // },
    ],
  },
  Insurance: {
    tag: '// PROBLEM',
    title:
      'Policy admin, broker files and claims systems don’t line up. You can’t see exposure and loss consistently, and AI models work off incomplete or duplicated histories.',
    readMoreLabel: CASE_READ_MORE,
    descriptions: [
      {
        step: '01',
        title: 'Policy, Claim & Party Discovery',
        description:
          'We connect to policy admin systems, claims platforms, and broker feeds. By profiling policies, parties, and financials, we surface coverage, limits, loss structures—and where policy and claim truth lives today.',
        active: false,
      },
      {
        step: '02',
        title: 'Entity Resolution Across Policies, Parties and Claims',
        description:
          'We resolve parties, policies, and claims into linked entities using ML and business rules. Duplicate parties are merged, policies are grouped, and claims are attached to the correct coverage—creating GoldenParty, PolicyMaster, and ClaimMaster views for pricing, reserving, and fraud analytics.',
        active: true,
      },
      // {
      //   step: '03',
      //   title: 'Compliance and rollout',
      //   description:
      //     'Governed data is rolled out to underwriting and claims systems with full lineage.',
      //   active: false,
      // },
    ],
  },
};

/** Order of scheme card variants (case1, case2, case3, banking) per tab for different visuals per industry */
export const CASE_SCHEME_ORDER_BY_TAB: Record<string, readonly [SchemeCardVariant, SchemeCardVariant, SchemeCardVariant]> = {
  Healthcare: ['case1', 'case2', 'case3'],
  Banking: ['banking', 'banking', 'banking'],
  'Sales CRM': ['salesCrm', 'salesCrm', 'salesCrm'],
  Telecom: ['telecom', 'telecom', 'telecom'],
  Insurance: ['insurance', 'insurance', 'insurance'],
};

import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  // Files to exclude from Knip analysis
  ignore: [
    '.storybook/**/*',
    'checkly.config.ts',
    'src/libs/Env.ts', // Loaded for validation in next.config; Env export not referenced
    'src/libs/I18n.ts',
    'src/libs/I18nNavigation.ts', // Link re-exported for future use when adding pages
    'src/types/I18n.ts',
    'src/utils/Helpers.ts',
    'tests/**/*.ts',
  ],
  // Dependencies to ignore during analysis
  ignoreDependencies: [
    '@commitlint/types',
    'conventional-changelog-conventionalcommits',
    'vite',
  ],
  // Binaries to ignore during analysis
  ignoreBinaries: [
    'production', // False positive raised with dotenv-cli
  ],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;

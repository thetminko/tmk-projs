const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const defaultTwCfg = require('../../libs/shared/ui/tailwind.config');

const { content: _content, ...defaultCfg } = defaultTwCfg;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,views,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, '../../libs/shared/ui/src/**/*.{ts,tsx,html}')
  ],
  ...defaultCfg
};

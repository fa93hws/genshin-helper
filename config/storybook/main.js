const path = require('path');

module.exports = {
  stories: ['../../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal(config) {
    config.resolve.alias = {
      '@styles': path.resolve(__dirname, '..', '..', 'src', 'styles'),
      '@ui': path.resolve(__dirname, '..', '..', 'src', 'ui'),
      '@pages': path.resolve(__dirname, '..', '..', 'src', 'pages'),
    };
    return config;
  },
};

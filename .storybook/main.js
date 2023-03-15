const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: '@storybook/react',
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        esbuildOptions: {
          define: {
            global: 'globalThis',
          },
        },
      },
      plugins: [
        require('@vanilla-extract/vite-plugin').vanillaExtractPlugin(),
        require('vite-tsconfig-paths').default(),
      ],
      build: {
        rollupOptions: {
          external: ['global'],
        },
      },
    });
  },
};

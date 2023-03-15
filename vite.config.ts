/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'node:path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsConfigPaths(), react(), dts({ include: ['src/'] }), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup-tests.ts',
  },
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'vanilla-extract-lib-poc',
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'tslib'],
      output: {
        globals: {
          react: 'React',
        },
      },
      treeshake: 'smallest',
    },
  },
});

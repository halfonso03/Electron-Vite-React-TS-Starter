import { defineConfig } from 'vite';
import pkg from './package.json'; // Ensure "resolveJsonModule" is true in tsconfig
import path, { resolve } from 'path';
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main/main.ts',
      formats: ['cjs'],
      fileName: () => 'main.js', // Force the filename to main.js
    },

    rollupOptions: {
      // Use the imported pkg object instead of require
      external: [
        'electron',
        'better-sqlite3',
        ...Object.keys(pkg.dependencies || {}),
      ],
    },
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "src/common"),
    }
  },

});
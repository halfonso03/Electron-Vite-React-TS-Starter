import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/preload/index.ts',
      formats: ['cjs'],
      fileName: () => 'index.js',
    },
    outDir: '.vite/preload',
    rollupOptions: {
      external: ['electron', 'better-sqlite3'],
    },
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "src/common"),

    }
  },
});
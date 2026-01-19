import { defineConfig } from 'vite';
import pkg from './package.json'; // Ensure "resolveJsonModule" is true in tsconfig
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
        ...Object.keys(pkg.dependencies || {}),
      ],
    },
  },
});
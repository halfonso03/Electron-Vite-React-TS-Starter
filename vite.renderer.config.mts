import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths'; // Import the plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tsconfigPaths(), tailwindcss(),],
    base: './', // CRITICAL: Ensures assets are loaded relative to index.html
    build: {
        outDir: '../../.vite/renderer/main_window', // Adjust to match your Forge config
    },
    root: path.resolve(__dirname, 'src/renderer')
});



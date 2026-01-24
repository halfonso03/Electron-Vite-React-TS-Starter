import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths'; // Import the plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {


    const env = loadEnv(mode, path.resolve(__dirname), 'VITE_');

    console.log('env', env.VITE_RESULTS_PAGE_SIZE);


    return {
        define: {
            'process.env': env // Helps some legacy plugins
        },
        plugins: [react(), tsconfigPaths(), tailwindcss(),],
        base: './', // CRITICAL: Ensures assets are loaded relative to index.html
        build: {
            outDir: '../../.vite/renderer/main_window', // Adjust to match your Forge config
        },
        root: path.resolve(__dirname, 'src/renderer'),
        resolve: {
            alias: {
                "@common": path.resolve(__dirname, "src/common"),

            }
        },
        envDir: resolve(__dirname),
    }
});



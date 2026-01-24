/// <referencetypes=”vite/client” />/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ANALYTICS_KEY: string;
    // add more as needed...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
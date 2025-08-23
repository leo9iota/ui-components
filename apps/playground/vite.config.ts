import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [react(), vue(), svelte()],
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                react: resolve(__dirname, 'react.html'),
                vue: resolve(__dirname, 'vue.html'),
                svelte: resolve(__dirname, 'svelte.html'),
            },
        },
    },
    server: {
        port: 5173,
    },
    resolve: {
        alias: {
            // Optional quality-of-life aliases for local packages
            '@acme/ui-react': resolve(__dirname, '../../packages/ui-react/src'),
            '@acme/ui-vue': resolve(__dirname, '../../packages/ui-vue/src'),
            '@acme/ui-svelte': resolve(__dirname, '../../packages/ui-svelte/src'),
        },
    },
});

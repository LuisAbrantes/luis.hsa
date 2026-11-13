import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
    // React Router framework mode: routes live in src/routes.ts and every page
    // is pre-rendered to static HTML at build time (see react-router.config.ts).
    plugins: [reactRouter()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    define: {
        __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10))
    },
    server: {
        host: '0.0.0.0', // Permite que o servidor seja acessado por outros dispositivos na rede
        port: 5173 // Porta onde o servidor vai rodar
    }
});

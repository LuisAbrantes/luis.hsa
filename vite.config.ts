import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // Load environment variables based on current mode
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // Use '/' for Vercel (root deployment), '/luis.hsa' for GitHub Pages (subfolder)
        base: env.VITE_BASE_PATH || '/',
        server: {
            host: '0.0.0.0', // Permite que o servidor seja acessado por outros dispositivos na rede
            port: 5173 // Porta onde o servidor vai rodar
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ['react', 'react-dom', 'react-router-dom'],
                        animations: ['framer-motion'],
                        icons: ['lucide-react']
                    }
                }
            }
        }
    };
});

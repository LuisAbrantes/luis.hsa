import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/luis.hsa',
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
});

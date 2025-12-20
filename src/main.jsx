import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/luis.hsa/sw.js')
            .then(() => {
                // Service Worker registered successfully
            })
            .catch(() => {
                // Service Worker registration failed
            });
    });
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/luis.hsa">
            <App />
        </BrowserRouter>
    </StrictMode>
);

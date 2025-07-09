import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import NavBar from './components/NavBar';

// Lazy load components for better performance
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const LoadingSpinner = () => (
    <div className="min-h-screen flex items-center justify-center bg-dark-primary">
        <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 shadow-glass relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-glass opacity-20"></div>
            <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-30"></div>

            <div className="relative z-10 flex items-center space-x-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dark-accent"></div>
                <span className="text-dark-text font-medium">Loading...</span>
            </div>
        </div>
    </div>
);

function App() {
    // Performance monitoring removed for production safety

    return (
        <div className="min-h-screen bg-dark-primary bg-liquid-bg text-dark-text relative overflow-hidden">
            {/* Liquid Glass Background Effect */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-glass rounded-full animate-liquid-morph blur-3xl opacity-30"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-glass rounded-full animate-liquid-morph blur-3xl opacity-20"
                    style={{ animationDelay: '4s' }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-glass rounded-full animate-liquid-morph blur-3xl opacity-15"
                    style={{ animationDelay: '2s' }}
                ></div>
            </div>

            <div className="relative z-10">
                <NavBar />
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route
                            path="/achievements"
                            element={<Certificates />}
                        />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}

export default App;

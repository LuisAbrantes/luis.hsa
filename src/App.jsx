import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/achievements" element={<Certificates />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

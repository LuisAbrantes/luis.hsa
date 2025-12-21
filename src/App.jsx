import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-dark-primary text-dark-text">
            {!isHomePage && <NavBar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;

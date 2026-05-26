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
        // Scroll page to top on route change
        window.scrollTo(0, 0);

        // Dynamic Title and Description Mapping by Route
        const metaMap = {
            '/': {
                title: 'Luis Henrique Abrantes | Software Engineer & AI Developer',
                description: 'Portfolio de Luis Henrique Abrantes. Engenheiro de Software e Desenvolvedor de IA Aplicada graduando no IFSP, com presença no UC Berkeley AI Hackathon e UPenn PennApps.'
            },
            '/about': {
                title: 'Sobre Mim | Luis Henrique Abrantes',
                description: 'Conheça a história profissional, formação acadêmica no IFSP e objetivos de carreira de Luis Henrique Abrantes.'
            },
            '/projects': {
                title: 'Projetos | Luis Henrique Abrantes',
                description: 'Explore o portfólio de projetos técnicos de Luis Henrique Abrantes, incluindo o TutorTime e soluções premiadas em IA.'
            },
            '/achievements': {
                title: 'Conquistas | Luis Henrique Abrantes',
                description: 'Certificados, conquistas acadêmicas e histórico em hackathons globais de tecnologia (UC Berkeley e UPenn).'
            },
            '/contact': {
                title: 'Contato | Luis Henrique Abrantes',
                description: 'Entre em contato com Luis Henrique Abrantes para parcerias, oportunidades profissionais e projetos inovadores.'
            }
        };

        const currentMeta = metaMap[location.pathname] || metaMap['/'];

        // Update Document Title
        document.title = currentMeta.title;

        // Update Meta Description tag defensivelty
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', currentMeta.description);
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

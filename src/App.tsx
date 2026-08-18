import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import NavBar from '@/components/layout/NavBar';
import PageTransition from '@/components/layout/PageTransition';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Certificates from '@/pages/Certificates';
import Contact from '@/pages/Contact';

interface PageMeta {
    title: string;
    description: string;
}

// Per-route document title + meta description.
const metaMap: Record<string, PageMeta> = {
    '/': {
        title: 'Luis Henrique Abrantes | Software Engineer & AI Developer',
        description:
            'Portfolio de Luis Henrique Abrantes. Engenheiro de Software e Desenvolvedor de IA Aplicada graduando no IFSP, com presença no UC Berkeley AI Hackathon e UPenn PennApps.'
    },
    '/about': {
        title: 'Sobre Mim | Luis Henrique Abrantes',
        description:
            'Conheça a história profissional, formação acadêmica no IFSP e objetivos de carreira de Luis Henrique Abrantes.'
    },
    '/projects': {
        title: 'Projetos | Luis Henrique Abrantes',
        description:
            'Explore o portfólio de projetos técnicos de Luis Henrique Abrantes, incluindo o TutorTime e soluções premiadas em IA.'
    },
    '/achievements': {
        title: 'Conquistas | Luis Henrique Abrantes',
        description:
            'Certificados, conquistas acadêmicas e histórico em hackathons globais de tecnologia (UC Berkeley e UPenn).'
    },
    '/contact': {
        title: 'Contato | Luis Henrique Abrantes',
        description:
            'Entre em contato com Luis Henrique Abrantes para parcerias, oportunidades profissionais e projetos inovadores.'
    }
};

function App() {
    const location = useLocation();

    useEffect(() => {
        // Scroll page to top on route change.
        window.scrollTo(0, 0);

        // Update document title and meta description for the current route.
        const currentMeta = metaMap[location.pathname] ?? metaMap['/'];
        document.title = currentMeta.title;

        let metaDescription =
            document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', currentMeta.description);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-dark-primary text-dark-text">
            <NavBar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <Home />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <PageTransition>
                                <About />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <PageTransition>
                                <Projects />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/achievements"
                        element={
                            <PageTransition>
                                <Certificates />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <PageTransition>
                                <Contact />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <PageTransition>
                                <Home />
                            </PageTransition>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;

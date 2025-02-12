import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  const [selectedSection, setSelectedSection] = useState('Home');

  const renderSection = () => {
    switch (selectedSection) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Certificates':
      case 'Academic Achievements':
        return <Certificates />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-primary text-dark-text">
      <NavBar setSelectedSection={setSelectedSection} />
      {renderSection()}
    </div>
  );
}

export default App;

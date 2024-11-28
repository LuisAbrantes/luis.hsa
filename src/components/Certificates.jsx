import { useState } from 'react';
import PropTypes from 'prop-types';

const Certificates = () => {
    const [filter, setFilter] = useState('all');
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const certificates = [
        {
            id: 1,
            title: 'Introduction to Artificial Intelligence',
            institution:
                'Federal Institute of Science and Technology of São Paulo - IFSP',
            date: '2024',
            type: 'courses',
            badge: 'https://img.shields.io/badge/-Courses-orange',
            hours: 40
        },
        {
            id: 2,
            title: 'Introduction to Databases and SQL',
            institution:
                'Federal Institute of Science and Technology of São Paulo - IFSP',
            date: '2023',
            type: 'courses',
            badge: 'https://img.shields.io/badge/-Courses-orange',
            hours: 30
        },
        {
            id: 3,
            title: 'Physics on Vacation - FIFE',
            institution: 'University of Campinas - UNICAMP',
            date: '2024',
            type: 'extracurricular',
            badge: 'https://img.shields.io/badge/-Extracurricular-blue',
            hours: 47
        },
        {
            id: 4,
            title: 'Linux Network Administration Fundamentals',
            institution:
                'Federal Institute of Science and Technology of São Paulo - IFSP',
            date: '2022',
            type: 'courses',
            badge: 'https://img.shields.io/badge/-Courses-orange',
            hours: 25
        },
        {
            id: 5,
            title: 'Gran Prix SENAI Hackathon',
            institution: 'National Service for Industrial Learning - SENAI',
            date: '2023',
            type: 'hackathons',
            badge: 'https://img.shields.io/badge/-Hackathons-purple',
            hours: 30
        },
        {
            id: 6,
            title: 'PennApps XXV - Hackathon',
            institution: 'University of Pennsylvania - Penn Engineering',
            date: '2022',
            type: 'hackathons',
            badge: 'https://img.shields.io/badge/-Hackathons-purple',
            hours: 40
        },
        {
            id: 7,
            title: 'National English Language Olympiad - OBLI - Bronze Medal 1',
            institution: 'Seleta Educação',
            date: '2024.1',
            type: 'honors',
            badge: 'https://img.shields.io/badge/-Honors-gold',
            hours: 40
        },
        {
            id: 8,
            title: 'National English Language Olympiad - OBLI - Bronze Medal 2',
            institution: 'Seleta Educação',
            date: '2024.2',
            type: 'honors',
            badge: 'https://img.shields.io/badge/-Honors-gold',
            hours: 40
        },
        {
            id: 9,
            title: 'National English Language Olympiad - OBLI - Bronze Medal 2',
            institution: 'Seleta Educação',
            date: '2024.2',
            type: 'honors',
            badge: 'https://img.shields.io/badge/-Honors-gold',
            hours: 40
        },
        {
            id: 10,
            title: 'Coorganized the 1st National English Language Olympiad - OBLI in my Campus',
            institution:
                'Institute of Federal Education, Science and Technology of São Paulo',
            date: '2024',
            type: 'extracurricular',
            badge: 'https://img.shields.io/badge/-Extracurricular-blue',
            hours: 15
        },
        {
            id: 11,
            title: 'The Dream School Ambassador',
            institution: 'The Dream School',
            date: '2024',
            type: 'extracurricular',
            badge: 'https://img.shields.io/badge/-Extracurricular-blue',
            hours: 15
        },
        {
            id: 12,
            title: 'International Relations Consultancy (ARINTER) of IFSP Ambassador',
            institution: 'ARINTER IFSP',
            date: '2024 2025',
            type: 'extracurricular',
            badge: 'https://img.shields.io/badge/-Extracurricular-blue',
            hours: 15
        },
        {
            id: 13,
            title: 'Representative of the organizing committee for computer events at IFSP',
            institution: 'IFSP',
            date: '2024 2025',
            type: 'extracurricular',
            badge: 'https://img.shields.io/badge/-Extracurricular-blue',
            hours: 15
        },
        {
            id: 14,
            title: 'Overview of Azure by a Microsoft MVP',
            institution: 'IFSP',
            date: '2022',
            type: 'events',
            badge: 'https://img.shields.io/badge/-Events-green',
            hours: 1.5
        },
        {
            id: 15,
            title: 'An experience in Brazilian Brazilian Sign Language - LIBRAS',
            institution: 'IFSP',
            date: '2022',
            type: 'events',
            badge: 'https://img.shields.io/badge/-Events-green',
            hours: 2
        },
        {
            id: 16,
            title: '3rd out of 4 stages in the Brazilian National History Olympiad - ONHB',
            institution: 'University of Campinas - UNICAMP',
            date: '2023',
            type: 'honors',
            badge: 'https://img.shields.io/badge/-Honors-gold',
            hours: 24
        },
        {
            id: 17,
            title: 'Universal Design for Learning',
            institution: 'IFSP',
            date: '2022',
            type: 'events',
            badge: 'https://img.shields.io/badge/-Events-green',
            hours: 2
        },
        {
            id: 18,
            title: 'Sumo Robot Battle with Arduino',
            institution: 'IFSP',
            date: '2022',
            type: 'events',
            badge: 'https://img.shields.io/badge/-Events-green',
            hours: 1.5
        },
        {
            id: 19,
            title: `Saint John's Summer-Academy Online - "The Odyssey" Session`,
            institution: "Saint John's College",
            date: '2024',
            type: 'courses',
            badge: 'https://img.shields.io/badge/-Courses-orange',
            hours: 8
        }
    ];

    const handleViewCertificate = certificate => {
        setSelectedCertificate(certificate);
        setShowModal(true);
    };

    const handleOpenPDF = pdfPath => {
        if (pdfPath) {
            window.open(pdfPath, '_blank');
        }
    };

    const CertificateModal = ({ certificate, onClose }) => {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
                <div className="bg-dark-secondary rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    {/* Modal Header */}
                    <div className="p-6 border-b border-dark-hover">
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-bold text-dark-text">
                                {certificate.title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-dark-muted hover:text-dark-text"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 text-dark-text">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">
                                    Institution:
                                </span>
                                <span>{certificate.institution}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">
                                    Completion Date:
                                </span>
                                <span>{certificate.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">Type:</span>
                                <span>{certificate.type}</span>
                                <img
                                    src={certificate.badge}
                                    alt="badge"
                                    className="h-6"
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">
                                    Course Duration:
                                </span>
                                <span>{certificate.hours} hours</span>
                            </div>
                        </div>

                        {/* PDF Button */}
                        {certificate.pdfPath && (
                            <div className="mt-6">
                                <button
                                    onClick={() =>
                                        handleOpenPDF(certificate.pdfPath)
                                    }
                                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span>Open Certificate PDF</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    CertificateModal.propTypes = {
        certificate: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            institution: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            badge: PropTypes.string.isRequired,
            pdfPath: PropTypes.string,
            hours: PropTypes.number.isRequired
        }).isRequired,
        onClose: PropTypes.func.isRequired
    };

    return (
        <div className="min-h-screen bg-dark-primary py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Add GitHub Repository Notice */}
                <div className="bg-dark-secondary border-l-4 border-dark-accent p-4 mb-8 rounded-md">
                    <div className="flex items-center">
                        <svg
                            className="h-6 w-6 text-blue-500 mr-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <div>
                            <p className="text-blue-700 font-medium">
                                All certificates can be validated in my GitHub
                                repository:{' '}
                                <a
                                    href="https://github.com/LuisAbrantes/Certificates"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-800"
                                >
                                    github.com/LuisAbrantes/Certificates
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-dark-text text-center mb-4">
                    Academic Achievements
                </h1>
                <p className="text-xl text-dark-muted text-center mb-12">
                    My professional qualifications and certifications
                </p>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 
                            ${
                                filter === 'all'
                                    ? 'bg-dark-accent text-dark-text'
                                    : 'bg-dark-secondary text-dark-muted hover:bg-dark-hover'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('courses')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 
                            ${
                                filter === 'courses'
                                    ? 'bg-dark-accent text-dark-text'
                                    : 'bg-dark-secondary text-dark-muted hover:bg-dark-hover'
                            }`}
                    >
                        Courses
                    </button>
                    <button
                        onClick={() => setFilter('extracurricular')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 
                            ${
                                filter === 'extracurricular'
                                    ? 'bg-dark-accent text-dark-text'
                                    : 'bg-dark-secondary text-dark-muted hover:bg-dark-hover'
                            }`}
                    >
                        Extracurricular
                    </button>
                    <button
                        onClick={() => setFilter('honors')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 
                            ${
                                filter === 'honors'
                                    ? 'bg-dark-accent text-dark-text'
                                    : 'bg-dark-secondary text-dark-muted hover:bg-dark-hover'
                            }`}
                    >
                        Honors
                    </button>
                    <button
                        onClick={() => setFilter('events')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 
                            ${
                                filter === 'events'
                                    ? 'bg-dark-accent text-dark-text'
                                    : 'bg-dark-secondary text-dark-muted hover:bg-dark-hover'
                            }`}
                    >
                        Events
                    </button>
                    <button
                        onClick={() => setFilter('hackathons')}
                        className={`px-6 py-2 rounded-full transition-all duration-300 
                            ${
                                filter === 'hackathons'
                                    ? 'bg-dark-accent text-dark-text'
                                    : 'bg-dark-secondary text-dark-muted hover:bg-dark-hover'
                            }`}
                    >
                        Hackathons
                    </button>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates
                        .filter(
                            cert => filter === 'all' || cert.type === filter
                        )
                        .map(certificate => (
                            <div
                                key={certificate.id}
                                className="bg-dark-secondary rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-semibold text-dark-text">
                                            {certificate.title}
                                        </h3>
                                        <img
                                            src={certificate.badge}
                                            alt="badge"
                                            className="h-6"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-dark-muted">
                                            <span className="font-medium">
                                                Institution:
                                            </span>{' '}
                                            {certificate.institution}
                                        </p>
                                        <p className="text-dark-muted">
                                            <span className="font-medium">
                                                Completion:
                                            </span>{' '}
                                            {certificate.date}
                                        </p>
                                        <p className="text-dark-muted">
                                            <span className="font-medium">
                                                Duration:
                                            </span>{' '}
                                            {certificate.hours} hours
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            onClick={() =>
                                                handleViewCertificate(
                                                    certificate
                                                )
                                            }
                                            className="w-full bg-indigo-50 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors duration-300"
                                        >
                                            View Certificate
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedCertificate && (
                <CertificateModal
                    certificate={selectedCertificate}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default Certificates;

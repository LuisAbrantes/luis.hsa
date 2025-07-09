import { useState, useMemo, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import {
    BookOpen, // for courses
    Users, // for extracurricular
    Award, // for honors
    Calendar, // for events
    Code2 // for hackathons
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import CertificateCard from './CertificateCard';

// Debounce hook
const useDebounce = (callback, delay) => {
    const [debounceTimer, setDebounceTimer] = useState(null);

    const debouncedCallback = useCallback(
        (...args) => {
            if (debounceTimer) {
                clearTimeout(debounceTimer);
            }

            const newTimer = setTimeout(() => {
                callback(...args);
            }, delay);

            setDebounceTimer(newTimer);
        },
        [callback, delay, debounceTimer]
    );

    return debouncedCallback;
};

// Move the certificates array outside the Certificates component
const certificatesData = [
    {
        id: 1,
        title: 'PennApps XXV - Hackathon',
        institution: 'University of Pennsylvania - Penn Engineering',
        date: '2024',
        type: 'hackathons',
        hours: 40,
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/000/041/datas/full_width.png' //
    },
    {
        id: 2,
        title: 'Introduction to Artificial Intelligence',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2024',
        type: 'courses',
        hours: 80,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtStunAJeFhpcASYAIasKgfy7pYAnZJDgzQ&s'
    },
    {
        id: 3,
        title: 'Physics on Vacation - FIFE',
        institution: 'University of Campinas - UNICAMP',
        date: '2024',
        type: 'courses',
        hours: 47,
        image: 'https://sites.ifi.unicamp.br/fife/files/2024/05/fisica-ferias.png'
    },
    {
        id: 4,
        title: 'Programming Every Day',
        institution: 'GitHub',
        date: '2025',
        type: 'extracurricular',
        description:
            'Committed to continuous learning through daily programming activities on GitHub, contributing to open-source projects and developing personal initiatives. This consistent engagement has allowed me to explore various technologies, solve real-world challenges, and grow as a programmer through collaboration with other developers.',
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*TJvbdqOLs0vMhxQp'
    },
    {
        id: 5,
        title: 'GitTogether SJC Community Member',
        institution: 'GitHub Community',
        date: '2024 2025',
        type: 'extracurricular',
        description:
            'Played an active role in the GitHub SJC Community, leading the ideation and implementation of programming projects and participating in workshops. Currently, I am preparing to expand this impact by hosting events for my school, combining community resources and partnerships with prominent education companies such as Alura and FIAP to inspire the next generation of programmers.',
        image: 'https://media.licdn.com/dms/image/v2/D4D0BAQGL5HVhqpRoFQ/img-crop_100/img-crop_100/0/1734304088175?e=1744243200&v=beta&t=Um4sC-DTQ_3AFoCyGy8sQRz4-HD7MiRsCyxp2wY04bg'
    },
    {
        id: 6,
        title: 'Linux Network Administration Fundamentals',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2022',
        type: 'courses',
        hours: 60,
        image: 'https://t2.tudocdn.net/606607?w=1920'
    },
    {
        id: 7,
        title: 'Grand Prix SENAI Hackathon',
        institution: 'National Service for Industrial Learning - SENAI',
        date: '2024',
        type: 'hackathons',
        hours: 40,
        image: 'https://static.portaldaindustria.com.br/media/filer_public/15/bf/15bf07e0-a084-403d-bcc9-b206240d90f7/logo.png'
    },
    {
        id: 8,
        title: 'Introduction to Databases and SQL',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2023',
        type: 'courses',
        hours: 36,
        image: 'https://accutivesecurity.com/wp-content/uploads/2024/06/Data-Masking-for-MySQL-background.svg'
    },
    {
        id: 9,
        title: 'National English Language Olympiad - OBLI - Bronze Medal 1',
        institution: 'Seleta Educação',
        date: '2024.1',
        type: 'honors',
        hours: 3,
        image: 'https://static.wixstatic.com/media/833218_84d0f153678d41deabfac2a21f1c9d04~mv2.png/v1/fill/w_380,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png'
    },
    {
        id: 10,
        title: 'National English Language Olympiad - OBLI - Bronze Medal 2',
        institution: 'Seleta Educação',
        date: '2024.2',
        type: 'honors',
        hours: 3,
        image: 'https://static.wixstatic.com/media/833218_84d0f153678d41deabfac2a21f1c9d04~mv2.png/v1/fill/w_380,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png'
    },
    {
        id: 11,
        title: 'Introduction to Network Architecture and Protocols',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2022',
        type: 'courses',
        hours: 100,
        image: 'https://t.ctcdn.com.br/C3HzEgvL7HZKHPHr0UhHH7cYwvc=/i658265.png'
    },
    {
        id: 12,
        title: 'Coorganized the 1st National English Language Olympiad - OBLI in my Campus',
        institution:
            'Institute of Federal Education, Science and Technology of São Paulo',
        date: '2024',
        type: 'extracurricular',
        description:
            'Discovered and independently organized the OBLI event at IFSP, engaging over 300 community members, including students, teachers, and staff. Secured partnerships with institutions like Kumon and Yázigi to reward medalists and participants. Coordinated logistics, supported students with technical issues during the competition, and shared study methods. Over two years, this initiative celebrated approximately 50 medalists, significantly promoting academic excellence in the community.',
        image: 'https://images.inc.com/uploaded_files/image/1920x1080/shutterstock_500593225_354026.jpg'
    },
    {
        id: 13,
        title: 'The Dream School Ambassador',
        institution: 'The Dream School',
        date: '2024',
        type: 'extracurricular',
        description:
            'Selected as a representative of the students for The Dream School, where I actively participate in strategic discussions shaping the future of the largest exchange preparation institution in Latin America. Through these efforts, I contribute to improving classes and preparation systems, helping to recruit new students and ambassadors. This collective work has led to remarkable growth in enrollment, ambassador engagement, and overall institutional impact.',
        image: 'https://thedream.com.br/wp-content/uploads/2020/11/Logo_TheDreamSchool.png'
    },
    {
        id: 14,
        title: 'International Relations Consultancy (ARINTER) of IFSP Ambassador',
        institution: 'ARINTER IFSP',
        date: '2024 2025',
        type: 'extracurricular',
        description:
            'As an ARINTER ambassador, I work to promote fair and transparent international academic exchanges, focusing on opportunities for low-income students. Current projects include organizing roundtables with alumni to share experiences and another roundtable with international students, facilitating international video calls for English practice.',
        image: 'https://itp.ifsp.edu.br/images/CTI/ARINTER.png'
    },
    {
        id: 15,
        title: 'Representative of the organizing committee for computer events at IFSP',
        institution: 'IFSP',
        date: '2024 2025',
        type: 'extracurricular',
        description:
            'Led the organization of programming events at IFSP, such as a marathon with 55 participants where I managed logistics, resolved technical issues, and secured sponsorships from companies like GitHub, Cebras, and Tune.AI. Inspired students to explore programming creatively, addressing complaints about monotonous classroom experiences. Currently, I am conceptualizing a week-long hackathon modeled on PennApps, aiming to create an engaging and impactful learning experience for the campus community.',
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*TJvbdqOLs0vMhxQp'
    },
    {
        id: 16,
        title: 'Overview of Azure by a Microsoft MVP',
        institution: 'IFSP',
        date: '2022',
        type: 'events',
        hours: 1.5,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png'
    },
    {
        id: 17,
        title: 'An experience in Brazilian Sign Language - LIBRAS',
        institution: 'IFSP',
        date: '2022',
        type: 'events',
        hours: 2,
        image: 'https://pbs.twimg.com/media/EimmmXqX0AE0G0z.jpg'
    },
    {
        id: 18,
        title: '3rd out of 4 stages in the Brazilian National History Olympiad - ONHB',
        institution: 'University of Campinas - UNICAMP',
        date: '2023',
        type: 'honors',
        hours: 24,
        image: 'https://styles.redditmedia.com/t5_2scpm/styles/communityIcon_72kalishkfl81.png'
    },
    {
        id: 19,
        title: 'Universal Design for Learning',
        institution: 'IFSP',
        date: '2022',
        type: 'events',
        hours: 2,
        image: 'https://education.nsw.gov.au/content/dam/main-education/teaching-and-learning/learning-from-home/teachers/images/UDL.png/jcr:content/renditions/cq5dam.web.1280.1280.png'
    },
    {
        id: 20,
        title: 'Sumo Robot Battle with Arduino',
        institution: 'IFSP',
        date: '2022',
        type: 'events',
        hours: 1.5,
        image: 'https://mcuoneclipse.com/wp-content/uploads/2013/09/sumo-robot-fight.png'
    },
    {
        id: 21,
        title: `Saint John's Summer-Academy Online - "The Odyssey" Session`,
        institution: "Saint John's College",
        date: '2024',
        type: 'courses',
        hours: 8,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/St._John%27s_College.svg/1200px-St._John%27s_College.svg.png'
    },
    {
        id: 22,
        title: 'Understanding Copilots - Workshop with Microsoft MVPs and GitHub Star',
        institution: 'GitHub Community - GitTogether SJC',
        date: '2024',
        type: 'events',
        hours: 3,
        image: 'https://github.blog/wp-content/uploads/2024/10/copilot-square.png'
    },
    {
        id: 23,
        title: 'IFSP Entrance Exam - Top 10 Performance',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2021',
        type: 'honors',
        hours: 4,
        description:
            'Achieved a position between 6th and 10th place among prepared 181 candidates, being one of 40 approved students. This result demonstrated strong academic preparation and competitive performance in the entrance examination.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2cuEoKZydmlYcod_8jkSEqpD86gnRuWVgA&s'
    },
    {
        id: 24,
        title: 'OBI - Olimpiada Brasileira de Informatica - 2 out of 3 stages',
        institution: 'University of Campinas - UNICAMP',
        date: '2024',
        type: 'honors',
        hours: 8,
        description:
            "Advanced to the second phase of the Brazilian Olympiad of Informatics (OBI), the most prestigious and difficult programming competition in Latin America, organized by UNICAMP. This highly competitive event evaluates programming skills, logical reasoning, and problem-solving abilities across three challenging phases. My achievement was featured in a news article by IFSP Jacareí campus, highlighting the accomplishment.\n\n🏆 Competition Performance (2 out of 3 stages completed):\n• First Phase: Scored 180/400 points (exactly meeting the 180-point cut-off)\n• Second Phase: Scored 300/400 points (cut-off was 400 points)\n\nThis performance demonstrates strong programming fundamentals and problem-solving skills in Latin America's most challenging and prestigious technical competition.",
        image: 'https://jcr.ifsp.edu.br/images/Image_2024-08-15_at_144156.jpeg',
        imagePosition: 'object-bottom',
        newsArticle:
            'https://jcr.ifsp.edu.br/index.php/ultimas-noticias/2381-alunos-do-curso-tecnico-em-informatica-do-campus-jacarei-sao-aprovados-para-a-segunda-fase-da-olimpiada-brasileira-de-informatica'
    },
    {
        id: 25,
        title: 'ONC - Olimpiada Nacional de Ciencias - 2 out of 2 stages',
        institution: 'Ministry of Science, Technology and Innovation (MCTI)',
        date: '2024',
        type: 'honors',
        hours: 8,
        description:
            "Advanced to the second phase of the National Science Olympiad (ONC), the most competitive and prestigious science competition in Brazil, organized by the Federal Government through the Ministry of Science, Technology and Innovation (MCTI). This highly selective competition tests knowledge in various scientific fields including physics, chemistry, and biology across two rigorous phases. My achievement was recognized in a news article published by Instituto Federal de São Paulo - Jacareí campus.\n\n🏆 Competition Performance (2 out of 2 stages completed):\nSuccessfully completed both phases of Brazil's most prestigious science olympiad, demonstrating strong multidisciplinary scientific knowledge and analytical skills.",
        image: 'https://www.ifsp.edu.br/images/2022/10_Outubro/cartaz-onc-2022-noticia.jpg',
        imagePosition: 'object-bottom',
        newsArticle:
            'https://jcr.ifsp.edu.br/index.php/component/content/article/17-ultimas-noticias/2389-alunos-do-campus-jacarei-se-classificam-para-a-2-fase-da-olimpiada-nacional-de-ciencias'
    }
];

// Move the SearchBar outside the Certificates component
const SearchBar = ({ setSearchQuery }) => {
    const [inputValue, setInputValue] = useState('');

    const debouncedSearch = useDebounce(value => {
        setSearchQuery(value);
    }, 300);

    const handleClear = () => {
        setInputValue('');
        setSearchQuery('');
    };

    const handleChange = e => {
        const value = e.target.value;
        setInputValue(value);
        debouncedSearch(value);
    };
    return (
        <div className="w-full max-w-md mx-auto mb-8">
            <div className="relative">
                <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-2xl p-1 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-glass opacity-5"></div>
                    <div className="absolute inset-0 bg-shimmer bg-no-repeat opacity-0 hover:opacity-5 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                        <input
                            type="text"
                            placeholder="Search certificates..."
                            value={inputValue}
                            onChange={handleChange}
                            className="w-full px-4 py-2 pr-12 bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-xl text-dark-text placeholder-dark-muted
                                    focus:border-dark-accent focus:ring-1 focus:ring-dark-accent outline-none transition-all duration-300"
                        />
                        {inputValue && (
                            <button
                                onClick={handleClear}
                                className="absolute right-10 top-2.5 text-dark-muted hover:text-dark-accent transition-colors duration-200"
                                aria-label="Clear search"
                            >
                                <svg
                                    className="h-5 w-5"
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
                        )}
                        <svg
                            className="absolute right-3 top-2.5 h-5 w-5 text-dark-muted pointer-events-none"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Certificates = () => {
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleFilter = useCallback(type => {
        setLoading(true);
        setFilter(type);
        setTimeout(() => setLoading(false), 150);
    }, []);

    const getTypeIcon = useCallback(type => {
        const iconProps = {
            size: 24,
            className: 'text-dark-accent'
        };

        switch (type) {
            case 'courses':
                return <BookOpen {...iconProps} />;
            case 'extracurricular':
                return <Users {...iconProps} />;
            case 'honors':
                return <Award {...iconProps} />;
            case 'events':
                return <Calendar {...iconProps} />;
            case 'hackathons':
                return <Code2 {...iconProps} />;
            default:
                return null;
        }
    }, []);

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
            <AnimatePresence>
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-glass relative overflow-hidden"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                    >
                        {' '}
                        <div className="absolute inset-0 bg-purple-glass opacity-20"></div>
                        <div className="absolute inset-0 bg-shimmer bg-no-repeat opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            {/* Modal Header */}
                            <div className="p-6 border-b border-dark-glassBorder flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-dark-text">
                                    {certificate.title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="text-dark-muted hover:text-dark-text transition-colors duration-200 bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-2"
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

                            {/* Modal Content */}
                            <div className="p-6 text-dark-text space-y-6">
                                {/* Certificate Image */}
                                {certificate.image && (
                                    <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-3xl p-2 shadow-inner-glass">
                                        <OptimizedImage
                                            src={certificate.image}
                                            alt={certificate.title}
                                            className={`w-full h-64 object-cover rounded-2xl ${
                                                certificate.imagePosition || ''
                                            }`}
                                        />
                                    </div>
                                )}

                                {/* Certificate Icon and Type */}
                                <div className="flex items-center space-x-3">
                                    <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-3 shadow-inner-glass">
                                        {getTypeIcon(certificate.type)}
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold capitalize text-dark-accent">
                                            {certificate.type}
                                        </p>
                                    </div>
                                </div>

                                {/* Certificate Details */}
                                <div className="space-y-4">
                                    <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-4 shadow-inner-glass">
                                        <h3 className="font-semibold text-dark-accent mb-2">
                                            Institution:
                                        </h3>
                                        <p>{certificate.institution}</p>
                                    </div>

                                    {certificate.type !== 'extracurricular' && (
                                        <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-4 shadow-inner-glass">
                                            <h3 className="font-semibold text-dark-accent mb-2">
                                                Completion Date:
                                            </h3>
                                            <p>{certificate.date}</p>
                                        </div>
                                    )}

                                    {certificate.hours &&
                                        certificate.type !==
                                            'extracurricular' && (
                                            <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-4 shadow-inner-glass">
                                                <h3 className="font-semibold text-dark-accent mb-2">
                                                    Duration:
                                                </h3>
                                                <p>{certificate.hours} hours</p>
                                            </div>
                                        )}

                                    {certificate.description && (
                                        <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-4 shadow-inner-glass">
                                            <h3 className="font-semibold text-dark-accent mb-2">
                                                Description:
                                            </h3>
                                            <p className="whitespace-pre-line">
                                                {certificate.description}
                                            </p>
                                        </div>
                                    )}

                                    {certificate.newsArticle && (
                                        <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-4 shadow-inner-glass">
                                            <h3 className="font-semibold text-dark-accent mb-2">
                                                Featured In:
                                            </h3>
                                            <a
                                                href={certificate.newsArticle}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-dark-accent hover:text-dark-accentHover underline transition-colors duration-300"
                                            >
                                                Federal Institute of Science and
                                                Technology (IFSP) News Article
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* PDF Button */}
                                {certificate.pdfPath && (
                                    <div className="pt-4">
                                        <button
                                            onClick={() =>
                                                handleOpenPDF(
                                                    certificate.pdfPath
                                                )
                                            }
                                            className="w-full bg-gradient-to-r from-dark-accent to-dark-accentHover text-dark-text py-3 px-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-purple-glow hover:shadow-purple-glow-lg flex items-center justify-center space-x-2"
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
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        );
    };

    CertificateModal.propTypes = {
        certificate: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            institution: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            type: PropTypes.oneOf([
                'courses',
                'extracurricular',
                'honors',
                'events',
                'hackathons'
            ]).isRequired,
            pdfPath: PropTypes.string,
            hours: PropTypes.number,
            description: PropTypes.string,
            imagePosition: PropTypes.string,
            newsArticle: PropTypes.string
        }).isRequired,
        onClose: PropTypes.func.isRequired
    };

    // Enhanced useMemo with filtering and search optimization
    const { categoryCounts, filteredCertificates } = useMemo(() => {
        const counts = certificatesData.reduce((acc, cert) => {
            acc[cert.type] = (acc[cert.type] || 0) + 1;
            return acc;
        }, {});

        let filtered = certificatesData;

        // Apply type filter first (more efficient)
        if (filter !== 'all') {
            filtered = filtered.filter(cert => cert.type === filter);
        }

        // Apply search filter only if searchQuery exists
        if (searchQuery.trim()) {
            const searchTerm = searchQuery.toLowerCase();
            filtered = filtered.filter(
                cert =>
                    cert.title.toLowerCase().includes(searchTerm) ||
                    cert.institution.toLowerCase().includes(searchTerm) ||
                    (cert.description &&
                        cert.description.toLowerCase().includes(searchTerm))
            );
        }

        return {
            categoryCounts: counts,
            filteredCertificates: filtered
        };
    }, [filter, searchQuery]);

    // Memoized Filter button component
    const FilterButton = memo(({ label, isActive, onClick, count }) => (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-2xl transition-all duration-300 flex items-center space-x-2 backdrop-blur-md border shadow-inner-glass hover:scale-105 transform
                ${
                    isActive
                        ? 'bg-dark-glass border-dark-purpleGlassBorder text-dark-accent shadow-purple-glow'
                        : 'bg-dark-glass border-dark-glassBorder text-dark-muted hover:text-dark-text hover:border-dark-purpleGlassBorder'
                }`}
        >
            <span>{label}</span>
            <span className="bg-dark-glass backdrop-blur-sm px-2 py-0.5 rounded-full text-sm border border-dark-glassBorder">
                {count}
            </span>
        </button>
    ));

    FilterButton.displayName = 'FilterButton'; // Enhanced loading skeleton
    const LoadingSkeleton = () => (
        <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-6 shadow-glass animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-glass opacity-5"></div>
            <div className="absolute inset-0 bg-shimmer bg-no-repeat opacity-0"></div>

            <div className="relative z-10">
                <div className="flex justify-between">
                    <div className="h-6 bg-dark-glass backdrop-blur-sm rounded-2xl w-3/4"></div>
                    <div className="h-6 w-6 bg-dark-glass backdrop-blur-sm rounded-full"></div>
                </div>
                <div className="space-y-3 mt-4">
                    <div className="h-4 bg-dark-glass backdrop-blur-sm rounded-2xl w-2/3"></div>
                    <div className="h-4 bg-dark-glass backdrop-blur-sm rounded-2xl w-1/2"></div>
                    <div className="h-4 bg-dark-glass backdrop-blur-sm rounded-2xl w-3/5"></div>
                </div>
                <div className="mt-6">
                    <div className="h-10 bg-dark-glass backdrop-blur-sm rounded-2xl"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-dark-primary py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Liquid background effect */}
            <div className="absolute inset-0 bg-liquid-bg opacity-30"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {' '}
                {/* Updated GitHub Repository Notice */}
                <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-6 mb-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-glass opacity-10"></div>
                    <div className="absolute inset-0 bg-shimmer bg-no-repeat opacity-0 hover:opacity-10 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                            <div className="hidden sm:block">
                                <svg
                                    className="h-6 w-6 text-dark-accent"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-dark-text font-medium text-sm sm:text-base">
                                    <span className="block sm:inline">
                                        All certificates can be validated in my
                                        GitHub repository:
                                    </span>{' '}
                                    <a
                                        href="https://github.com/LuisAbrantes/Certificates"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-dark-accent hover:text-dark-accentHover break-words transition-colors duration-300"
                                    >
                                        <svg
                                            className="h-4 w-4 sm:hidden"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        github.com/LuisAbrantes/Certificates
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>{' '}
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-purple-glass opacity-20"></div>
                        <div className="absolute inset-0 bg-shimmer bg-no-repeat opacity-0 hover:opacity-10 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-dark-accent to-dark-accentHover bg-clip-text text-transparent">
                                Academic Achievements
                            </h1>
                            <p className="text-xl text-dark-muted">
                                My qualifications and certifications
                            </p>
                        </div>
                    </div>
                </div>
                <SearchBar setSearchQuery={setSearchQuery} />
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    <FilterButton
                        label="All"
                        isActive={filter === 'all'}
                        onClick={() => handleFilter('all')}
                        count={certificatesData.length}
                    />
                    <FilterButton
                        label="Courses"
                        isActive={filter === 'courses'}
                        onClick={() => handleFilter('courses')}
                        count={categoryCounts.courses || 0}
                    />
                    <FilterButton
                        label="Extracurricular"
                        isActive={filter === 'extracurricular'}
                        onClick={() => handleFilter('extracurricular')}
                        count={categoryCounts.extracurricular || 0}
                    />
                    <FilterButton
                        label="Honors"
                        isActive={filter === 'honors'}
                        onClick={() => handleFilter('honors')}
                        count={categoryCounts.honors || 0}
                    />
                    <FilterButton
                        label="Events"
                        isActive={filter === 'events'}
                        onClick={() => handleFilter('events')}
                        count={categoryCounts.events || 0}
                    />
                    <FilterButton
                        label="Hackathons"
                        isActive={filter === 'hackathons'}
                        onClick={() => handleFilter('hackathons')}
                        count={categoryCounts.hackathons || 0}
                    />
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {loading ? (
                            Array(6)
                                .fill(0)
                                .map((_, i) => <LoadingSkeleton key={i} />)
                        ) : filteredCertificates.length === 0 ? (
                            <motion.div
                                className="col-span-full text-center py-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="text-xl text-dark-muted">
                                    No certificates found matching your criteria
                                </p>
                            </motion.div>
                        ) : (
                            filteredCertificates.map(certificate => (
                                <CertificateCard
                                    key={certificate.id}
                                    certificate={certificate}
                                    onViewCertificate={handleViewCertificate}
                                />
                            ))
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

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

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Award,
    Calendar,
    ExternalLink,
    X,
    BookOpen,
    Users,
    Code2,
    GraduationCap,
    Clock,
    FileText
} from 'lucide-react';

const certificatesData = [
    {
        id: 1,
        title: 'PennApps XXV - Hackathon',
        institution: 'University of Pennsylvania - Penn Engineering',
        date: '2024',
        type: 'hackathons',
        hours: 40,
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/000/041/datas/full_width.png'
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
        title: 'Saint John\'s Summer-Academy Online - "The Odyssey" Session',
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

const CertificateCard = ({ certificate, onClick }) => {
    const getIcon = type => {
        switch (type) {
            case 'courses':
                return <BookOpen size={24} className="text-gray-400" />;
            case 'honors':
                return <Award size={24} className="text-gray-400" />;
            case 'extracurricular':
                return <Users size={24} className="text-gray-400" />;
            case 'events':
                return <Calendar size={24} className="text-gray-400" />;
            case 'hackathons':
                return <Code2 size={24} className="text-gray-400" />;
            default:
                return <GraduationCap size={24} className="text-gray-400" />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            onClick={() => onClick(certificate)}
            className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-gray-600 transition-all duration-300 group h-full flex flex-col"
        >
            <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 p-2 border border-gray-800 group-hover:border-gray-600 transition-colors flex items-center justify-center overflow-hidden">
                    {certificate.image ? (
                        <img
                            src={certificate.image}
                            alt={certificate.institution}
                            className={`w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity ${
                                certificate.imagePosition || ''
                            }`}
                        />
                    ) : (
                        getIcon(certificate.type)
                    )}
                </div>
                <span className="text-xs font-light text-gray-500 border border-gray-800 rounded-full px-3 py-1">
                    {certificate.date}
                </span>
            </div>

            <h3 className="text-lg font-medium text-white mb-1 group-hover:text-gray-200 transition-colors line-clamp-2">
                {certificate.title}
            </h3>
            <p className="text-sm text-gray-400 font-light mb-4 line-clamp-2">
                {certificate.institution}
            </p>

            <div className="mt-auto pt-4 border-t border-gray-800/50 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-light capitalize flex items-center gap-1">
                    {certificate.type === 'courses' && <BookOpen size={12} />}
                    {certificate.type === 'extracurricular' && (
                        <Users size={12} />
                    )}
                    {certificate.type === 'honors' && <Award size={12} />}
                    {certificate.type === 'events' && <Calendar size={12} />}
                    {certificate.type === 'hackathons' && <Code2 size={12} />}
                    {certificate.type}
                </span>
                {certificate.hours && (
                    <span className="text-xs text-gray-500 font-light flex items-center gap-1">
                        <Clock size={12} /> {certificate.hours}h
                    </span>
                )}
            </div>
        </motion.div>
    );
};

const CertificateModal = ({ certificate, onClose }) => {
    const getIcon = type => {
        switch (type) {
            case 'courses':
                return <BookOpen size={32} className="text-gray-400" />;
            case 'honors':
                return <Award size={32} className="text-gray-400" />;
            case 'extracurricular':
                return <Users size={32} className="text-gray-400" />;
            case 'events':
                return <Calendar size={32} className="text-gray-400" />;
            case 'hackathons':
                return <Code2 size={32} className="text-gray-400" />;
            default:
                return <GraduationCap size={32} className="text-gray-400" />;
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-dark-primary border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-4 w-full">
                            <div className="w-16 h-16 rounded-xl bg-white/5 p-3 border border-gray-800 flex items-center justify-center overflow-hidden shrink-0">
                                {certificate.image ? (
                                    <img
                                        src={certificate.image}
                                        alt={certificate.institution}
                                        className={`w-full h-full object-cover ${
                                            certificate.imagePosition || ''
                                        }`}
                                    />
                                ) : (
                                    getIcon(certificate.type)
                                )}
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-light text-white mb-1">
                                    {certificate.title}
                                </h2>
                                <p className="text-gray-400 font-light">
                                    {certificate.institution} •{' '}
                                    {certificate.date}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                                Details
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-dark-secondary/30 border border-gray-800 rounded-xl p-3">
                                    <span className="text-xs text-gray-500 block mb-1">
                                        Type
                                    </span>
                                    <span className="text-white font-light capitalize">
                                        {certificate.type}
                                    </span>
                                </div>
                                {certificate.hours && (
                                    <div className="bg-dark-secondary/30 border border-gray-800 rounded-xl p-3">
                                        <span className="text-xs text-gray-500 block mb-1">
                                            Duration
                                        </span>
                                        <span className="text-white font-light">
                                            {certificate.hours} hours
                                        </span>
                                    </div>
                                )}
                            </div>

                            {certificate.description && (
                                <div className="mt-4">
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                                        Description
                                    </h3>
                                    <p className="text-gray-300 font-light leading-relaxed whitespace-pre-line">
                                        {certificate.description}
                                    </p>
                                </div>
                            )}
                        </div>

                        {(certificate.newsArticle || certificate.pdfPath) && (
                            <div className="pt-6 border-t border-gray-800 flex flex-col gap-3">
                                {certificate.newsArticle && (
                                    <a
                                        href={certificate.newsArticle}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-dark-secondary/30 border border-gray-800 text-white rounded-full font-medium hover:bg-dark-secondary/50 transition-colors w-full justify-center"
                                    >
                                        <ExternalLink size={18} />
                                        Read News Article
                                    </a>
                                )}
                                {certificate.pdfPath && (
                                    <a
                                        href={certificate.pdfPath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors w-full justify-center"
                                    >
                                        <FileText size={18} />
                                        View Certificate PDF
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Certificates = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [filter, setFilter] = useState('all');

    const filteredCertificates = certificatesData.filter(cert => {
        const matchesSearch =
            cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (cert.description &&
                cert.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()));

        const matchesFilter = filter === 'all' || cert.type === filter;

        return matchesSearch && matchesFilter;
    });

    const categories = ['all', ...new Set(certificatesData.map(c => c.type))];

    return (
        <section className="min-h-screen bg-dark-primary pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-light text-white mb-4 tracking-tight">
                        Academic Achievements
                    </h1>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto mb-8">
                        My qualifications, certifications, and extracurricular
                        activities.
                    </p>

                    <div className="relative max-w-md mx-auto mb-8">
                        <input
                            type="text"
                            placeholder="Search achievements..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full bg-transparent border border-gray-800 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-0 transition-colors font-light"
                        />
                        <Search
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                            size={18}
                        />
                    </div>

                    <div className="flex justify-center gap-3 flex-wrap">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-5 py-2 rounded-full text-sm font-light transition-all duration-300 border capitalize ${
                                    filter === category
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCertificates.map(cert => (
                        <CertificateCard
                            key={cert.id}
                            certificate={cert}
                            onClick={setSelectedCertificate}
                        />
                    ))}
                </div>

                {filteredCertificates.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 font-light">
                            No achievements found matching your criteria.
                        </p>
                    </div>
                )}

                {selectedCertificate && (
                    <CertificateModal
                        certificate={selectedCertificate}
                        onClose={() => setSelectedCertificate(null)}
                    />
                )}
            </div>
        </section>
    );
};

export default Certificates;

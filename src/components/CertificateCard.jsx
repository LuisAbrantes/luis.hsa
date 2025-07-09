import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { BookOpen, Users, Award, Calendar, Code2 } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CertificateCard = memo(({ certificate, onViewCertificate }) => {
    const { ref, hasIntersected } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '50px'
    });

    const getTypeIcon = type => {
        const iconProps = { size: 20, className: 'text-dark-accent' };
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
                return <BookOpen {...iconProps} />;
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={
                hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
            className="group bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl shadow-glass hover:shadow-glass-hover transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-[1.02] relative"
            onClick={() => onViewCertificate(certificate)}
        >
            <div className="absolute inset-0 bg-purple-glass opacity-5 group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
                {certificate.image && (
                    <div className="relative overflow-hidden rounded-t-3xl">
                        <OptimizedImage
                            src={certificate.image}
                            alt={certificate.title}
                            className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 ${
                                certificate.imagePosition || ''
                            }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                )}
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-dark-text group-hover:text-dark-accentHover transition-colors duration-300">
                            {certificate.title}
                        </h3>
                        <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-2 shadow-inner-glass">
                            {getTypeIcon(certificate.type)}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-dark-muted">
                            <span className="font-medium">Institution:</span>{' '}
                            {certificate.institution}
                        </p>
                        {certificate.type !== 'extracurricular' && (
                            <p className="text-dark-muted">
                                <span className="font-medium">Completion:</span>{' '}
                                {certificate.date}
                            </p>
                        )}
                        {certificate.type !== 'extracurricular' && (
                            <p className="text-dark-muted">
                                <span className="font-medium">Duration:</span>{' '}
                                {certificate.hours} hours
                            </p>
                        )}
                    </div>
                    <div className="mt-auto pt-6">
                        <button
                            onClick={e => {
                                e.stopPropagation();
                                onViewCertificate(certificate);
                            }}
                            className="w-full bg-gradient-to-r from-dark-accent to-dark-accentHover text-dark-text py-3 px-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-purple-glow hover:shadow-purple-glow-lg"
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

CertificateCard.displayName = 'CertificateCard';

CertificateCard.propTypes = {
    certificate: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        hours: PropTypes.number,
        image: PropTypes.string,
        imagePosition: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
    onViewCertificate: PropTypes.func.isRequired
};

export default CertificateCard;

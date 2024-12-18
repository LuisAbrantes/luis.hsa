import PropTypes from 'prop-types';
import { getTypeIcon } from '../utils/certificateIcons';
import { motion, AnimatePresence } from 'framer-motion';

const CertificateModal = ({ certificate, onClose }) => {
    const handleOpenPDF = (pdfPath) => {
        if (pdfPath) {
            window.open(pdfPath, '_blank');
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-dark-secondary rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                >
                    {/* Modal Header */}
                    <div className="p-6 border-b border-dark-hover flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-dark-text">
                            {certificate.title}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-dark-muted hover:text-dark-text transition-colors duration-200"
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
                        {/* Certificate Icon and Type */}
                        <div className="flex items-center space-x-3">
                            <div className="text-dark-accent">
                                {getTypeIcon(certificate.type)}
                            </div>
                            <div>
                                <p className="text-lg font-semibold capitalize">
                                    {certificate.type}
                                </p>
                            </div>
                        </div>

                        {/* Certificate Details */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Institution:</h3>
                                <p>{certificate.institution}</p>
                            </div>
                            {certificate.type !== 'extracurricular' && (
                                <div>
                                    <h3 className="font-semibold">
                                        Completion Date:
                                    </h3>
                                    <p>{certificate.date}</p>
                                </div>
                            )}
                            {certificate.hours &&
                                certificate.type !== 'extracurricular' && (
                                    <div>
                                        <h3 className="font-semibold">
                                            Duration:
                                        </h3>
                                        <p>{certificate.hours} hours</p>
                                    </div>
                                )}
                            {certificate.description && (
                                <div>
                                    <h3 className="font-semibold">
                                        Description:
                                    </h3>
                                    <p>{certificate.description}</p>
                                </div>
                            )}
                        </div>

                        {/* PDF Button */}
                        {certificate.pdfPath && (
                            <div className="pt-4">
                                <button
                                    onClick={() =>
                                        handleOpenPDF(certificate.pdfPath)
                                    }
                                    className="w-full bg-dark-accent text-white py-3 px-4 rounded-lg hover:bg-dark-accent-hover transition-colors duration-300 flex items-center justify-center space-x-2"
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
        type: PropTypes.oneOf(['courses', 'extracurricular', 'honors', 'events', 'hackathons']).isRequired,
        pdfPath: PropTypes.string,
        hours: PropTypes.number.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};

export default CertificateModal;

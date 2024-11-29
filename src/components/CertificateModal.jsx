import PropTypes from 'prop-types';
import { getTypeIcon } from '../utils/certificateIcons';

const CertificateModal = ({ certificate, onClose }) => {
    const handleOpenPDF = pdfPath => {
        if (pdfPath) {
            window.open(pdfPath, '_blank');
        }
    };

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
                    {/* ...existing modal content... */}
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
        type: PropTypes.oneOf(['courses', 'extracurricular', 'honors', 'events', 'hackathons']).isRequired,
        pdfPath: PropTypes.string,
        hours: PropTypes.number.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};

export default CertificateModal;

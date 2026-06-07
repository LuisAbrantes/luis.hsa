import { ExternalLink, FileText, X } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { getCertificateIcon } from '@/lib/certificateIcons';
import type { Certificate } from '@/types';

interface CertificateModalProps {
    certificate: Certificate | null;
    onClose: () => void;
}

const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => (
    <Modal
        isOpen={certificate !== null}
        onClose={onClose}
        className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        labelledBy="certificate-title"
    >
        {certificate && (
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
                                getCertificateIcon(certificate.type, 32)
                            )}
                        </div>
                        <div className="flex-1">
                            <h2
                                id="certificate-title"
                                className="text-2xl font-light text-white mb-1"
                            >
                                {certificate.title}
                            </h2>
                            <p className="text-gray-400 font-light">
                                {certificate.institution} • {certificate.date}
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
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
        )}
    </Modal>
);

export default CertificateModal;

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { getCertificateIcon } from '@/lib/certificateIcons';
import { fadeInUp } from '@/lib/motion';
import type { Certificate } from '@/types';

interface CertificateCardProps {
    certificate: Certificate;
    onSelect: (certificate: Certificate) => void;
}

const CertificateCard = ({ certificate, onSelect }: CertificateCardProps) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{ y: -5 }}
        onClick={() => onSelect(certificate)}
        className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-gray-600 transition-all duration-300 group h-full flex flex-col"
    >
        <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/5 p-2 border border-gray-800 group-hover:border-gray-600 transition-colors flex items-center justify-center overflow-hidden">
                {certificate.image ? (
                    <img
                        src={certificate.image}
                        alt={certificate.institution}
                        loading="lazy"
                        className={`w-full h-full object-contain p-0.5 opacity-90 group-hover:opacity-100 transition-opacity ${
                            certificate.imagePosition || ''
                        }`}
                    />
                ) : (
                    getCertificateIcon(certificate.type)
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
                {getCertificateIcon(certificate.type, 12)}
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

export default CertificateCard;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import CertificateCard from '@/components/certificates/CertificateCard';
import CertificateModal from '@/components/certificates/CertificateModal';
import { certificates } from '@/data/certificates';
import { staggerContainer, revealViewport } from '@/lib/motion';
import type { Certificate } from '@/types';

const categories = ['all', ...new Set(certificates.map(c => c.type))];

const Certificates = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCertificate, setSelectedCertificate] =
        useState<Certificate | null>(null);
    const [filter, setFilter] = useState('all');

    const filteredCertificates = certificates.filter(cert => {
        const term = searchTerm.toLowerCase();
        const matchesSearch =
            cert.title.toLowerCase().includes(term) ||
            cert.institution.toLowerCase().includes(term) ||
            (cert.description?.toLowerCase().includes(term) ?? false);

        const matchesFilter = filter === 'all' || cert.type === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <section className="min-h-screen bg-black pt-40 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
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
                                type="button"
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

                <motion.div
                    key={`${filter}-${searchTerm}`}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                >
                    {filteredCertificates.map(cert => (
                        <CertificateCard
                            key={cert.id}
                            certificate={cert}
                            onSelect={setSelectedCertificate}
                        />
                    ))}
                </motion.div>

                {filteredCertificates.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 font-light">
                            No achievements found matching your criteria.
                        </p>
                    </div>
                )}

                <CertificateModal
                    certificate={selectedCertificate}
                    onClose={() => setSelectedCertificate(null)}
                />
            </div>
        </section>
    );
};

export default Certificates;

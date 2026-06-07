import { BookOpen, Award, Users, Calendar, Code2, GraduationCap } from 'lucide-react';
import type { CertificateType } from '@/types';

/** Returns the lucide icon component for a certificate type. */
export function getCertificateIcon(type: CertificateType, size = 24) {
    const props = { size, className: 'text-gray-400' };
    switch (type) {
        case 'courses':
            return <BookOpen {...props} />;
        case 'honors':
            return <Award {...props} />;
        case 'extracurricular':
            return <Users {...props} />;
        case 'events':
            return <Calendar {...props} />;
        case 'hackathons':
            return <Code2 {...props} />;
        default:
            return <GraduationCap {...props} />;
    }
}

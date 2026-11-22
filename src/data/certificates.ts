import type { Certificate, CertificateGroup } from '@/types';

/**
 * Honors, activities and courses for the /achievements page.
 *
 * Writing rules: state what happened, with the numbers that exist. No
 * superlatives about the organizer, and nothing a reader could not check.
 */
export const certificates: Certificate[] = [
    // ── Selected honors ────────────────────────────────────────────────
    {
        id: 'google-student-ambassador',
        title: 'Google Student Ambassador',
        organization: 'Google',
        date: '2026',
        group: 'selected',
        logo: '/static/logos/google.svg',
        description:
            'Selected for the 2026 global cohort. The role is campus lead and liaison between Google and the student community, promoting AI tools through developer workshops and student initiatives.'
    },
    {
        id: 'uc-berkeley-ai-hackathon',
        title: 'UC Berkeley AI Hackathon',
        organization: 'Cal Hacks, University of California, Berkeley',
        date: '2025',
        group: 'selected',
        hours: 40,
        logo: '/static/logos/berkeley.svg',
        description:
            'Built GirlTalk AI with an international team of four on the UC Berkeley campus, among more than 1,000 participants over two days.',
        link: { href: '/projects/girltalk-ai', label: 'GirlTalk AI project' }
    },
    {
        id: 'pennapps-xxv',
        title: 'PennApps XXV',
        organization: 'Penn Engineering, University of Pennsylvania',
        date: '2024',
        group: 'selected',
        hours: 60,
        logo: '/static/logos/upenn.svg',
        description:
            'Built SpeakScribe with a team in Philadelphia, among more than 360 participants over three days. It was my first academic trip abroad, paid for with a fundraiser I organized.',
        link: { href: '/projects/speakscribe', label: 'SpeakScribe project' }
    },
    {
        id: 'obi',
        title: 'Brazilian Olympiad in Informatics (OBI), second phase',
        organization: 'Organized by the University of Campinas (UNICAMP)',
        date: '2024',
        group: 'selected',
        logo: '/static/logos/unicamp.png',
        description:
            "Qualified for the second of three phases of Brazil's national programming olympiad.",
        link: {
            href: 'https://jcr.ifsp.edu.br/index.php/ultimas-noticias/2381-alunos-do-curso-tecnico-em-informatica-do-campus-jacarei-sao-aprovados-para-a-segunda-fase-da-olimpiada-brasileira-de-informatica',
            label: 'IFSP news coverage (Portuguese)'
        }
    },
    {
        id: 'unicamp-fife-quantum-computing',
        title: 'Quantum Computing, Física nas Férias (FIFE)',
        organization:
            'Physics of Quantum Devices Lab, Gleb Wataghin Physics Institute, UNICAMP',
        date: '2025',
        group: 'selected',
        hours: 47,
        logo: '/static/logos/unicamp.png',
        description:
            'A 47-hour program on quantum computing fundamentals and superconducting qubits, including Josephson junctions and quantum circuit design. About 5% of applicants were accepted. I had attended the cosmology edition the year before.'
    },
    {
        id: 'obli-gold',
        title: 'National English Language Olympiad (OBLI), gold medal',
        organization: 'Seleta Educação',
        date: '2025',
        group: 'selected',
        description:
            'Gold medal, top 2% nationally. Before that, two bronze medals in the 2024 editions (top 8%).'
    },
    {
        id: 'speaker-hackathons-us-universities',
        title: 'Invited speaker, three times',
        organization: 'JECET Congress and IFSP',
        date: '2024–2025',
        group: 'selected',
        logo: '/static/logos/ifsp.svg',
        description:
            'Gave the talk "Hackathons and the path to American universities" to more than 100 technical and undergraduate students at public schools, including at the JECET Congress. It covers applying to universities abroad, joining international hackathons, and building a public profile on GitHub and LinkedIn.'
    },

    // ── Leadership and community ───────────────────────────────────────
    {
        id: 'ifsp-programming-events',
        title: 'Organizing committee for programming events',
        organization: 'IFSP',
        date: '2024–2025',
        group: 'leadership',
        description:
            'Led the organization of campus programming events, including a marathon with 55 participants: logistics, technical support, and sponsorships from companies including GitHub and Tune.AI.'
    },
    {
        id: 'obli-campus-organizer',
        title: 'Brought the English Olympiad (OBLI) to my campus',
        organization: 'IFSP',
        date: '2024',
        group: 'leadership',
        description:
            'Discovered the olympiad and co-organized its first edition on campus: more than 300 students, teachers and staff took part, and Kumon and Yázigi provided prizes. Over two years, about 50 participants earned medals.'
    },
    {
        id: 'class-leader',
        title: 'Class leader, five school years',
        organization: 'IFSP and my previous school',
        date: '2020–2025',
        group: 'leadership',
        description:
            'Elected by classmates in 2020 and every year from 2022 to 2025, with between 80% and 100% of the vote.'
    },
    {
        id: 'arinter-ambassador',
        title: 'International Relations Office (ARINTER) ambassador',
        organization: 'IFSP',
        date: '2024–2025',
        group: 'leadership',
        description:
            'Work on fair access to international academic exchange for low-income students: roundtables with alumni and international students, and video calls for English practice.'
    },
    {
        id: 'the-dream-school-ambassador',
        title: 'Student ambassador',
        organization: 'The Dream School',
        date: '2024',
        group: 'leadership',
        description:
            'Represented students at a preparation program for studying abroad: joined discussions on its classes and preparation system, and helped recruit students and ambassadors.'
    },
    {
        id: 'gittogether-sjc',
        title: 'GitTogether SJC community member',
        organization: 'GitHub community, São José dos Campos',
        date: '2024–2025',
        group: 'leadership',
        description:
            'Took part in workshops and community programming projects with the local GitHub community.'
    },

    // ── Competitions and exams ─────────────────────────────────────────
    {
        id: 'onc',
        title: 'National Science Olympiad (ONC)',
        organization: 'Ministry of Science, Technology and Innovation (MCTI)',
        date: '2024',
        group: 'competitions',
        description: 'Qualified for the second and final phase.',
        link: {
            href: 'https://jcr.ifsp.edu.br/index.php/component/content/article/17-ultimas-noticias/2389-alunos-do-campus-jacarei-se-classificam-para-a-2-fase-da-olimpiada-nacional-de-ciencias',
            label: 'IFSP news coverage (Portuguese)'
        }
    },
    {
        id: 'senai-grand-prix',
        title: 'Grand Prix SENAI Hackathon',
        organization: 'National Service for Industrial Learning (SENAI)',
        date: '2024',
        group: 'competitions',
        hours: 40
    },
    {
        id: 'onhb',
        title: 'Brazilian National History Olympiad (ONHB)',
        organization: 'Organized by the University of Campinas (UNICAMP)',
        date: '2023',
        group: 'competitions',
        description: 'Reached the third of four phases.'
    },
    {
        id: 'ifsp-entrance-exam',
        title: 'IFSP entrance exam',
        organization: 'IFSP',
        date: '2021',
        group: 'competitions',
        description:
            'Placed between 6th and 10th among 181 candidates for 40 seats.'
    },

    // ── Courses and certificates ───────────────────────────────────────
    {
        id: 'ifsp-intro-ai',
        title: 'Introduction to Artificial Intelligence',
        organization: 'IFSP',
        date: '2024',
        group: 'courses',
        hours: 80
    },
    {
        id: 'unicamp-fife-cosmology',
        title: 'Cosmology, Física nas Férias (FIFE)',
        organization: 'Gleb Wataghin Physics Institute, UNICAMP',
        date: '2024',
        group: 'courses',
        hours: 47
    },
    {
        id: 'typescript-complete-guide',
        title: "TypeScript: The Complete Developer's Guide",
        organization: 'Udemy (Stephen Grider)',
        date: '2025',
        group: 'courses',
        hours: 27
    },
    {
        id: 'ifsp-networks',
        title: 'Introduction to Network Architecture and Protocols',
        organization: 'IFSP',
        date: '2022',
        group: 'courses',
        hours: 100
    },
    {
        id: 'ifsp-linux-networks',
        title: 'Linux Network Administration Fundamentals',
        organization: 'IFSP',
        date: '2022',
        group: 'courses',
        hours: 60
    },
    {
        id: 'ifsp-databases-sql',
        title: 'Introduction to Databases and SQL',
        organization: 'IFSP',
        date: '2023',
        group: 'courses',
        hours: 36
    },
    {
        id: 'st-johns-summer-academy',
        title: 'Summer Academy Online, "The Odyssey" session',
        organization: "St. John's College",
        date: '2024',
        group: 'courses',
        hours: 8
    },
    {
        id: 'understanding-copilots',
        title: 'Understanding Copilots, workshop with Microsoft MVPs and a GitHub Star',
        organization: 'GitTogether SJC',
        date: '2024',
        group: 'courses',
        hours: 3
    },
    {
        id: 'ibm-pytorch',
        title: 'Getting Started with Machine Learning with PyTorch',
        organization: 'IBM Skills Network',
        date: '2025',
        group: 'courses',
        hours: 1
    },
    {
        id: 'nvidia-building-a-brain',
        title: 'Building a Brain in 10 Minutes',
        organization: 'NVIDIA Deep Learning Institute',
        date: '2025',
        group: 'courses',
        hours: 0.5
    }
];

/** Section titles for the /achievements page, in display order. */
export const certificateGroups: { id: CertificateGroup; title: string }[] = [
    { id: 'selected', title: 'Selected honors' },
    { id: 'leadership', title: 'Leadership and community' },
    { id: 'competitions', title: 'Competitions and exams' },
    { id: 'courses', title: 'Courses and certificates' }
];

/** First and last year in a display date such as "2024–2025". */
const yearSpan = (date: string): [number, number] => {
    const years = (date.match(/\d{4}/g) ?? ['0']).map(Number);
    return [years[0], years[years.length - 1]];
};

/** One section's entries, newest first, so the order never depends on the file. */
export const certificatesIn = (group: CertificateGroup): Certificate[] =>
    certificates
        .filter(item => item.group === group)
        .sort((a, b) => {
            const [aStart, aEnd] = yearSpan(a.date);
            const [bStart, bEnd] = yearSpan(b.date);
            return bEnd - aEnd || bStart - aStart;
        });

import type { Certificate } from '@/types';
import JECETImage from '@/assets/academicAchievements/JECET.jpg';

export const certificates: Certificate[] = [
    {
        id: 0,
        title: 'Google Student Ambassador 2026',
        institution: 'Google',
        date: '2026',
        type: 'honors',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        description:
            'Selected as a Google Student Ambassador for the 2026 global cohort. Acting as a campus lead and liaison between Google and the academic community, driving AI technology adoption, developer workshops, and student initiatives.'
    },
    {
        id: 1,
        title: 'UC Berkeley AI Hackathon',
        institution: 'University of California Berkeley - Cal Hacks',
        date: '2025',
        type: 'hackathons',
        hours: 40,
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg',
        description:
            'Competed with an international team in the biggest AI hackathon, among 1,300+ hackers tackling real-world challenges over 2 days. Strengthened problem-solving skills and collaboration while developing AI-based solutions for real use cases.'
    },
    {
        id: 2,
        title: 'PennApps XXV - Hackathon',
        institution: 'University of Pennsylvania - Penn Engineering',
        date: '2024',
        type: 'hackathons',
        hours: 60,
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/000/041/datas/full_width.png',
        description:
            'Participated in the largest student-run hackathon, among 360+ hackers solving real-world challenges over 3 days. Improved teamwork, rapid prototyping and pitching of software solutions to judges and peers.'
    },
    {
        id: 3,
        title: 'Introduction to Artificial Intelligence',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2024',
        type: 'courses',
        hours: 80,
        image: 'https://cdn.sologo.ai/2025/0102/20250102113948245.png'
    },
    {
        id: 4,
        title: 'Quantum Computing - Physics on Vacation - FIFE',
        institution:
            'Physics of Quantum Devices Lab - Gleb Wataghin Physics Institute - University of Campinas - UNICAMP',
        date: '2025',
        type: 'courses',
        hours: 47,
        image: 'https://sites.ifi.unicamp.br/fife/files/2024/05/fisica-ferias.png',
        description:
            "An advanced course on Quantum Computing taught directly by the leading department in the Southern Hemisphere, alongside the first quantum computer in the region. I learned fundamental quantum computing concepts and deepened my knowledge in superconducting qubit creation, including advanced concepts such as Josephson Junctions and quantum circuit design. I had the privilege of witnessing the creation of Latin America's second qubit, gaining hands-on experience with cutting-edge quantum technologies at one of the most prestigious quantum research facilities in South America. With a highly competitive 5% acceptance rate, this program represents a significant academic achievement."
    },
    {
        id: 5,
        title: 'Speaker: Hackathons and the Path to American Universities',
        institution: 'IFSP & JECET Congress',
        date: '2024 2025',
        type: 'honors',
        description:
            'Invited speaker (3 times) presenting "Hackathons e o caminho para universidades americanas" to Brazilian technical and undergraduate students at public schools. Delivered presentations at the JECET Congress (Jornada de Ensino, Ciência, Extensão e Tecnologia) and other venues, reaching 100+ attendees. The presentation covers practical guidance on applying to foreign universities, participating in international hackathons, and building a strong academic profile through LinkedIn optimization, GitHub portfolio development, essay writing, and personal branding strategies. This initiative helps democratize access to international educational opportunities and inspires students to pursue global academic experiences.',
        image: JECETImage
    },
    {
        id: 6,
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
        id: 7,
        title: 'Building a Brain in 10 Minutes',
        institution: 'NVIDIA Deep Learning Institute (DLI)',
        date: '2025',
        type: 'courses',
        hours: 0.5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQViZDGRjjB1wdPX_77aBa8YBd40reXHvGg&s'
    },
    {
        id: 8,
        title: 'Getting Started with Machine Learning with PyTorch',
        institution: 'IBM Skills Network - Cognitive Class',
        date: '2025',
        type: 'courses',
        hours: 1,
        image: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2699%2FPNG%2F256%2Fibm_logo_icon_169017.png&id=169017&pack_or_individual=pack'
    },
    {
        id: 9,
        title: 'Representative of the organizing committee for computer events at IFSP',
        institution: 'IFSP',
        date: '2024 2025',
        type: 'extracurricular',
        description:
            'Led the organization of programming events at IFSP, such as a marathon with 55 participants where I managed logistics, resolved technical issues, and secured sponsorships from companies like GitHub, Cebras, and Tune.AI. Inspired students to explore programming creatively, addressing complaints about monotonous classroom experiences. Currently, I am conceptualizing a week-long hackathon modeled on PennApps, aiming to create an engaging and impactful learning experience for the campus community.',
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*TJvbdqOLs0vMhxQp'
    },
    {
        id: 10,
        title: 'National English Language Olympiad - OBLI - Gold Medal',
        institution: 'Seleta Educação',
        date: '2025',
        type: 'honors',
        hours: 3,
        image: 'https://static.wixstatic.com/media/833218_84d0f153678d41deabfac2a21f1c9d04~mv2.png/v1/fill/w_380,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png',
        description:
            'Achieved Gold Medal performance (Top 2%) in the National English Language Olympiad, demonstrating exceptional English language proficiency and ranking among the top performers nationwide.'
    },
    {
        id: 11,
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
        id: 12,
        title: 'Class Leader',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2020 2022 2023 2024 2025',
        type: 'honors',
        description:
            'Elected as class leader with 80%+ votes in 2020 and 2022, achieving 100% vote confidence up to the 12th grade. This consistent leadership recognition reflects strong peer trust, communication skills, and ability to represent and advocate for classmates throughout my academic journey.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2cuEoKZydmlYcod_8jkSEqpD86gnRuWVgA&s'
    },
    {
        id: 13,
        title: 'Cosmology - Physics on Vacation - FIFE',
        institution: 'University of Campinas - UNICAMP',
        date: '2024',
        type: 'courses',
        hours: 47,
        image: 'https://sites.ifi.unicamp.br/fife/files/2024/05/fisica-ferias.png',
        description:
            'An intensive course on Cosmology where I explored fundamental concepts of the universe, including dark matter, black holes, and other related phenomena. This program provided deep insights into modern astrophysics and cosmological theories. With a highly competitive 5% acceptance rate, this program represents a significant academic achievement.'
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
        title: 'Grand Prix SENAI Hackathon',
        institution: 'National Service for Industrial Learning - SENAI',
        date: '2024',
        type: 'hackathons',
        hours: 40,
        image: 'https://static.portaldaindustria.com.br/media/filer_public/15/bf/15bf07e0-a084-403d-bcc9-b206240d90f7/logo.png'
    },
    {
        id: 16,
        title: 'ONC - Nacional Science Olympiad - 2 out of 2 stages',
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
    },
    {
        id: 17,
        title: "TypeScript: The Complete Developer's Guide",
        institution: 'Stephen Grider - Udemy',
        date: '2025',
        type: 'courses',
        hours: 27,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
        description:
            'Mastered TypeScript by learning popular design patterns and building complex projects. This comprehensive bestseller course covered advanced TypeScript concepts, integration with React and Express, and practical application of design patterns in real-world scenarios.'
    },
    {
        id: 18,
        title: 'National English Language Olympiad - OBLI - Bronze Medal 1',
        institution: 'Seleta Educação',
        date: '2024.1',
        type: 'honors',
        hours: 3,
        image: 'https://static.wixstatic.com/media/833218_84d0f153678d41deabfac2a21f1c9d04~mv2.png/v1/fill/w_380,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png',
        description:
            'Achieved Bronze Medal performance (Top 8%) in the National English Language Olympiad, demonstrating strong English language proficiency.'
    },
    {
        id: 19,
        title: 'National English Language Olympiad - OBLI - Bronze Medal 2',
        institution: 'Seleta Educação',
        date: '2024.2',
        type: 'honors',
        hours: 3,
        image: 'https://static.wixstatic.com/media/833218_84d0f153678d41deabfac2a21f1c9d04~mv2.png/v1/fill/w_380,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png',
        description:
            'Achieved Bronze Medal performance (Top 8%) in the National English Language Olympiad, demonstrating strong English language proficiency.'
    },
    {
        id: 20,
        title: 'GitTogether SJC Community Member',
        institution: 'GitHub Community',
        date: '2024 2025',
        type: 'extracurricular',
        description:
            'Played an active role in the GitHub SJC Community, leading the ideation and implementation of programming projects and participating in workshops. Currently, I am preparing to expand this impact by hosting events for my school, combining community resources and partnerships with prominent education companies such as Alura and FIAP to inspire the next generation of programmers.',
        image: 'https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png'
    },
    {
        id: 21,
        title: 'Programming Every Day',
        institution: 'GitHub',
        date: '2025',
        type: 'extracurricular',
        description:
            'Committed to continuous learning through daily programming activities on GitHub, contributing to open-source projects and developing personal initiatives. This consistent engagement has allowed me to explore various technologies, solve real-world challenges, and grow as a programmer through collaboration with other developers.',
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*TJvbdqOLs0vMhxQp'
    },
    {
        id: 22,
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
        id: 23,
        title: 'Introduction to Network Architecture and Protocols',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2022',
        type: 'courses',
        hours: 100,
        image: 'https://t.ctcdn.com.br/C3HzEgvL7HZKHPHr0UhHH7cYwvc=/i658265.png'
    },
    {
        id: 24,
        title: 'Linux Network Administration Fundamentals',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2022',
        type: 'courses',
        hours: 60,
        image: 'https://t2.tudocdn.net/606607?w=1920'
    },
    {
        id: 25,
        title: 'Introduction to Databases and SQL',
        institution:
            'Federal Institute of Science and Technology of São Paulo - IFSP',
        date: '2023',
        type: 'courses',
        hours: 36,
        image: 'https://accutivesecurity.com/wp-content/uploads/2024/06/Data-Masking-for-MySQL-background.svg'
    },
    {
        id: 26,
        title: 'The Dream School Ambassador',
        institution: 'The Dream School',
        date: '2024',
        type: 'extracurricular',
        description:
            'Selected as a representative of the students for The Dream School, where I actively participate in strategic discussions shaping the future of the largest exchange preparation institution in Latin America. Through these efforts, I contribute to improving classes and preparation systems, helping to recruit new students and ambassadors. This collective work has led to remarkable growth in enrollment, ambassador engagement, and overall institutional impact.',
        image: 'https://thedream.com.br/wp-content/uploads/2020/11/Logo_TheDreamSchool.png'
    },
    {
        id: 27,
        title: 'Understanding Copilots - Workshop with Microsoft MVPs and GitHub Star',
        institution: 'GitHub Community - GitTogether SJC',
        date: '2024',
        type: 'events',
        hours: 3,
        image: 'https://github.blog/wp-content/uploads/2024/10/copilot-square.png'
    },
    {
        id: 28,
        title: 'Saint John\'s Summer-Academy Online - "The Odyssey" Session',
        institution: "Saint John's College",
        date: '2024',
        type: 'courses',
        hours: 8,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/St._John%27s_College.svg/1200px-St._John%27s_College.svg.png'
    },
    {
        id: 29,
        title: '3rd out of 4 stages in the Brazilian National History Olympiad - ONHB',
        institution: 'University of Campinas - UNICAMP',
        date: '2023',
        type: 'honors',
        hours: 24,
        image: 'https://styles.redditmedia.com/t5_2scpm/styles/communityIcon_72kalishkfl81.png'
    }
];

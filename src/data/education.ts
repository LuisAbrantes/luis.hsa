import type { Education } from '@/types';

/**
 * Formal education, newest first. Shown on the About page.
 * Grades use the Brazilian 0 to 10 scale, so the label says so.
 */
export const education: Education[] = [
    {
        degree: 'B.S. in Computer Science',
        school: 'Instituto Federal de São Paulo (IFSP)',
        period: '2026 – Present',
        gpa: '8.72',
        gpaLabel: 'Current GPA, out of 10',
        notes: [
            'Four-year degree at a tuition-free federal institute, with admission by competitive public exam.',
            'Core computer science plus coursework in machine learning, deep learning and computer vision.'
        ]
    },
    {
        degree: 'Technical High School Diploma in Informatics',
        school: 'Instituto Federal de São Paulo (IFSP), Jacareí campus',
        period: '2022 – 2024',
        gpa: '8.34',
        gpaLabel: 'Final GPA, out of 10',
        notes: [
            'Four-year program that combines high school with a technical course in software development.',
            'Admitted in the top 10 of 181 candidates for 40 seats. Finished the TutorTime capstone ahead of schedule, in my junior year.'
        ]
    }
];

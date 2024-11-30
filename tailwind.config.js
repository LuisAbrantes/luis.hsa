/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    primary: '#121212',    // Dark background
                    secondary: '#1E1E1E',  // Slightly lighter background
                    accent: '#BB86FC',     // Elegant accent color (purple)
                    text: '#EDEDED',       // Light text color
                    muted: '#A1A1A1',      // Muted text color
                    hover: '#2A2A2A',      // Hover background
                    navbar: '#1F1F1F',    // New navbar background color
                    githubBg: '#252525',  // Background for GitHub quote
                    githubText: '#EDEDED', // Text color for GitHub quote
                    githubLink: '#539BF5'  // Link color for GitHub quote
                }
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)' },
                    '100%': { transform: 'scale(1)' }
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.2s ease-in-out',
                scaleIn: 'scaleIn 0.2s ease-out'
            },
            transformOrigin: {
                'center-center': 'center center'
            }
        }
    },
    plugins: []
};

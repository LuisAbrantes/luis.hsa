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
                },
                'border-rotate': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' }
                },
                'border-draw': {
                    '0%': { 
                        'background-size': '0% 100%',
                        'background-position': '0% 0%'
                    },
                    '50%': {
                        'background-size': '100% 100%',
                        'background-position': '100% 0%'
                    },
                    '100%': {
                        'background-size': '100% 100%',
                        'background-position': '0% 0%'
                    }
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.2s ease-in-out',
                scaleIn: 'scaleIn 0.2s ease-out',
                'border-rotate': 'border-rotate 3s ease infinite',
                'border-draw': 'border-draw 1.5s ease-out forwards'
            },
            transformOrigin: {
                'center-center': 'center center'
            }
        }
    },
    plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    primary: '#0A0A0A', // Ultra dark background
                    secondary: '#1A1A1A', // Glass container background
                    accent: '#BB86FC', // Elegant accent color (purple)
                    accentHover: '#D4AFFF', // Lighter purple for hover
                    text: '#FFFFFF', // Pure white text
                    muted: '#B0B0B0', // Muted text color
                    hover: '#2A2A2A', // Hover background
                    navbar: 'rgba(31, 31, 31, 0.8)', // Semi-transparent navbar
                    glass: 'rgba(255, 255, 255, 0.05)', // Glass effect base
                    glassHover: 'rgba(255, 255, 255, 0.1)', // Glass hover effect
                    glassBorder: 'rgba(255, 255, 255, 0.2)', // Glass border
                    purpleGlass: 'rgba(187, 134, 252, 0.1)', // Purple glass tint
                    purpleGlassBorder: 'rgba(187, 134, 252, 0.3)', // Purple glass border
                    githubBg: 'rgba(37, 37, 37, 0.6)', // Glass background for GitHub quote
                    githubText: '#FFFFFF', // Text color for GitHub quote
                    githubLink: '#539BF5' // Link color for GitHub quote
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
                'glass-shimmer': {
                    '0%': {
                        backgroundPosition: '-200% 0',
                        opacity: '0.8'
                    },
                    '100%': {
                        backgroundPosition: '200% 0',
                        opacity: '1'
                    }
                },
                'liquid-morph': {
                    '0%, 100%': {
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                    },
                    '50%': {
                        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
                    }
                },
                'glass-float': {
                    '0%, 100%': {
                        transform: 'translateY(0px) rotate(0deg)'
                    },
                    '50%': {
                        transform: 'translateY(-10px) rotate(1deg)'
                    }
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
                },
                slideIn: {
                    from: { opacity: '0', transform: 'translateX(-20px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                slideUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                'pulse-glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(187, 134, 252, 0.3)'
                    },
                    '50%': {
                        boxShadow: '0 0 40px rgba(187, 134, 252, 0.6)'
                    }
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.2s ease-in-out',
                scaleIn: 'scaleIn 0.2s ease-out',
                'glass-shimmer': 'glass-shimmer 3s ease-in-out infinite',
                'liquid-morph': 'liquid-morph 8s ease-in-out infinite',
                'glass-float': 'glass-float 6s ease-in-out infinite',
                'border-rotate': 'border-rotate 3s ease infinite',
                'border-draw': 'border-draw 1.5s ease-out forwards',
                slideIn: 'slideIn 0.5s ease-out',
                slideUp: 'slideUp 0.5s ease-out',
                'gradient-x': 'gradient-x 3s ease infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
            },
            transformOrigin: {
                'center-center': 'center center'
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '8px',
                lg: '12px',
                xl: '16px',
                '2xl': '24px',
                '3xl': '32px'
            },
            backgroundImage: {
                'glass-gradient':
                    'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                'purple-glass':
                    'linear-gradient(135deg, rgba(187,134,252,0.1) 0%, rgba(187,134,252,0.05) 100%)',
                shimmer:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                'liquid-bg':
                    'radial-gradient(circle at 20% 80%, rgba(187,134,252,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(187,134,252,0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255,255,255,0.02) 0%, transparent 50%)'
            },
            boxShadow: {
                glass: '0 8px 32px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                'glass-hover':
                    '0 12px 40px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.15) inset',
                'purple-glow': '0 0 20px rgba(187, 134, 252, 0.3)',
                'purple-glow-lg': '0 0 40px rgba(187, 134, 252, 0.4)',
                'inner-glass':
                    'inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            },
            blur: {
                xs: '2px',
                sm: '4px'
            }
        }
    },
    plugins: []
};

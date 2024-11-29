import { useState } from 'react';
import { Github, Instagram, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Create mailto URL with form data
            const mailtoUrl = `mailto:luis.hsa@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
            )}`;
            window.location.href = mailtoUrl;
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const socialLinks = [
        {
            icon: <Github size={24} />,
            url: 'https://github.com/yourusername'
        },
        {
            icon: <Instagram size={24} />,
            url: 'https://instagram.com/yourusername'
        },
        { icon: <Mail size={24} />, url: 'mailto:your.email@example.com' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-primary to-purple-900">
            <div className="text-center py-20 px-4 animate-fadeIn">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transition-transform">
                    Let&apos;s Create Something Amazing
                </h1>
                <p className="text-dark-text mt-4 text-xl animate-slideUp">
                    Choose how you want to connect with me
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 mb-20">
                {showForm ? (
                    <div className="bg-dark-secondary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <h2 className="text-2xl font-bold mb-6 text-dark-accent">
                            Send a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                required
                                className="w-full p-3 rounded-lg bg-dark-primary border border-dark-hover focus:border-purple-500 transition-all duration-300 hover:bg-opacity-80"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                required
                                className="w-full p-3 rounded-lg bg-dark-primary border border-dark-hover focus:border-purple-500 transition-all duration-300 hover:bg-opacity-80"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                required
                                rows="4"
                                className="w-full p-3 rounded-lg bg-dark-primary border border-dark-hover focus:border-purple-500 transition-all duration-300 hover:bg-opacity-80"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-400 text-center animate-fadeIn">
                                    Message sent successfully!
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-400 text-center animate-fadeIn">
                                    Failed to send message. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                ) : null}

                <div className="bg-dark-secondary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <h2 className="text-2xl font-bold mb-6 text-dark-accent">
                        Portfolio Development Service
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-dark-primary p-4 rounded-lg transform transition-transform hover:scale-105">
                            <h3 className="text-xl font-bold text-purple-400">
                                Special Offer: $15
                            </h3>
                            <p className="mt-2">
                                Get your professional portfolio website based on
                                this template!
                            </p>
                        </div>
                        <ul className="space-y-2">
                            {[
                                '✨ Personalized Design',
                                '📱 Mobile Responsive',
                                '🎨 Custom Color Schemes',
                                '🚀 SEO Optimization',
                                '💻 Deployment Included'
                            ].map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300"
                                    style={{
                                        animation: `slideIn 0.5s ease-out ${
                                            index * 0.1
                                        }s both`
                                    }}
                                >
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button 
                            onClick={() => setShowForm(true)}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-bold transition-all duration-300 hover:opacity-90 hover:scale-105"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-dark-secondary py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8 text-dark-accent">
                        Connect With Me
                    </h2>
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark-accent hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-6"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.5s ease-out;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;

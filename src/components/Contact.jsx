import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Instagram,
    Mail,
    Linkedin,
    Send,
    CheckCircle
} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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

        // Simulate form submission or use actual mailto
        setTimeout(() => {
            const mailtoUrl = `mailto:luis.hsa@gmail.com?subject=Portfolio Contact from ${
                formData.name
            }&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
            )}`;
            window.location.href = mailtoUrl;

            setSubmitStatus('success');
            setIsLoading(false);
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1000);
    };

    const socialLinks = [
        {
            icon: <Github size={20} />,
            label: 'GitHub',
            url: 'https://github.com/LuisAbrantes'
        },
        {
            icon: <Instagram size={20} />,
            label: 'Instagram',
            url: 'https://instagram.com/luis.hsa'
        },
        {
            icon: <Mail size={20} />,
            label: 'Email',
            url: 'mailto:luis.hsa@gmail.com'
        },
        {
            icon: <Linkedin size={20} />,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/luishenriqueabrantes/'
        }
    ];

    return (
        <section className="min-h-screen bg-dark-primary pt-40 pb-20 px-4 sm:px-6 lg:px-8 font-sans flex flex-col justify-center">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-light text-white mb-4 tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text-gray-400 font-light max-w-xl mx-auto">
                        Have a project in mind or just want to say hello? I'd
                        love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-xl font-medium text-white mb-4">
                                Connect
                            </h2>
                            <p className="text-gray-400 font-light mb-6 leading-relaxed">
                                I'm currently open to new opportunities and
                                collaborations. Whether you have a question or
                                just want to connect, feel free to reach out.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-dark-secondary/30 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300"
                                    >
                                        {social.icon}
                                        <span className="text-sm font-light">
                                            {social.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-dark-secondary/20 border border-gray-800 rounded-2xl">
                            <h3 className="text-lg font-medium text-white mb-2">
                                Portfolio Development
                            </h3>
                            <p className="text-gray-400 font-light text-sm mb-4">
                                Interested in a portfolio like this? I offer
                                custom development services starting at $15.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-gray-500 font-light">
                                    <CheckCircle
                                        size={14}
                                        className="text-white"
                                    />{' '}
                                    Personalized Design
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-500 font-light">
                                    <CheckCircle
                                        size={14}
                                        className="text-white"
                                    />{' '}
                                    Mobile Responsive
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-500 font-light">
                                    <CheckCircle
                                        size={14}
                                        className="text-white"
                                    />{' '}
                                    SEO Optimized
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-dark-primary border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors font-light"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-dark-primary border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors font-light"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    className="w-full bg-dark-primary border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors font-light resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-green-400 text-sm justify-center"
                                >
                                    <CheckCircle size={16} /> Message sent
                                    successfully!
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import { useState } from 'react';
import { Github, Instagram, Mail, Linkedin, X } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [errors, setErrors] = useState({});
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Invalid email format';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsLoading(true);

        try {
            // Create mailto URL with form data
            const mailtoUrl = `mailto:luis.hsa@gmail.com?subject=Portfolio Contact from ${
                formData.name
            }&body=${encodeURIComponent(
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

    const handleShowForm = () => {
        setIsFormVisible(true);
        setTimeout(() => setShowForm(true), 300);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
        setTimeout(() => {
            setShowForm(false);
        }, 300);
    };

    const socialLinks = [
        {
            icon: <Github size={24} />,
            url: 'https://github.com/LuisAbrantes'
        },
        {
            icon: <Instagram size={24} />,
            url: 'https://instagram.com/luis.hsa'
        },
        {
            icon: <Mail size={24} />,
            url: 'mailto:luis.hsa@gmail.com'
        },
        {
            icon: <Linkedin size={24} />,
            url: 'https://www.linkedin.com/in/luishenriqueabrantes/'
        }
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

            <div className="max-w-6xl mx-auto px-4 mb-20">
                {!showForm ? (
                    // Centered service section when form is not shown
                    <div className={`max-w-md mx-auto transition-all duration-300 transform ${isFormVisible ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
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
                                        Get your professional portfolio website
                                        based on this template!
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
                                            className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300 animate-slideIn"
                                            style={{
                                                animationDelay: `${
                                                    index * 100
                                                }ms`
                                            }}
                                        >
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={handleShowForm}
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-bold transition-all duration-300 hover:opacity-90 hover:scale-105"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Side by side layout when form is shown
                    <div className={`grid md:grid-cols-2 gap-8 transition-all duration-300 transform ${!isFormVisible ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
                        <div className="bg-dark-secondary p-6 rounded-xl shadow-lg relative">
                            <button
                                onClick={handleCloseForm}
                                className="absolute right-4 top-4 text-dark-accent hover:text-purple-400 transition-colors"
                                aria-label="Close form"
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-2xl font-bold mb-6 text-dark-accent">
                                Send a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        required
                                        className={`w-full p-3 rounded-lg bg-dark-primary border ${
                                            errors.name
                                                ? 'border-red-500'
                                                : 'border-dark-hover'
                                        } focus:border-purple-500 transition-all duration-300`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        required
                                        className={`w-full p-3 rounded-lg bg-dark-primary border ${
                                            errors.email
                                                ? 'border-red-500'
                                                : 'border-dark-hover'
                                        } focus:border-purple-500 transition-all duration-300`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="sr-only"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        required
                                        rows="4"
                                        className={`w-full p-3 rounded-lg bg-dark-primary border ${
                                            errors.message
                                                ? 'border-red-500'
                                                : 'border-dark-hover'
                                        } focus:border-purple-500 transition-all duration-300`}
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-bold
                                             transition-all duration-300 hover:opacity-90 hover:scale-105 
                                             disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <span className="animate-spin mr-2">
                                                ⚡
                                            </span>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                                {submitStatus === 'success' && (
                                    <p className="text-green-400 text-center animate-fadeIn">
                                        Message sent successfully!
                                    </p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-400 text-center animate-fadeIn">
                                        Failed to send message. Please try
                                        again.
                                    </p>
                                )}
                            </form>
                        </div>

                        <div className="bg-dark-secondary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h2 className="text-2xl font-bold mb-6 text-dark-accent">
                                Portfolio Development Service
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-dark-primary p-4 rounded-lg transform transition-transform hover:scale-105">
                                    <h3 className="text-xl font-bold text-purple-400">
                                        Special Offer: $15
                                    </h3>
                                    <p className="mt-2">
                                        Get your professional portfolio website
                                        based on this template!
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
                                            className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300 animate-slideIn"
                                            style={{
                                                animationDelay: `${
                                                    index * 100
                                                }ms`
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
                )}
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
        </div>
    );
};

export default Contact;

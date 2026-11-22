import { useState, type FormEvent } from 'react';
import type { MetaFunction } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import Page from '@/components/layout/Page';
import PageHeader from '@/components/ui/PageHeader';
import { AVAILABILITY } from '@/data/site';
import { socialLinks, CONTACT_EMAIL } from '@/data/socials';
import { breadcrumbNode, pageMeta, webPageNode } from '@/lib/seo';

const TITLE = 'Contact | Luis Henrique Abrantes';

export const meta: MetaFunction = () =>
    pageMeta({
        title: TITLE,
        description:
            'Contact Luis Henrique Abrantes about software engineering and applied AI internships and junior roles. Email, LinkedIn, GitHub and Devpost.',
        path: '/contact',
        jsonLd: [
            webPageNode('ContactPage', '/contact', TITLE),
            breadcrumbNode([{ name: 'Contact', path: '/contact' }])
        ]
    });

const profiles = socialLinks.filter(link => !link.url.startsWith('mailto:'));

const details = [
    { term: 'Looking for', value: AVAILABILITY.roles },
    {
        term: 'Location',
        value: `${AVAILABILITY.location}. ${AVAILABILITY.relocation}.`
    },
    { term: 'Languages', value: AVAILABILITY.languages }
];

const fieldClass =
    'w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 text-base text-white placeholder-zinc-500 font-light transition-colors hover:border-zinc-700 focus:outline-none focus:border-zinc-400';

const labelClass =
    'block text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold';

const Contact = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [draftOpened, setDraftOpened] = useState(false);

    // There is no backend: the form hands the message to the visitor's own
    // email app, so nothing is sent until they press send there.
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const subject = `Portfolio contact from ${name}`;
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(message)}`;
        setDraftOpened(true);
    };

    return (
        <Page>
                <PageHeader eyebrow="Contact" title="Get in touch">
                    <p>
                        {AVAILABILITY.summary} Email is the fastest way to
                        reach me, and I answer in English or Portuguese.
                    </p>
                </PageHeader>

                <div className="mt-14 border-t border-zinc-800/80 pt-12 grid grid-cols-1 md:grid-cols-12 gap-14 lg:gap-20">
                    <div className="md:col-span-5 space-y-12">
                        <section className="space-y-4">
                            <Eyebrow as="h2" tone="muted">
                                Email
                            </Eyebrow>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="inline-block text-2xl sm:text-3xl font-bold text-white tracking-tight underline underline-offset-8 decoration-zinc-700 hover:decoration-white transition-colors break-all"
                            >
                                {CONTACT_EMAIL}
                            </a>
                        </section>

                        <section className="space-y-4">
                            <Eyebrow as="h2" tone="muted">
                                Profiles
                            </Eyebrow>
                            <ul className="border-t border-zinc-900">
                                {profiles.map(profile => (
                                    <li
                                        key={profile.label}
                                        className="border-b border-zinc-900"
                                    >
                                        <a
                                            href={profile.url}
                                            target="_blank"
                                            rel="me noopener noreferrer"
                                            className="group flex items-center justify-between py-3.5 text-base text-zinc-300 hover:text-white transition-colors"
                                        >
                                            <span>{profile.label}</span>
                                            <ArrowUpRight
                                                size={16}
                                                aria-hidden="true"
                                                className="text-zinc-600 group-hover:text-white transition-colors"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <Eyebrow as="h2" tone="muted">
                                Details
                            </Eyebrow>
                            <dl className="space-y-4">
                                {details.map(item => (
                                    <div key={item.term} className="space-y-1">
                                        <dt className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                            {item.term}
                                        </dt>
                                        <dd className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                                            {item.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </section>
                    </div>

                    <section className="md:col-span-7 space-y-8">
                        <div className="space-y-3">
                            <Eyebrow as="h2" tone="muted">
                                Write a message
                            </Eyebrow>
                            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-lg">
                                This opens a draft in your email app with the
                                message filled in. Nothing is sent from this
                                page.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className={labelClass}>
                                    Your name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Jane Doe, Acme Inc."
                                    required
                                    value={name}
                                    onChange={event =>
                                        setName(event.target.value)
                                    }
                                    className={fieldClass}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className={labelClass}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="What you are working on and how I could help"
                                    value={message}
                                    onChange={event =>
                                        setMessage(event.target.value)
                                    }
                                    className={`${fieldClass} resize-y`}
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors text-sm sm:text-base"
                                >
                                    <span>Open email draft</span>
                                    <ArrowUpRight
                                        size={16}
                                        aria-hidden="true"
                                    />
                                </button>
                                <p
                                    role="status"
                                    className="text-sm text-zinc-400 font-light"
                                >
                                    {draftOpened &&
                                        `If no draft opened, write to ${CONTACT_EMAIL} directly.`}
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
        </Page>
    );
};

export default Contact;

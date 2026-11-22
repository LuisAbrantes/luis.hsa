import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import Page from '@/components/layout/Page';
import PageHeader from '@/components/ui/PageHeader';
import {
    certificateGroups,
    certificates,
    certificatesIn
} from '@/data/certificates';
import { SITE_URL } from '@/data/site';
import { breadcrumbNode, pageMeta, webPageNode } from '@/lib/seo';
import type { Certificate } from '@/types';

const TITLE = 'Honors, Hackathons & Certificates | Luis Henrique Abrantes';

export const meta: MetaFunction = () =>
    pageMeta({
        title: TITLE,
        description:
            'Honors and certificates of Luis Henrique Abrantes: Google Student Ambassador 2026, UC Berkeley AI Hackathon, PennApps XXV, OBI, UNICAMP FIFE and more.',
        path: '/achievements',
        jsonLd: [
            webPageNode('CollectionPage', '/achievements', TITLE, {
                mainEntity: { '@id': `${SITE_URL}/achievements#list` }
            }),
            {
                '@type': 'ItemList',
                '@id': `${SITE_URL}/achievements#list`,
                name: 'Honors, activities and courses',
                numberOfItems: certificates.length,
                itemListElement: certificates.map((item, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: `${item.title}, ${item.organization} (${item.date})`,
                    url: `${SITE_URL}/achievements#${item.id}`
                }))
            },
            breadcrumbNode([{ name: 'Honors', path: '/achievements' }])
        ]
    });

const hoursLabel = (hours: number) => `${hours} ${hours === 1 ? 'hour' : 'hours'}`;

/** Internal routes use the client router; everything else opens in a new tab. */
const SupportingLink = ({ link }: { link: NonNullable<Certificate['link']> }) => {
    const className =
        'inline-flex items-center gap-1 text-sm text-zinc-300 underline underline-offset-4 decoration-zinc-700 hover:text-white hover:decoration-white transition-colors';

    return link.href.startsWith('/') ? (
        <Link to={link.href} className={className}>
            {link.label}
            <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
    ) : (
        <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {link.label}
            <ArrowUpRight size={14} aria-hidden="true" />
        </a>
    );
};

/** A selected honor: large title, logo, full description. */
const SelectedHonor = ({ item }: { item: Certificate }) => (
    <li
        id={item.id}
        className="scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-8 sm:py-10 border-t border-zinc-800/80"
    >
        <p className="md:col-span-2 text-sm font-mono text-zinc-500 md:pt-1.5">
            {item.date}
        </p>
        <div className="md:col-span-10 flex items-start gap-5">
            <div className="flex-1 space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {item.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 font-light">
                    {item.organization}
                </p>
                {item.description && (
                    <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
                        {item.description}
                    </p>
                )}
                {item.link && <SupportingLink link={item.link} />}
            </div>
            {item.logo && (
                <img
                    src={item.logo}
                    alt=""
                    width={56}
                    height={56}
                    loading="lazy"
                    draggable={false}
                    className="hidden sm:block w-12 h-12 lg:w-14 lg:h-14 object-contain flex-shrink-0 opacity-90 select-none pointer-events-none"
                />
            )}
        </div>
    </li>
);

/** A regular entry: one line of title, one of context, optional note. */
const HonorRow = ({ item }: { item: Certificate }) => (
    <li
        id={item.id}
        className="scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-1.5 py-5 border-t border-zinc-900"
    >
        <p className="md:col-span-2 text-sm font-mono text-zinc-500 md:pt-0.5">
            {item.date}
        </p>
        <div className="md:col-span-10 space-y-1.5">
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
                {item.title}
            </h3>
            <p className="text-sm text-zinc-400 font-light">
                {item.organization}
                {item.hours !== undefined && ` · ${hoursLabel(item.hours)}`}
            </p>
            {item.description && (
                <p className="text-sm text-zinc-300 font-light leading-relaxed max-w-2xl">
                    {item.description}
                </p>
            )}
            {item.link && <SupportingLink link={item.link} />}
        </div>
    </li>
);

const Certificates = () => (
    <Page>
            <PageHeader
                eyebrow="Honors"
                title="Honors, hackathons and certificates"
            >
                <p>
                    The results I would put first, followed by the
                    leadership, competitions and coursework behind them.
                </p>
            </PageHeader>

            <nav
                aria-label="Sections"
                className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-mono text-zinc-300"
            >
                {certificateGroups.map(group => (
                    <a
                        key={group.id}
                        href={`#${group.id}`}
                        className="underline underline-offset-4 decoration-zinc-700 hover:text-white hover:decoration-white transition-colors"
                    >
                        {group.title}
                        <span className="text-zinc-500">
                            {' '}
                            {certificatesIn(group.id).length}
                        </span>
                    </a>
                ))}
            </nav>

            {certificateGroups.map(group => (
                <section
                    key={group.id}
                    id={group.id}
                    aria-labelledby={`${group.id}-title`}
                    className="scroll-mt-24 mt-16 sm:mt-20"
                >
                    <Eyebrow
                        as="h2"
                        tone={group.id === 'selected' ? 'accent' : 'muted'}
                        className="mb-6"
                    >
                        <span id={`${group.id}-title`}>{group.title}</span>
                    </Eyebrow>
                    <ul>
                        {certificatesIn(group.id).map(item =>
                            group.id === 'selected' ? (
                                <SelectedHonor key={item.id} item={item} />
                            ) : (
                                <HonorRow key={item.id} item={item} />
                            )
                        )}
                    </ul>
                </section>
            ))}
    </Page>
);

export default Certificates;

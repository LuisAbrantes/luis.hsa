import type { Variants } from 'framer-motion';

/** Single item fading up into place. Pair with `whileInView` or a parent stagger. */
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

/** Parent that staggers the reveal of its children. */
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
};

/** Shared viewport config so cards reveal once as they scroll into view. */
export const revealViewport = { once: true, margin: '-60px' } as const;

/** Page-to-page route transition. */
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 8 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.25, ease: 'easeOut' }
    },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } }
};

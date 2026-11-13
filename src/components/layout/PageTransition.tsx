import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/motion';
import Footer from '@/components/layout/Footer';

/**
 * Wraps a route's content with a smooth enter/exit transition. The footer
 * lives inside the wrapper so it leaves and enters together with the page.
 */
const PageTransition = ({ children }: { children: ReactNode }) => (
    <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        {children}
        <Footer />
    </motion.div>
);

export default PageTransition;

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/motion';

/** Wraps a route's content with a smooth enter/exit transition. */
const PageTransition = ({ children }: { children: ReactNode }) => (
    <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        {children}
    </motion.div>
);

export default PageTransition;

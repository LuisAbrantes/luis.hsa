import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    /** Extra classes for the inner panel (e.g. max-width). */
    className?: string;
    /** id of the element labelling the dialog, for screen readers. */
    labelledBy?: string;
}

/**
 * Accessible, animated modal rendered in a portal.
 * Closes on backdrop click and Escape, locks body scroll while open,
 * and animates in/out via AnimatePresence.
 */
const Modal = ({ isOpen, onClose, children, className = '', labelledBy }: ModalProps) => {
    const panelRef = useRef<HTMLDivElement>(null);

    // Close on Escape.
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    // Lock body scroll while open and restore focus on close.
    useEffect(() => {
        if (!isOpen) return;
        const previousOverflow = document.body.style.overflow;
        const previouslyFocused = document.activeElement as HTMLElement | null;
        document.body.style.overflow = 'hidden';
        panelRef.current?.focus();
        return () => {
            document.body.style.overflow = previousOverflow;
            previouslyFocused?.focus?.();
        };
    }, [isOpen]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={labelledBy}
                >
                    <motion.div
                        ref={panelRef}
                        tabIndex={-1}
                        className={`bg-dark-primary border border-gray-800 rounded-2xl shadow-2xl outline-none ${className}`}
                        onClick={e => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 12 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Modal;

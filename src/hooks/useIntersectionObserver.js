import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting && !hasIntersected) {
                    setHasIntersected(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
                ...options
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasIntersected, options]);

    return { ref, isIntersecting, hasIntersected };
};

export default useIntersectionObserver;

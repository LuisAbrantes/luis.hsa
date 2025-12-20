import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    loadingClassName = 'bg-dark-glass animate-pulse rounded-lg',
    fallbackSrc = '/public/favicon.ico',
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!src) return;

        const img = new Image();
        img.src = src;

        img.onload = () => {
            setImageSrc(src);
            setIsLoaded(true);
            setHasError(false);
        };

        img.onerror = () => {
            setHasError(true);
            setImageSrc(fallbackSrc);
            setIsLoaded(true);
        };

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src, fallbackSrc]);

    if (hasError && !fallbackSrc) {
        return (
            <div
                className={`${className} bg-dark-glass flex items-center justify-center text-dark-muted`}
            >
                <span>Image not available</span>
            </div>
        );
    }

    return (
        <div className="relative">
            {!isLoaded && (
                <div className={`absolute inset-0 ${loadingClassName}`}>
                    <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-30"></div>
                </div>
            )}
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                    className={`${className} ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300`}
                    loading="lazy"
                    {...props}
                />
            )}
        </div>
    );
};

OptimizedImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    loadingClassName: PropTypes.string,
    fallbackSrc: PropTypes.string
};

export default OptimizedImage;

import { useEffect, useState } from 'react';

const useImagePreloader = (imageUrls = []) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedImages, setLoadedImages] = useState(new Set());

    useEffect(() => {
        if (imageUrls.length === 0) {
            setImagesLoaded(true);
            return;
        }

        let mounted = true;
        const loadedSet = new Set();

        const preloadImage = url => {
            return new Promise(resolve => {
                const img = new Image();
                img.onload = () => {
                    if (mounted) {
                        loadedSet.add(url);
                        setLoadedImages(new Set(loadedSet));
                    }
                    resolve();
                };
                img.onerror = () => {
                    // Failed to preload image
                    resolve();
                };
                img.src = url;
            });
        };

        const preloadAllImages = async () => {
            const promises = imageUrls.map(preloadImage);
            await Promise.all(promises);

            if (mounted) {
                setImagesLoaded(true);
            }
        };

        preloadAllImages();

        return () => {
            mounted = false;
        };
    }, [imageUrls]);

    return { imagesLoaded, loadedImages };
};

export default useImagePreloader;

import { useState, useEffect } from "react";

const useResourcePreloader = (resources) => {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

    const updateProgress = () => {
        setImagesLoadedCount((loadingProgress) => loadingProgress + 1);
    };

    useEffect(() => {
        resources.forEach((src) => {
            const img = new Image();
            img.addEventListener("load", () => {
                updateProgress();
            });
            img.addEventListener("error", (err) => console.log(err));
            img.src = src;
        });
    }, []);

    const loadingProgress = (imagesLoadedCount / resources.length) * 100;

    const isPreloaded = imagesLoadedCount === resources.length;

    return [isPreloaded, loadingProgress];
};

export default useResourcePreloader;

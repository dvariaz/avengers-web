import { useState, useEffect } from "react";

const useResourcePreloader = (resources) => {
    const [isPreloaded, setIsPreloaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const updateProgress = () => {
        setLoadingProgress((loadingProgress) => loadingProgress + 1);
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

    useEffect(() => {
        if (loadingProgress === resources.length) {
            setIsPreloaded(true);
        }
    }, [loadingProgress]);

    return [isPreloaded, loadingProgress / resources.length];
};

export default useResourcePreloader;

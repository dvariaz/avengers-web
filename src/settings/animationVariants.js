export const titleVariants = {
    enter: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8 },
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: { duration: 0.8 },
    },
};

export const paragraphVariants = {
    enter: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8 },
    },
    exit: {
        y: 20,
        opacity: 0,
        transition: { duration: 0.8 },
    },
};

export const containerVariants = {
    enter: {
        transition: { duration: 0.3, staggerChildren: 0.3 },
    },
    exit: {
        transition: { duration: 0.3, staggerChildren: 0.3 },
    },
};

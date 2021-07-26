export const fadeInOrchestrator = (duration = 0.3, staggerChildren = 0.3) => {
  let variants = {
    enter: {
      transition: { duration, staggerChildren },
    },
    exit: {
      transition: { duration, staggerChildren },
    },
  };

  return variants;
};

export const generateFadeIn = ({
  enter,
  exit,
  duration = 0.8,
  fadeOpacity = true,
}) => {
  let enterVariants = enter;

  let exitVariants = exit;

  if (fadeOpacity) {
    enterVariants.opacity = 1;
    exitVariants.opacity = 0;
  }

  let variants = {
    enter: { ...enterVariants, transition: { duration } },
    exit: {
      ...exitVariants,
      transition: { duration },
    },
  };

  return variants;
};

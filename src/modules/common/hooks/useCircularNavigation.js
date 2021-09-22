export default function useCircularNavigation(current, links) {
  if (links.some((link) => !link.path))
    throw new Error("All links must have path property");

  // Index
  const currentIndex = links.findIndex((link) => link.path === current);
  const previousIndex =
    currentIndex === 0 ? links.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % links.length;

  // Links
  const currentItem = links[currentIndex];
  const previousItem = links[previousIndex];
  const nextItem = links[nextIndex];

  return {
    currentItem,
    previousItem,
    nextItem,
    currentIndex,
    previousIndex,
    nextIndex,
  };
}

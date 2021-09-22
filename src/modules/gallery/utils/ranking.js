/**
 * Function to generate an array of stars from a score
 * @param {*} score
 * @returns
 */
export const renderStars = (score) => {
  const whole = parseInt(score);
  const decimal = score - whole;

  const stars = [];

  for (let i = 0; i < whole; i++) {
    stars.push(
      <img
        key={`star-${i}`}
        src={`/assets/Icons/Score/FullStar_Icon.svg`}
        alt=""
      />
    );
  }

  if (decimal > 0) {
    stars.push(
      <img
        key={`star-${stars.length}`}
        src={`/assets/Icons/Score/HalfStar_Icon.svg`}
        alt=""
      />
    );
  }

  return stars;
};

export function getMovieDuration(duration) {
  const hours = Math.floor(duration / 60);
  const hoursString = hours > 0 ? `${hours} h` : '';
  const minutes = `${duration - hours * 60} min`;
  return `${hoursString}  ${minutes} `;
}

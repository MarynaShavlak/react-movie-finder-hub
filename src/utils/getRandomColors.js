import randomColor from 'randomcolor';

export function getRandomColors() {
  return randomColor({ hue: 'pink', count: 10 });
}

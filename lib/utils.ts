export function randomIntBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomNumBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomFloatBetween(min: number, max: number, decimals: number) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

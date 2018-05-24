import { BigNumber } from 'bignumber.js';

const color = (value) => {
  const h = value.times(100);
  return `hsl(110, ${h.toFixed(5)}%, 50%)`;
};

export {
  color
};

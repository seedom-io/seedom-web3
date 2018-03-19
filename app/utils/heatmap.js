import { BigNumber } from 'bignumber.js';

const color = (value) => {
  const h = (new BigNumber(1.0)).minus(value).times(240);
  return `hsl(${h.toFixed(5)}, 100%, 50%)`;
};

export {
  color
};

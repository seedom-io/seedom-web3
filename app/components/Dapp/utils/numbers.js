import { BigNumber } from 'bignumber.js';

const weiInEther = new BigNumber(1000000000000000000);

const getEtherFromWei = (bigNumber) => {
  return bigNumber.dividedBy(weiInEther);
};

const localeDecimal = (bigNumber) => {
  return bigNumber.toFormat(2);
};

const localeNumber = (bigNumber) => {
  return bigNumber.toFormat(0);
};

export {
  getEtherFromWei,
  localeNumber,
  localeDecimal
};

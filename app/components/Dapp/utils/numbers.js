const getEtherFromWei = (wei) => {
  return wei / 1000000000000000000;
};

const localeNumber = (number) => {
  return number.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export {
  getEtherFromWei,
  localeNumber
};

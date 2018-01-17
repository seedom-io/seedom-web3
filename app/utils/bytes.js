const zero32 = '0x0000000000000000000000000000000000000000000000000000000000000000';
const zero20 = '0x0000000000000000000000000000000000000000';


const isZero32 = bytes => bytes === zero32;
const isZero20 = bytes => bytes === zero20;

export {
  zero32,
  zero20,
  isZero32,
  isZero20
};

const zero32 = '0x0000000000000000000000000000000000000000000000000000000000000000';
const zero20 = '0x0000000000000000000000000000000000000000';

const isZero32 = bytes => bytes === zero32;
const isZero20 = bytes => bytes === zero20;

const shorten = bytes => {
  return `${bytes.substring(0, 10)}...${bytes.substring(bytes.length - 4)}`;
};

const bytesString = (string) => {
  const buffer = Buffer.alloc(32);
  buffer.write(string);
  return `0x${buffer.toString('hex')}`;
};

const stringBytes = (bytes) => {
  const bytesMeat = bytes.substr(2);
  const buffer = Buffer.from(bytesMeat, 'hex');
  return buffer.toString().replace(/\0/g, '');
};

export {
  zero32,
  zero20,
  isZero32,
  isZero20,
  shorten,
  bytesString,
  stringBytes
};

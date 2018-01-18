import { keccak256 } from 'js-sha3';

const hexRandom = (random) => {
  const buffer = Buffer.alloc(32);
  buffer.write(random);
  return `0x${buffer.toString('hex')}`;
};

const dehexRandom = (randomHex) => {
  const randomHexMeat = randomHex.substr(2);
  const randomBuffer = Buffer.from(randomHexMeat, 'hex');
  return randomBuffer.toString();
};

const hashRandom = (randomHex, participant) => {
  const hasher = new keccak256.create(256); // eslint-disable-line new-cap

  const randomHexMeat = randomHex.substr(2);
  const randomBuffer = Buffer.from(randomHexMeat, 'hex');
  hasher.update(randomBuffer);

  const participantHex = participant.substr(2);
  const participantBuffer = Buffer.from(participantHex, 'hex');
  hasher.update(participantBuffer);

  return `0x${hasher.hex()}`;
};

export { hexRandom, dehexRandom, hashRandom };

import { keccak256 } from 'js-sha3';

const hexMessage = (message) => {
  const buffer = Buffer.alloc(32);
  buffer.write(message);
  return `0x${buffer.toString('hex')}`;
};

const dehexMessage = (messageHex) => {
  const messageHexMeat = messageHex.substr(2);
  const messageBuffer = Buffer.from(messageHexMeat, 'hex');
  return messageBuffer.toString();
};

/*const hashRandom = (randomHex, participant) => {
  const hasher = new keccak256.create(256); // eslint-disable-line new-cap

  const randomHexMeat = randomHex.substr(2);
  const randomBuffer = Buffer.from(randomHexMeat, 'hex');
  hasher.update(randomBuffer);

  const participantHex = participant.substr(2);
  const participantBuffer = Buffer.from(participantHex, 'hex');
  hasher.update(participantBuffer);

  return `0x${hasher.hex()}`;
};*/

export { hexMessage, dehexMessage };

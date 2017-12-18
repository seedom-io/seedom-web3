import { keccak256 } from 'js-sha3';

function hashedRandom(myRandom, participant) {
  const hasher = new keccak256.create(256);

  const randomHex = myRandom.substr(2);
  const randomBuffer = new Buffer(randomHex, 'hex');
  hasher.update(randomBuffer);

  const participantHex = participant.substr(2);
  const participantBuffer = new Buffer(participantHex, 'hex');
  hasher.update(participantBuffer);

  return `0x${hasher.hex()}`;
}

export default hashedRandom;

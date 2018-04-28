import { BigNumber } from 'bignumber.js';
import * as bytes from '../utils/bytes';
import { zero } from '../utils/numbers';
import * as messages from '@seedom-io/seedom-crypter/messages';

const parseMaxVoteCount = maxVoteCount => {
  return new BigNumber(maxVoteCount);
};

const parseCauses = causes => {
  let causesVoteCount = zero();
  const parsedCauses = [];
  for (let causeIndex = 0; causeIndex < causes._names.length; causeIndex += 1) {
    const voteCount = new BigNumber(causes._voteCounts[causeIndex]);
    const parsedCause = {
      index: causeIndex,
      name: String(messages.message(causes._names[causeIndex])),
      caster: String(causes._casters[causeIndex]),
      voteCount
    };
    causesVoteCount = causesVoteCount.plus(voteCount);
    parsedCauses[causeIndex] = parsedCause;
  }
  return {
    causes: parsedCauses,
    causesVoteCount
  };
};

const parseVotes = votes => {
  let voteCount = zero();
  const parsedVotes = {};
  for (let voteIndex = 0; voteIndex < votes._causeIndexes.length; voteIndex += 1) {
    const causeIndex = votes._causeIndexes[voteIndex];
    const count = votes._counts[voteIndex];
    voteCount = voteCount.plus(count);
    if (causeIndex in parsedVotes) {
      parsedVotes[causeIndex] = parsedVotes[causeIndex].plus(count);
    } else {
      parsedVotes[causeIndex] = new BigNumber(count);
    }
  }
  return {
    votes: parsedVotes,
    voteCount
  };
};

const parseCastName = castName => {
  return {
    caster: String(castName._caster),
    causeIndex: new BigNumber(castName._causeIndex),
    causeName: String(messages.message(castName._causeName)),
    voteCount: new BigNumber(castName._voteCount)
  };
};

const parseCastIndex = castIndex => {
  return {
    caster: String(castIndex._caster),
    causeIndex: new BigNumber(castIndex._causeIndex),
    voteCount: new BigNumber(castIndex._voteCount)
  };
};

export {
  parseMaxVoteCount,
  parseCauses,
  parseVotes,
  parseCastName,
  parseCastIndex
};

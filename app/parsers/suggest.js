import { BigNumber } from 'bignumber.js';
import * as bytes from '../utils/bytes';

const parseStatus = status => {
  return {
    maxScore: new BigNumber(status._maxScore),
    hasRight: Boolean(status._hasRight),
    hasVoted: Boolean(status._hasVoted)
  };
};

const parseCharities = charities => {
  const parsedCharities = [];
  for (let charityIndex = 0; charityIndex < charities._names.length; charityIndex += 1) {
    const parsedCharity = {
      name: String(bytes.stringBytes(charities._names[charityIndex])),
      caster: new BigNumber(charities._casters[charityIndex]),
      totalScores: new BigNumber(charities._totalScores[charityIndex]),
      totalVotes: new BigNumber(charities._totalVotes[charityIndex])
    };
    parsedCharities[charityIndex] = parsedCharity;
  }

  return parsedCharities;
};

const parseVotes = votes => {
  const parsedVotes = {};
  for (let voteIndex = 0; voteIndex < votes._charityIndexes.length; voteIndex += 1) {
    parsedVotes[votes._charityIndexes[voteIndex]] = new BigNumber(votes._scores[voteIndex]);
  }
  return parsedVotes;
};

const parseCastIndex = castIndex => {
  return {
    caster: String(castIndex._caster),
    charityIndex: new BigNumber(castIndex._charityIndex),
    score: new BigNumber(castIndex._score)
  };
};

const parseCastName = castName => {
  return {
    caster: String(castName._caster),
    charityIndex: new BigNumber(castName._charityIndex),
    charityName: String(bytes.stringBytes(castName._charityName)),
    score: new BigNumber(castName._score)
  };
};

export {
  parseStatus,
  parseCharities,
  parseVotes,
  parseCastIndex,
  parseCastName
};

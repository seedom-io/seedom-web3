import { BigNumber } from 'bignumber.js';
import * as bytes from '../utils/bytes';
import { zero } from '../utils/numbers';

const parseCaster = caster => {
  return {
    maxScore: new BigNumber(caster._maxScore),
    maxVotes: new BigNumber(caster._maxVotes),
    totalVotes: new BigNumber(caster._totalVotes)
  };
};

const parseCharities = charities => {
  const parsedCharities = [];
  for (let charityIndex = 0; charityIndex < charities._names.length; charityIndex += 1) {
    const parsedCharity = {
      name: String(bytes.stringBytes(charities._names[charityIndex])),
      caster: String(charities._casters[charityIndex]),
      totalScores: new BigNumber(charities._totalScores[charityIndex]),
      totalVotes: new BigNumber(charities._totalVotes[charityIndex]),
    };
    // calculate average score
    parsedCharity.averageScore = parsedCharity.totalVotes.isGreaterThan(0)
      ? parsedCharity.totalScores.div(parsedCharity.totalVotes)
      : zero();
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
    score: new BigNumber(castIndex._score),
    totalVotes: new BigNumber(castIndex._totalVotes),
    charityIndex: new BigNumber(castIndex._charityIndex),
    charityTotalScores: new BigNumber(castIndex._charityTotalScores),
    charityTotalVotes: new BigNumber(castIndex._charityTotalVotes)
  };
};

const parseCastName = castName => {
  return {
    caster: String(castName._caster),
    score: new BigNumber(castName._score),
    charityIndex: new BigNumber(castName._charityIndex),
    charityName: String(bytes.stringBytes(castName._charityName))
  };
};

export {
  parseCaster,
  parseCharities,
  parseVotes,
  parseCastIndex,
  parseCastName
};

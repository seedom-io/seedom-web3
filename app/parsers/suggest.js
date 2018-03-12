import { BigNumber } from 'bignumber.js';
import * as bytes from '../utils/bytes';

const parseStatus = status => {
  return {
    maxScore: new BigNumber(status._maxScore),
    hasRight: Boolean(status._hasRight),
    canVote: Boolean(status._canVote)
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
    parsedVotes[votes._charityIndexes[voteIndex]] = votes._scores[voteIndex];
  }
  return parsedVotes;
};

const parseCastCharity = castCharity => {
  return {
    caster: String(castCharity._caster),
    charityIndex: new BigNumber(castCharity._charityIndex),
    score: new BigNumber(castCharity._score)
  };
};

const parseCastSuggest = castSuggest => {
  return {
    caster: String(castSuggest._caster),
    charityIndex: new BigNumber(castSuggest._charityIndex),
    charityName: String(bytes.stringBytes(castSuggest._charityName)),
    score: new BigNumber(castSuggest._score)
  };
};

export {
  parseStatus,
  parseCharities,
  parseVotes,
  parseCastCharity,
  parseCastSuggest
};

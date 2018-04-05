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

const parseCauses = causes => {
  const parsedCauses = [];
  for (let causeIndex = 0; causeIndex < causes._names.length; causeIndex += 1) {
    const parsedCause = {
      index: causeIndex,
      name: String(bytes.stringBytes(causes._names[causeIndex])),
      caster: String(causes._casters[causeIndex]),
      totalScores: new BigNumber(causes._totalScores[causeIndex]),
      totalVotes: new BigNumber(causes._totalVotes[causeIndex]),
    };
    // calculate average score
    parsedCause.averageScore = parsedCause.totalVotes.isGreaterThan(0)
      ? parsedCause.totalScores.div(parsedCause.totalVotes)
      : zero();
    parsedCauses[causeIndex] = parsedCause;
  }

  return parsedCauses;
};

const parseVotes = votes => {
  const parsedVotes = {};
  for (let voteIndex = 0; voteIndex < votes._causeIndexes.length; voteIndex += 1) {
    parsedVotes[votes._causeIndexes[voteIndex]] = new BigNumber(votes._scores[voteIndex]);
  }
  return parsedVotes;
};

const parseCastIndex = castIndex => {
  return {
    caster: String(castIndex._caster),
    score: new BigNumber(castIndex._score),
    totalVotes: new BigNumber(castIndex._totalVotes),
    causeIndex: new BigNumber(castIndex._causeIndex),
    causeTotalScores: new BigNumber(castIndex._causeTotalScores),
    causeTotalVotes: new BigNumber(castIndex._causeTotalVotes)
  };
};

const parseCastName = castName => {
  return {
    caster: String(castName._caster),
    score: new BigNumber(castName._score),
    causeIndex: new BigNumber(castName._causeIndex),
    causeName: String(bytes.stringBytes(castName._causeName))
  };
};

export {
  parseCaster,
  parseCauses,
  parseVotes,
  parseCastIndex,
  parseCastName
};

import { BigNumber } from 'bignumber.js';
import * as bytes from '../utils/bytes';
import { zero } from '../utils/numbers';
import * as messages from '../../../seedom-crypter/messages';

const parseCaster = caster => {
  return {
    maxScore: new BigNumber(caster._maxScore),
    maxVotes: new BigNumber(caster._maxVotes),
    votes: new BigNumber(caster._votes)
  };
};

const parseCauses = causes => {
  const parsedCauses = [];
  for (let causeIndex = 0; causeIndex < causes._names.length; causeIndex += 1) {
    const parsedCause = {
      index: causeIndex,
      name: String(messages.message(causes._names[causeIndex])),
      caster: String(causes._casters[causeIndex]),
      scores: new BigNumber(causes._scores[causeIndex]),
      votes: new BigNumber(causes._votes[causeIndex]),
    };
    // calculate average score
    parsedCause.averageScore = parsedCause.votes.isGreaterThan(0)
      ? parsedCause.scores.div(parsedCause.votes)
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
    votes: new BigNumber(castIndex._votes),
    causeIndex: new BigNumber(castIndex._causeIndex),
    causeScores: new BigNumber(castIndex._causeScores),
    causeVotes: new BigNumber(castIndex._causeVotes)
  };
};

const parseCastName = castName => {
  return {
    caster: String(castName._caster),
    score: new BigNumber(castName._score),
    causeIndex: new BigNumber(castName._causeIndex),
    causeName: String(messages.message(castName._causeName))
  };
};

export {
  parseCaster,
  parseCauses,
  parseVotes,
  parseCastIndex,
  parseCastName
};

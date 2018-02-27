import { BigNumber } from 'bignumber.js';

const epochToDate = seconds => {
  return new Date(seconds * 1000);
};

const RAISER = raiser => {
  return {
    owner: String(raiser._owner),
    charity: String(raiser._charity),
    charitySplit: new BigNumber(raiser._charitySplit),
    winnerSplit: new BigNumber(raiser._winnerSplit),
    ownerSplit: new BigNumber(raiser._ownerSplit),
    valuePerEntry: new BigNumber(raiser._valuePerEntry),
    deployTime: epochToDate(raiser._deployTime),
    revealTime: epochToDate(raiser._revealTime),
    endTime: epochToDate(raiser._endTime),
    expireTime: epochToDate(raiser._expireTime),
    destructTime: epochToDate(raiser._destructTime),
    maxParticipants: new BigNumber(raiser._maxParticipants)
  };
};

const STATE = state => {
  return {
    charityHashedRandom: String(state._charityHashedRandom),
    charityRandom: String(state._charityRandom),
    winner: String(state._winner),
    winnerRandom: String(state._winnerRandom),
    cancelled: Boolean(state._cancelled),
    totalParticipants: new BigNumber(state._totalParticipants),
    totalEntries: new BigNumber(state._totalEntries),
    totalRevealers: new BigNumber(state._totalRevealers),
    totalRevealed: new BigNumber(state._totalRevealed),
  };
};

const SEED = seed => {
  return {
    charityHashedRandom: String(seed._charityHashedRandom),
  };
};

const PARTICIPANT = participant => {
  return {
    entries: new BigNumber(participant._entries),
    hashedRandom: String(participant._hashedRandom),
    random: String(participant._random)
  };
};

const PARTICIPATION = participation => {
  return {
    participant: String(participation._participant),
    entries: new BigNumber(participation._entries),
    hashedRandom: String(participation._hashedRandom)
  };
};

const RAISE = raise => {
  return {
    participant: String(raise._participant),
    entries: new BigNumber(raise._entries),
    refund: new BigNumber(raise._refund),
  };
};

const WIN = win => {
  return {
    winner: String(win._winner),
    winnerRandom: String(win._winnerRandom),
    charityRandom: String(win._charityRandom)
  };
};

const WITHDRAW = withdrawal => {
  return {
    address: String(withdrawal._address)
  };
};

export {
  RAISER,
  STATE,
  SEED,
  PARTICIPANT,
  PARTICIPATION,
  RAISE,
  WIN,
  WITHDRAW
};

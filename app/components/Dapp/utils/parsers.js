import { BigNumber } from 'bignumber.js';

const epochToDate = seconds => {
  return new Date(seconds * 1000);
};

const parseRaiser = raiser => {
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

const parseState = state => {
  return {
    charityHashedRandom: String(state._charityHashedRandom),
    winner: String(state._winner),
    winnerRandom: String(state._winnerRandom),
    cancelled: Boolean(state._cancelled),
    totalParticipants: new BigNumber(state._totalParticipants),
    totalEntries: new BigNumber(state._totalEntries),
    totalRevealers: new BigNumber(state._totalRevealers),
    totalRevealed: new BigNumber(state._totalRevealed),
  };
};

const parseSeed = seed => {
  return {
    charityHashedRandom: String(seed._charityHashedRandom),
  };
};

const parseParticipant = participant => {
  return {
    entries: new BigNumber(participant._entries),
    hashedRandom: String(participant._hashedRandom),
    random: String(participant._random)
  };
};

const parseParticipation = participation => {
  return {
    participant: String(participation._participant),
    entries: new BigNumber(participation._entries),
    hashedRandom: String(participation._hashedRandom)
  };
};

const parseRaise = raise => {
  return {
    participant: String(raise._participant),
    entries: new BigNumber(raise._entries),
    refund: new BigNumber(raise._refund),
  };
};

const parseRevelation = revelation => {
  return {
    participant: String(revelation._participant),
    random: String(revelation._random),
    entries: new BigNumber(revelation._entries),
  };
};

const parseWin = win => {
  return {
    participant: String(win._participant),
    random: String(win._random)
  };
};

const parseWithdrawal = withdrawal => {
  return {
    address: String(withdrawal._address)
  };
};

export {
  parseRaiser,
  parseState,
  parseSeed,
  parseParticipant,
  parseParticipation,
  parseRaise,
  parseRevelation,
  parseWin,
  parseWithdrawal
};

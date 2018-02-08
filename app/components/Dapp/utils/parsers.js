const epochToDate = seconds => {
  return new Date(seconds * 1000);
};

const parseRaiser = raiser => {
  return {
    owner: String(raiser._owner),
    charity: String(raiser._charity),
    charitySplit: Number(raiser._charitySplit),
    winnerSplit: Number(raiser._winnerSplit),
    ownerSplit: Number(raiser._ownerSplit),
    valuePerEntry: Number(raiser._valuePerEntry),
    kickoffTime: epochToDate(raiser._kickoffTime),
    revealTime: epochToDate(raiser._revealTime),
    endTime: epochToDate(raiser._endTime),
    expireTime: epochToDate(raiser._expireTime),
    maxParticipants: Number(raiser._maxParticipants)
  };
};

const parseState = state => {
  return {
    charityHashedRandom: String(state._charity),
    winner: String(state._winner),
    winnerRandom: String(state._winnerRandom),
    cancelled: Boolean(state._cancelled),
    totalParticipants: Number(state._totalParticipants),
    totalEntries: Number(state._totalEntries),
    totalRevealers: Number(state._totalRevealers),
    totalRevealed: Number(state._totalRevealed),
  };
};

const parseSeed = seed => {
  return {
    charityHashedRandom: String(seed._charityHashedRandom),
  };
};

const parseParticipant = participant => {
  return {
    entries: Number(participant._entries),
    hashedRandom: String(participant._hashedRandom),
    random: String(participant._random)
  };
};

const parseParticipation = participation => {
  return {
    participant: String(participation._participant),
    entries: Number(participation._entries),
    hashedRandom: String(participation._hashedRandom)
  };
};

const parseRaise = raise => {
  return {
    participant: String(raise._participant),
    entries: Number(raise._entries),
    refund: Number(raise._refund),
  };
};

const parseRevelation = revelation => {
  return {
    participant: String(revelation._participant),
    random: String(revelation._random),
    entries: Number(revelation._entries),
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
    participant: String(withdrawal._participant)
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

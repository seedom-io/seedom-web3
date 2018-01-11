const epochToDate = seconds => {
  return new Date(seconds * 1000);
};

const parseRaiser = raiser => {
  return {
    endTime: epochToDate(raiser._endTime),
    expireTime: epochToDate(raiser._expireTime),
    kickoffTime: epochToDate(raiser._kickoffTime),
    revealTime: epochToDate(raiser._revealTime),
    valuePerEntry: Number(raiser._valuePerEntry)
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
    random: String(revelation._random)
  };
};

const parseWin = win => {
  return {
    participant: String(win._participant),
    random: String(win._random),
    charityReward: Number(win._charityReward),
    winnerReward: Number(win._winnerReward),
    ownerReward: Number(win._ownerReward),
  };
};

export {
  parseRaiser,
  parseParticipant,
  parseParticipation,
  parseRaise,
  parseRevelation,
  parseWin
};

import { BigNumber } from 'bignumber.js';

const epochToDate = seconds => {
  return new Date(seconds * 1000);
};

const parseRaiser = raiser => {
  return {
    charity: String(raiser._charity),
    charitySplit: new BigNumber(raiser._charitySplit),
    selectedSplit: new BigNumber(raiser._selectedSplit),
    owner: String(raiser._owner),
    ownerSplit: new BigNumber(raiser._ownerSplit),
    ownerSecret: String(raiser._ownerSecret),
    valuePerEntry: new BigNumber(raiser._valuePerEntry),
    deployTime: epochToDate(raiser._deployTime),
    endTime: epochToDate(raiser._endTime),
    expireTime: epochToDate(raiser._expireTime),
    destructTime: epochToDate(raiser._destructTime),
    maxParticipants: new BigNumber(raiser._maxParticipants)
  };
};

const parseState = state => {
  return {
    charitySecret: String(state._charitySecret),
    charityMessage: String(state._charityMessage),
    charityWithdrawn: Boolean(state._charityWithdrawn),
    selected: String(state._selected),
    selectedMessage: String(state._selectedMessage),
    selectedWithdrawn: Boolean(state._selectedWithdrawn),
    ownerMessage: String(state._selectedMessage),
    ownerWithdrawn: Boolean(state._selectedWithdrawn),
    cancelled: Boolean(state._cancelled),
    totalParticipants: new BigNumber(state._totalParticipants),
    totalEntries: new BigNumber(state._totalEntries)
  };
};

const parseSeed = seed => {
  return {
    charitySecret: String(seed._charitySecret),
  };
};

const parseParticipant = participant => {
  return {
    entries: new BigNumber(participant._entries),
    message: String(participant._message)
  };
};

const parseParticipation = participation => {
  return {
    participant: String(participation._participant),
    message: String(participation._message),
    entries: new BigNumber(participation._entries),
    refund: new BigNumber(participation._refund),
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
    charityMessage: String(revelation._charityMessage),
  };
};

const parseSelection = selection => {
  return {
    selected: String(selection._selected),
    selectedMessage: String(selection._selectedMessage),
    charityMessage: String(selection._charityMessage),
    ownerMessage: String(selection._ownerMessage)
  };
};

const parseWithdrawal = withdrawal => {
  return {
    address: String(withdrawal._address)
  };
};

const parseBalances = balances => {
  const finalBalances = {};
  for (const contractAddress in balances) {
    const balance = balances[contractAddress];
    // add balance entries of non-zero
    if (balance !== '0') {
      finalBalances[contractAddress] = new BigNumber(balance);
    }
  }
  return finalBalances;
};

export {
  parseRaiser,
  parseState,
  parseSeed,
  parseParticipant,
  parseParticipation,
  parseRaise,
  parseRevelation,
  parseSelection,
  parseWithdrawal,
  parseBalances
};

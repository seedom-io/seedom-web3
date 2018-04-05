import { BigNumber } from 'bignumber.js';
import * as bytes from '../utils/bytes';

const epochToDate = seconds => {
  return new Date(seconds * 1000);
};

const parseRaiser = raiser => {
  return {
    cause: String(raiser._cause),
    causeSplit: new BigNumber(raiser._causeSplit),
    participantSplit: new BigNumber(raiser._participantSplit),
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
    causeSecret: String(state._causeSecret),
    causeMessage: String(bytes.stringBytes(state._causeMessage)),
    causeWithdrawn: Boolean(state._causeWithdrawn),
    participant: String(state._participant),
    participantMessage: String(bytes.stringBytes(state._participantMessage)),
    participantWithdrawn: Boolean(state._participantWithdrawn),
    ownerMessage: String(bytes.stringBytes(state._ownerMessage)),
    ownerWithdrawn: Boolean(state._participantWithdrawn),
    cancelled: Boolean(state._cancelled),
    totalParticipants: new BigNumber(state._totalParticipants),
    totalEntries: new BigNumber(state._totalEntries)
  };
};

const parseBegin = begin => {
  return {
    causeSecret: String(begin._causeSecret),
  };
};

const parseParticipant = participant => {
  return {
    entries: new BigNumber(participant._entries),
    message: String(bytes.stringBytes(participant._message))
  };
};

const parseParticipation = participation => {
  return {
    participant: String(participation._participant),
    message: String(bytes.stringBytes(participation._message)),
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
    causeMessage: String(bytes.stringBytes(revelation._causeMessage)),
  };
};

const parseSelection = selection => {
  return {
    participant: String(selection._participant),
    participantMessage: String(bytes.stringBytes(selection._participantMessage)),
    causeMessage: String(bytes.stringBytes(selection._causeMessage)),
    ownerMessage: String(bytes.stringBytes(selection._ownerMessage))
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
  parseBegin,
  parseParticipant,
  parseParticipation,
  parseRaise,
  parseRevelation,
  parseSelection,
  parseWithdrawal,
  parseBalances
};

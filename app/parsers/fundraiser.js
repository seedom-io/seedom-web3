import { BigNumber } from 'bignumber.js';
import * as bytes from '../utils/bytes';

const epochToDate = seconds => {
  return new Date(seconds * 1000);
};

const parseDeployment = deployment => {
  return {
    cause: String(deployment._cause),
    causeSplit: new BigNumber(deployment._causeSplit),
    participantSplit: new BigNumber(deployment._participantSplit),
    owner: String(deployment._owner),
    ownerSplit: new BigNumber(deployment._ownerSplit),
    ownerSecret: String(deployment._ownerSecret),
    valuePerEntry: new BigNumber(deployment._valuePerEntry),
    deployTime: epochToDate(deployment._deployTime),
    endTime: epochToDate(deployment._endTime),
    expireTime: epochToDate(deployment._expireTime),
    destructTime: epochToDate(deployment._destructTime),
    maxParticipants: new BigNumber(deployment._maxParticipants)
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
    participants: new BigNumber(state._participants),
    entries: new BigNumber(state._entries)
  };
};

const parseBeginning = beginning => {
  return {
    causeSecret: String(beginning._causeSecret),
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
  parseDeployment,
  parseState,
  parseBeginning,
  parseParticipant,
  parseParticipation,
  parseRaise,
  parseRevelation,
  parseSelection,
  parseWithdrawal,
  parseBalances
};

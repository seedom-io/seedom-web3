import { BigNumber } from 'bignumber.js';
import * as bytes from '../utils/bytes';
import * as messages from '@seedom-io/seedom-crypter/messages';

const epochToDate = seconds => {
  return new Date(seconds * 1000);
};

const parseDeployments = deployments => {
  const finalDeployments = {};
  for (const contractAddress in deployments) {
    const deployment = deployments[contractAddress];
    finalDeployments[contractAddress] = {
      cause: String(deployment._cause),
      causeWallet: String(deployment._causeWallet),
      causeSplit: new BigNumber(deployment._causeSplit),
      participantSplit: new BigNumber(deployment._participantSplit),
      owner: String(deployment._owner),
      ownerWallet: String(deployment._ownerWallet),
      ownerSplit: new BigNumber(deployment._ownerSplit),
      ownerSecret: String(deployment._ownerSecret),
      valuePerEntry: new BigNumber(deployment._valuePerEntry),
      deployTime: epochToDate(deployment._deployTime),
      endTime: epochToDate(deployment._endTime),
      expireTime: epochToDate(deployment._expireTime),
      destructTime: epochToDate(deployment._destructTime)
    };
  }
  return finalDeployments;
};

const parseStates = states => {
  const finalStates = {};
  for (const contractAddress in states) {
    const state = states[contractAddress];
    finalStates[contractAddress] = {
      causeSecret: String(state._causeSecret),
      causeMessage: String(messages.message(state._causeMessage)),
      causeWithdrawn: Boolean(state._causeWithdrawn),
      participant: String(state._participant),
      participantMessage: String(messages.message(state._participantMessage)),
      participantWithdrawn: Boolean(state._participantWithdrawn),
      ownerMessage: String(messages.message(state._ownerMessage)),
      ownerWithdrawn: Boolean(state._participantWithdrawn),
      cancelled: Boolean(state._cancelled),
      participants: new BigNumber(state._participants),
      entries: new BigNumber(state._entries)
    };
  }
  return finalStates;
};

const parseBeginning = beginning => {
  return {
    causeSecret: String(beginning._causeSecret),
  };
};

const parseParticipant = participant => {
  return {
    entries: new BigNumber(participant._entries),
    message: String(messages.message(participant._message))
  };
};

const parseParticipation = participation => {
  return {
    participant: String(participation._participant),
    message: String(messages.message(participation._message)),
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
    causeMessage: String(messages.message(revelation._causeMessage)),
  };
};

const parseSelection = selection => {
  return {
    participant: String(selection._participant),
    participantMessage: String(messages.message(selection._participantMessage)),
    causeMessage: String(messages.message(selection._causeMessage)),
    ownerMessage: String(messages.message(selection._ownerMessage))
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
  parseDeployments,
  parseStates,
  parseBeginning,
  parseParticipant,
  parseParticipation,
  parseRaise,
  parseRevelation,
  parseSelection,
  parseWithdrawal,
  parseBalances
};

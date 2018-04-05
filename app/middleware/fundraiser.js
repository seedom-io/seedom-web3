import * as ethereumActions from '../actions/ethereum';
import * as fundraiserParser from '../parsers/fundraiser';

const seedomMiddleware = store => {
  const handleRaiser = (next, action) => {
    return next({
      type: 'FUNDRAISER_RAISER',
      raiser: fundraiserParser.parseRaiser(action.data)
    });
  };

  const handleState = (next, action) => {
    return next({
      type: 'FUNDRAISER_STATE',
      state: fundraiserParser.parseState(action.data)
    });
  };

  const handleParticipant = (next, action) => {
    return next({
      type: 'FUNDRAISER_PARTICIPANT',
      participant: fundraiserParser.parseParticipant(action.data)
    });
  };

  const handleEthereumCallData = (next, action) => {
    const { contractName } = action;
    // only check for seedom data
    if (contractName !== 'seedom') {
      return next(action);
    }

    const { method } = action;
    switch (method) {
      case 'raiser':
        return handleRaiser(next, action);
      case 'state':
        return handleState(next, action);
      case 'participants':
        return handleParticipant(next, action);
      default:
        return next(action);
    }
  };

  const handleBalances = (next, action) => {
    return next({
      type: 'FUNDRAISER_BALANCES',
      balances: fundraiserParser.parseBalances(action.data)
    });
  };

  const handleEthereumAllCallData = (next, action) => {
    const { contractName } = action;
    // only check for seedom data
    if (contractName !== 'seedom') {
      return next(action);
    }

    const { method } = action;
    switch (method) {
      case 'balance':
        return handleBalances(next, action);
      default:
        return next(action);
    }
  };

  const handleEthereumUser = (next, action) => {
    const { account } = action;
    store.dispatch(ethereumActions.call({ contractName: 'seedom', method: 'participants', args: [account] }));
    store.dispatch(ethereumActions.allCall({ contractName: 'seedom', method: 'balance' }));
    return next(action);
  };

  const handleEthereumRefresh = (next, action) => {
    const state = store.getState();
    const { primaryContractAddresses } = state.ethereum;
    const { contractAddresses } = action;
    if (contractAddresses.indexOf(primaryContractAddresses.seedom) > -1) {
      store.dispatch(ethereumActions.call({ contractName: 'seedom', method: 'raiser' }));
      store.dispatch(ethereumActions.call({ contractName: 'seedom', method: 'state' }));
    }
    return next(action);
  };

  const handleEthereumEvent = (next, action) => {
    const { contractName } = action;
    // only check for seedom data
    if (contractName !== 'seedom') {
      return next(action);
    }

    const { eventName } = action;
    const type = `FUNDRAISER_${eventName}`;
    switch (eventName) {
      case 'SEED':
        return next({ ...action, type, seed: fundraiserParser.parseBegin(action.values) });
      case 'PARTICIPATION':
        return next({ ...action, type, participation: fundraiserParser.parseParticipation(action.values) });
      case 'RAISE':
        return next({ ...action, type, raise: fundraiserParser.parseRaise(action.values) });
      case 'REVELATION':
        return next({ ...action, type, revelation: fundraiserParser.parseRevelation(action.values) });
      case 'SELECTION':
        return next({ ...action, type, selection: fundraiserParser.parseSelection(action.values) });
      case 'WITHDRAWAL':
        return next({ ...action, type, withdrawal: fundraiserParser.parseWithdrawal(action.values) });
      case 'CANCELLATION':
        return next({ ...action, type });
      default:
        return next(action);
    }
  };

  return next => action => {
    const { type } = action;
    switch (type) {
      case 'ETHEREUM_EVENT':
        return handleEthereumEvent(next, action);
      case 'ETHEREUM_CALL_DATA':
        return handleEthereumCallData(next, action);
      case 'ETHEREUM_ALLCALL_DATA':
        return handleEthereumAllCallData(next, action);
      case 'ETHEREUM_USER':
        return handleEthereumUser(next, action);
      case 'ETHEREUM_REFRESH':
        return handleEthereumRefresh(next, action);
      default:
        return next(action);
    }
  };
};

export default seedomMiddleware;

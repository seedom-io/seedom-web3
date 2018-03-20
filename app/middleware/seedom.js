import * as ethereumActions from '../actions/ethereum';
import * as seedomParser from '../parsers/seedom';

const seedomMiddleware = store => {
  const handleRaiser = (next, action) => {
    return next({
      type: 'SEEDOM_RAISER',
      raiser: seedomParser.parseRaiser(action.data)
    });
  };

  const handleState = (next, action) => {
    return next({
      type: 'SEEDOM_STATE',
      state: seedomParser.parseState(action.data)
    });
  };

  const handleParticipant = (next, action) => {
    return next({
      type: 'SEEDOM_PARTICIPANT',
      participant: seedomParser.parseParticipant(action.data)
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
      type: 'SEEDOM_BALANCES',
      balances: seedomParser.parseBalances(action.data)
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
    const type = `SEEDOM_${eventName}`;
    switch (eventName) {
      case 'SEED':
        return next({ ...action, type, seed: seedomParser.parseSeed(action.values) });
      case 'PARTICIPATION':
        return next({ ...action, type, participation: seedomParser.parseParticipation(action.values) });
      case 'RAISE':
        return next({ ...action, type, raise: seedomParser.parseRaise(action.values) });
      case 'REVELATION':
        return next({ ...action, type, revelation: seedomParser.parseRevelation(action.values) });
      case 'SELECTION':
        return next({ ...action, type, selection: seedomParser.parseSelection(action.values) });
      case 'WITHDRAWAL':
        return next({ ...action, type, withdrawal: seedomParser.parseWithdrawal(action.values) });
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

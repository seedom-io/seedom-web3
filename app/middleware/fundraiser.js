import * as ethereumActions from '../actions/ethereum';
import * as fundraiserParser from '../parsers/fundraiser';

const fundraiserMiddleware = store => {
  const handleParticipant = (next, action) => {
    return next({
      type: 'FUNDRAISER_PARTICIPANT',
      participant: fundraiserParser.parseParticipant(action.data)
    });
  };

  const handleEthereumCallData = (next, action) => {
    const { contractName } = action;
    // only check for fundraiser data
    if (contractName !== 'fundraiser') {
      return next(action);
    }

    const { method } = action;
    switch (method) {
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

  const handleDeployments = (next, action) => {
    return next({
      type: 'FUNDRAISER_DEPLOYMENTS',
      deployments: fundraiserParser.parseDeployments(action.data)
    });
  };

  const handleStates = (next, action) => {
    return next({
      type: 'FUNDRAISER_STATES',
      states: fundraiserParser.parseStates(action.data)
    });
  };

  const handleEthereumAllCallData = (next, action) => {
    const { contractName } = action;
    // only check for fundraiser data
    if (contractName !== 'fundraiser') {
      return next(action);
    }

    const { method } = action;
    switch (method) {
      case 'balance':
        return handleBalances(next, action);
      case 'deployment':
        return handleDeployments(next, action);
      case 'state':
        return handleStates(next, action);
      default:
        return next(action);
    }
  };

  const handleEthereumUser = (next, action) => {
    const { account } = action;
    store.dispatch(ethereumActions.call({ contractName: 'fundraiser', method: 'participants', args: [account] }));
    store.dispatch(ethereumActions.allCall({ contractName: 'fundraiser', method: 'balance' }));
    return next(action);
  };

  const handleEthereumRefresh = (next, action) => {
    const state = store.getState();
    const { primaryContractAddresses } = state.ethereum;
    const { contractAddresses } = action;
    if (contractAddresses.indexOf(primaryContractAddresses.fundraiser) > -1) {
      store.dispatch(ethereumActions.allCall({ contractName: 'fundraiser', method: 'state' }));
      store.dispatch(ethereumActions.allCall({ contractName: 'fundraiser', method: 'deployment' }));
    }
    return next(action);
  };

  const handleEthereumEvent = (next, action) => {
    const { contractName } = action;
    // only check for fundraiser data
    if (contractName !== 'fundraiser') {
      return next(action);
    }

    const { eventName } = action;
    const type = `FUNDRAISER_${eventName}`;
    switch (eventName) {
      case 'BEGINNING':
        return next({ ...action, type, beginning: fundraiserParser.parseBeginning(action.values) });
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

export default fundraiserMiddleware;

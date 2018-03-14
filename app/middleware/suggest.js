import * as ethereumActions from '../actions/ethereum';
import * as suggestParser from '../parsers/suggest';

const suggestMiddleware = store => {
  const handleStatus = (next, action) => {
    return next({
      type: 'SUGGEST_STATUS',
      status: suggestParser.parseStatus(action.data)
    });
  };

  const handleCharities = (next, action) => {
    return next({
      type: 'SUGGEST_CHARITIES',
      charities: suggestParser.parseCharities(action.data)
    });
  };

  const handleVotes = (next, action) => {
    return next({
      type: 'SUGGEST_VOTES',
      votes: suggestParser.parseVotes(action.data)
    });
  };

  const handleEthereumCallData = (next, action) => {
    const { contractName } = action;
    // only check for suggest data
    if (contractName !== 'suggest') {
      return next(action);
    }

    const { method } = action;
    switch (method) {
      case 'status':
        return handleStatus(next, action);
      case 'charities':
        return handleCharities(next, action);
      case 'votes':
        return handleVotes(next, action);
      default:
        return next(action);
    }
  };

  const handleEthereumRefresh = (next, action) => {
    const state = store.getState();
    const { primaryContractAddresses } = state.ethereum;
    const { contractAddresses } = action;
    if (contractAddresses.indexOf(primaryContractAddresses.suggest) > -1) {
      store.dispatch(ethereumActions.call({ contractName: 'suggest', method: 'status' }));
      store.dispatch(ethereumActions.call({ contractName: 'suggest', method: 'charities' }));
      store.dispatch(ethereumActions.call({ contractName: 'suggest', method: 'votes' }));
    }
    return next(action);
  };

  const handleEthereumEvent = (next, action) => {
    const { contractName } = action;
    // only check for suggest data
    if (contractName !== 'suggest') {
      return next(action);
    }

    const { eventName } = action;
    const type = `SUGGEST_${eventName}`;
    switch (eventName) {
      case 'CASTINDEX':
        return next({ ...action, type, castIndex: suggestParser.parseCastIndex(action.values) });
      case 'CASTNAME':
        return next({ ...action, type, castName: suggestParser.parseCastName(action.values) });
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
      case 'ETHEREUM_REFRESH':
        return handleEthereumRefresh(next, action);
      default:
        return next(action);
    }
  };
};

export default suggestMiddleware;

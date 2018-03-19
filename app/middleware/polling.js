import * as ethereumActions from '../actions/ethereum';
import * as pollingParser from '../parsers/polling';

const pollingMiddleware = store => {
  const handleCaster = (next, action) => {
    return next({
      type: 'POLLING_CASTER',
      caster: pollingParser.parseCaster(action.data)
    });
  };

  const handleCharities = (next, action) => {
    return next({
      type: 'POLLING_CHARITIES',
      charities: pollingParser.parseCharities(action.data)
    });
  };

  const handleVotes = (next, action) => {
    return next({
      type: 'POLLING_VOTES',
      votes: pollingParser.parseVotes(action.data)
    });
  };

  const handleEthereumCallData = (next, action) => {
    const { contractName } = action;
    // only check for polling data
    if (contractName !== 'polling') {
      return next(action);
    }

    const { method } = action;
    switch (method) {
      case 'caster':
        return handleCaster(next, action);
      case 'charities':
        return handleCharities(next, action);
      case 'votes':
        return handleVotes(next, action);
      default:
        return next(action);
    }
  };

  const handleEthereumUser = (next, action) => {
    store.dispatch(ethereumActions.call({ contractName: 'polling', method: 'caster' }));
    store.dispatch(ethereumActions.call({ contractName: 'polling', method: 'votes' }));
    return next(action);
  };

  const handleEthereumRefresh = (next, action) => {
    const state = store.getState();
    const { primaryContractAddresses } = state.ethereum;
    const { contractAddresses } = action;
    if (contractAddresses.indexOf(primaryContractAddresses.polling) > -1) {
      store.dispatch(ethereumActions.call({ contractName: 'polling', method: 'charities' }));
      return handleEthereumUser(next, action);
    }
    return next(action);
  };

  const handleEthereumEvent = (next, action) => {
    const { contractName } = action;
    // only check for polling data
    if (contractName !== 'polling') {
      return next(action);
    }

    const { eventName } = action;
    const type = `POLLING_${eventName}`;
    switch (eventName) {
      case 'CASTINDEX':
        return next({ ...action, type, castIndex: pollingParser.parseCastIndex(action.values) });
      case 'CASTNAME':
        return next({ ...action, type, castName: pollingParser.parseCastName(action.values) });
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
      case 'ETHEREUM_USER':
        return handleEthereumUser(next, action);
      default:
        return next(action);
    }
  };
};

export default pollingMiddleware;

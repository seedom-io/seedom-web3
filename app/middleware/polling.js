import * as ethereumActions from '../actions/ethereum';
import * as pollingParser from '../parsers/polling';

const pollingMiddleware = store => {
  const handleMaxVoteCount = (next, action) => {
    return next({
      type: 'POLLING_MAX_VOTE_COUNT',
      maxVoteCount: pollingParser.parseMaxVoteCount(action.data)
    });
  };

  const handleCauses = (next, action) => {
    const { causes, causesVoteCount } = pollingParser.parseCauses(action.data);
    return next({
      type: 'POLLING_CAUSES',
      causes,
      causesVoteCount
    });
  };

  const handleVotes = (next, action) => {
    const { votes, voteCount } = pollingParser.parseVotes(action.data);
    return next({
      type: 'POLLING_VOTES',
      votes,
      voteCount
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
      case 'maxVoteCount':
        return handleMaxVoteCount(next, action);
      case 'causes':
        return handleCauses(next, action);
      case 'votes':
        return handleVotes(next, action);
      default:
        return next(action);
    }
  };

  const handleEthereumUser = (next, action) => {
    store.dispatch(ethereumActions.call({ contractName: 'polling', method: 'maxVoteCount' }));
    store.dispatch(ethereumActions.call({ contractName: 'polling', method: 'votes' }));
    return next(action);
  };

  const handleEthereumRefresh = (next, action) => {
    const state = store.getState();
    const { primaryContractAddresses } = state.ethereum;
    const { contractAddresses } = action;
    if (contractAddresses.indexOf(primaryContractAddresses.polling) > -1) {
      store.dispatch(ethereumActions.call({ contractName: 'polling', method: 'causes' }));
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

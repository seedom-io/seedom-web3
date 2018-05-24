import { BigNumber } from 'bignumber.js';

const getNewState = (prevState) => {
  return { ...prevState };
};

const handleMaxVoteCount = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.maxVoteCount = action.maxVoteCount;
  return newState;
};

const handleCauses = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.causes = action.causes;
  newState.causesVoteCount = action.causesVoteCount;
  return newState;
};

const handleVotes = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.votes = action.votes;
  newState.voteCount = action.voteCount;
  return newState;
};

const handleCastName = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const {
    caster,
    causeIndex,
    causeName,
    voteCount
  } = action.castName;

  const newState = getNewState(prevState);
  // update is loading
  newState.isLoading = false;
  // update total votes across all causes
  newState.causesVoteCount = newState.causesVoteCount.plus(voteCount);
  // add new cause
  newState.causes[causeIndex] = {
    index: causeIndex,
    name: causeName,
    caster,
    voteCount
  };

  // add our votes to our votes
  if (caster === newState.account) {
    newState.voteCount = newState.voteCount.plus(voteCount);
    newState.votes[causeIndex] = voteCount;
  }

  return newState;
};


const handleCastIndex = (prevState, action) => {
  if (action.old) {
    return prevState;
  }

  const {
    caster,
    causeIndex,
    voteCount
  } = action.castIndex;

  const newState = getNewState(prevState);
  // update is loading
  newState.isLoading = false;
  // update total votes across all causes
  newState.causesVoteCount = newState.causesVoteCount.plus(voteCount);
  // update cause
  const cause = newState.causes[causeIndex];
  cause.voteCount = cause.voteCount.plus(voteCount);
  // update our vote
  if (caster === newState.account) {
    newState.voteCount = newState.voteCount.plus(voteCount);
    if (causeIndex in newState.votes) {
      newState.votes[causeIndex] = newState.votes[causeIndex].plus(voteCount);
    } else {
      newState.votes[causeIndex] = voteCount;
    }
  }

  return newState;
};

const handleFundraiserParticipation = (prevState, action) => {
  if (action.old || (action.participation.participant !== prevState.account)) {
    return prevState;
  }

  const newState = getNewState(prevState);
  newState.maxVoteCount = new BigNumber(1);
  return newState;
};

const pollingReducer = (prevState = null, action) => {
  switch (action.type) {
    case 'POLLING_MAX_VOTE_COUNT':
      return handleMaxVoteCount(prevState, action);
    case 'POLLING_CAUSES':
      return handleCauses(prevState, action);
    case 'POLLING_VOTES':
      return handleVotes(prevState, action);
    case 'POLLING_CASTINDEX':
      return handleCastIndex(prevState, action);
    case 'POLLING_CASTNAME':
      return handleCastName(prevState, action);
    case 'FUNDRAISER_PARTICIPATION':
      return handleFundraiserParticipation(prevState, action);
    default:
      return prevState;
  }
};

export default pollingReducer;

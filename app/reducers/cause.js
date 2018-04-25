const getNewState = (prevState) => {
  return { ...prevState };
};

const handleCause = (prevState, action) => {
  const newState = getNewState(prevState);
  newState.cause = action.cause;
  return newState;
};

const causeReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'CAUSE_CAUSE':
      return handleCause(prevState, action);
    default:
      return prevState;
  }
};

export default causeReducer;

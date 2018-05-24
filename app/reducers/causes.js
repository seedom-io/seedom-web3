const handleCause = (prevState, action) => {
  const newState = { ...prevState };
  newState[action.contractAddress] = action.cause;
  return newState;
};

const causesReducer = (prevState = null, action) => {
  switch (action.type) {
    case 'CAUSE':
      return handleCause(prevState, action);
    default:
      return prevState;
  }
};

export default causesReducer;

const handleCause = (prevState, action) => {
  return { ...prevState, ...action.cause };
};

const causeReducer = (prevState = null, action) => {
  switch (action.type) {
    case 'CAUSE':
      return handleCause(prevState, action);
    default:
      return prevState;
  }
};

export default causeReducer;

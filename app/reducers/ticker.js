const handleCause = (prevState, action) => {
  return { ...prevState, ...action.ticker };
};

const tickerReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'TICKER':
      return handleCause(prevState, action);
    default:
      return prevState;
  }
};

export default tickerReducer;

import axios from 'axios';

const TICKER_URL = 'https://api.coinmarketcap.com/v2/ticker/1027/';
const POLL_DELAY = 3600000; // 1 hour

const tickerMiddleware = store => {
  const updateTicker = () => {
    axios.get(TICKER_URL)
      .then((ticker) => {
        store.dispatch({ type: 'TICKER', ticker: ticker.data.data });
      });
  };

  updateTicker();
  setInterval(() => {
    updateTicker();
  }, POLL_DELAY);

  return next => action => next(action);
};

export default tickerMiddleware;

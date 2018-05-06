import axios from 'axios';

const coinMarketCapTickerUrl = 'https://api.coinmarketcap.com/v2/ticker/1027/';

const tickerMiddleware = store => {
  const handleFundraiserDeployment = (next, action) => {
    axios.get(coinMarketCapTickerUrl)
      .then((ticker) => {
        store.dispatch({ type: 'TICKER', ticker: ticker.data.data });
      });
    return next(action);
  };

  return next => action => {
    const { type } = action;
    switch (type) {
      case 'FUNDRAISER_DEPLOYMENT':
        return handleFundraiserDeployment(next, action);
      default:
        return next(action);
    }
  };
};

export default tickerMiddleware;

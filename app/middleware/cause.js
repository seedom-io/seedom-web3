import axios from 'axios';
import * as causesResolver from '@seedom-io/seedom-resolver/causes';

const sampleCause = {
  name: 'Seedom',
  image: 'seedom',
  url: 'seedom.io',
  video: 'nj2QNP9gEKA',
  tagline: 'seeding the future of philanthropy'
};

const causeMiddleware = store => {
  const handleFundraiserDeployment = (next, action) => {
    if (process.env.NODE_ENV === 'production') {
      axios.get(causesResolver.getJsonUrl(action.deployment.cause))
        .then((cause) => {
          store.dispatch({ type: 'CAUSE', cause: cause.data });
        });
    } else {
      store.dispatch({ type: 'CAUSE', cause: sampleCause });
    }
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

export default causeMiddleware;

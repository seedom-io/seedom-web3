import * as causesResolver from '@seedom-io/seedom-resolver/causes';

const sampleCause = {
  name: 'Seedom',
  url: 'seedom.io',
  video: 'nj2QNP9gEKA',
  tagline: 'seeding the future of philanthropy'
};

const causeMiddleware = store => {
  const handleFundraiserDeployment = (next, action) => {
    if (ENV === 'production') {
      fetch(causesResolver.getJsonUrl(action.deployment.cause))
        .then(results => results.json())
        .then((cause) => {
          store.dispatch({ type: 'CAUSE_CAUSE', cause });
        });
    } else {
      store.dispatch({ type: 'CAUSE_CAUSE', cause: sampleCause });
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

import * as causesResolver from '@seedom-io/seedom-resolver/causes';

const causeMiddleware = store => {
  const handleFundraiserDeployment = (next, action) => {
    fetch(causesResolver.getJsonUrl(action.deployment.cause))
      .then(results => results.json())
      .then((cause) => {
        return next({
          type: 'CAUSE_CAUSE',
          cause
        });
      });
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

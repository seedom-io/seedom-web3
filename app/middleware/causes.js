import axios from 'axios';
import * as causesResolver from '@seedom-io/seedom-resolver/causes';

const sampleCause = {
  name: 'Seedom',
  image: 'seedom',
  url: 'seedom.io',
  video: 'nj2QNP9gEKA',
  tagline: 'seeding the future of philanthropy'
};

const causesMiddleware = store => {
  const handleFundraiserDeployments = (next, action) => {
    // grab the cause json for each deployment
    for (const contractAddress in action.deployments) {
      const deployment = action.deployments[contractAddress];
      axios.get(causesResolver.getJsonUrl(deployment.cause)).then((cause) => {
        store.dispatch({ type: 'CAUSE', contractAddress, cause: cause.data });
      });
    }
    return next(action);
  };

  return next => action => {
    const { type } = action;
    switch (type) {
      case 'FUNDRAISER_DEPLOYMENTS':
        return handleFundraiserDeployments(next, action);
      default:
        return next(action);
    }
  };
};

export default causesMiddleware;

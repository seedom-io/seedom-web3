import React from 'react';
import Loadable from 'react-loadable';

const SeedomLoadable = Loadable({
  loader: () => import('./Seedom'),
  loading: () => <div>Loading</div>
});

export default SeedomLoadable;

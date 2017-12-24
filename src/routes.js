import { App, NotFound } from 'containers';
import Seedom from 'containers/Seedom/Loadable';

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Seedom },
      { component: NotFound }
    ]
  }
];

export default routes;

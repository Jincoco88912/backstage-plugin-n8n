import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const n8NPlugin = createPlugin({
  id: 'n8n',
  routes: {
    root: rootRouteRef,
  },
});

export const N8nIndexPage = n8NPlugin.provide(
  createRoutableExtension({
    name: 'N8nIndexPage',
    component: () =>
      import('./components').then(m => m.N8nIndexPage),
    mountPoint: rootRouteRef,
  }),
);

export const N8nComponentPage = n8NPlugin.provide(
  createRoutableExtension({
    name: 'N8nComponentPage',
    component: () =>
      import('./components').then(m => m.N8nComponentPage),
    mountPoint: rootRouteRef,
  }),
);

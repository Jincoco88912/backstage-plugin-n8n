import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes.esm.js';

const n8NPlugin = createPlugin({
  id: "n8n",
  routes: {
    root: rootRouteRef
  }
});
const N8nIndexPage = n8NPlugin.provide(
  createRoutableExtension({
    name: "N8nIndexPage",
    component: () => import('./components/index.esm.js').then((m) => m.N8nIndexPage),
    mountPoint: rootRouteRef
  })
);
const N8nComponentPage = n8NPlugin.provide(
  createRoutableExtension({
    name: "N8nComponentPage",
    component: () => import('./components/index.esm.js').then((m) => m.N8nComponentPage),
    mountPoint: rootRouteRef
  })
);

export { N8nComponentPage, N8nIndexPage, n8NPlugin };
//# sourceMappingURL=plugin.esm.js.map

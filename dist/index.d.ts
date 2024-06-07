/// <reference types="react" />
import * as react from 'react';
import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';

declare const n8NPlugin: _backstage_core_plugin_api.BackstagePlugin<{
    root: _backstage_core_plugin_api.RouteRef<undefined>;
}, {}, {}>;
declare const N8nIndexPage: () => react.JSX.Element;
declare const N8nComponentPage: () => react.JSX.Element;

export { N8nComponentPage, N8nIndexPage, n8NPlugin };

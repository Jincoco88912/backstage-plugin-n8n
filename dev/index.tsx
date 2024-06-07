import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { n8NPlugin, N8nIndexPage } from '../src/plugin';

createDevApp()
  .registerPlugin(n8NPlugin)
  .addPage({
    element: <N8nIndexPage />,
    title: 'Root Page',
    path: '/n8n',
  })
  .render();

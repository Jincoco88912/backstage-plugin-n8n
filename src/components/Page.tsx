import React from 'react';
import { Page, Header, Content } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { configApiRef } from '@backstage/core-plugin-api';

export const N8nIndexPage = () => {
  const configApi = useApi(configApiRef);
  const n8nBaseUrl = configApi.getString('n8n.baseUrl');

  return (
    <Page themeId="tool">
      <Header title="n8n" subtitle="這是一個n8n嵌入視窗的使用示例，持續開發中... admin@admin.com / @A123123" />
      <Content>
        <iframe
          src={n8nBaseUrl}
          title="n8n-iframe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        />
      </Content>
    </Page>
  );
};

export const N8nComponentPage = () => {
  const configApi = useApi(configApiRef);
  const n8nBaseUrl = configApi.getString('n8n.baseUrl');

  return (
    <Page themeId="tool">
      <Content>
        <iframe
          src={n8nBaseUrl}
          title="n8n-iframe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        />
      </Content>
    </Page>
  );
};

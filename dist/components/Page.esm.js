import React from 'react';
import { Page, Header, Content } from '@backstage/core-components';
import { useApi, configApiRef } from '@backstage/core-plugin-api';

const N8nIndexPage = () => {
  const configApi = useApi(configApiRef);
  const n8nBaseUrl = configApi.getString("n8n.baseUrl");
  return /* @__PURE__ */ React.createElement(Page, { themeId: "tool" }, /* @__PURE__ */ React.createElement(Header, { title: "n8n", subtitle: "\u9019\u662F\u4E00\u500Bn8n\u5D4C\u5165\u8996\u7A97\u7684\u4F7F\u7528\u793A\u4F8B\uFF0C\u6301\u7E8C\u958B\u767C\u4E2D... admin@admin.com / @A123123" }), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src: n8nBaseUrl,
      title: "n8n-iframe",
      width: "100%",
      height: "100%",
      style: { border: 0 }
    }
  )));
};
const N8nComponentPage = () => {
  const configApi = useApi(configApiRef);
  const n8nBaseUrl = configApi.getString("n8n.baseUrl");
  return /* @__PURE__ */ React.createElement(Page, { themeId: "tool" }, /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src: n8nBaseUrl,
      title: "n8n-iframe",
      width: "100%",
      height: "100%",
      style: { border: 0 }
    }
  )));
};

export { N8nComponentPage, N8nIndexPage };
//# sourceMappingURL=Page.esm.js.map

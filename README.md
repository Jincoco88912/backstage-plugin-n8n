
# Backstage Plugin for N8n

This plugin integrates N8n into your Backstage application, providing seamless access to your automation workflows directly from Backstage.

## Setup

### 1. Add the plugin to your frontend app

```bash
cd packages/app && yarn add @jincoco/backstage-plugin-n8n-frontend
```

### 2. Configure the plugin in `app-config.yaml`

Add the following configuration to your `app-config.yaml` file:

```yaml
# app-config.yaml
n8n:
  baseUrl: https://your.n8n.server
```

### 3. Import and use the components

The plugin provides two main components:

- `N8nIndexPage`: This component can embed any dashboard.
- `N8nComponentPage`: This component is more compatible with a component page and can also embed any dashboard.

Here's an example of how to use these components in your Backstage app:

```tsx
// Example In your routes configuration file
// App.tsx
import { N8nIndexPage } from '@jincoco/backstage-plugin-n8n-frontend';

// Adding N8nIndexPage to your routes
<Route path="/n8n" element={<N8nIndexPage />} />
```

### Ensure that your N8n server allows embedding in an iframe

Add the following environment variable to your N8n service configuration in the docker-compose file:

```bash
N8N_DISABLE_UI_ACCESS=false
```
Example of setting this in a docker-compose.yml file:

```yaml
  n8n:
    image: docker.n8n.io/n8nio/n8n
    container_name: n8n
    restart: always
    ports:
        - "5678:5678"
    environment:
        - WEBHOOK_URL=https://your.n8n.server
        - N8N_SECURE_COOKIE=false
        - N8N_DISABLE_UI_ACCESS=false
        - N8N_SESSION_COOKIE_SAMESITE=none
    volumes:
        - 'n8n_data:/home/node/.n8n'
    networks:
        - app-network
```
## Features

- **Embed N8n Dashboards**: Easily embed and interact with N8n dashboards within your Backstage application.
- **Seamless Integration**: Provides a smooth and integrated experience for accessing N8n workflows and automation tasks.
- **Configurable and Flexible**: Easily configure the plugin to point to your N8n server and customize the embedded dashboards as needed.

## Screenshots
![alt text](https://i.imgur.com/0X77q0T.png)


## Contributing

We welcome contributions to improve this plugin. If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.
# @redimpulz/eslint-config

Shared ESLint configuration for Redimpulz projects.

## Installation

```bash
npm install --save-dev @redimpulz/eslint-config eslint typescript
```

## Usage

### Base Configuration

For TypeScript projects:

```js
// eslint.config.js
import { baseConfig } from '@redimpulz/eslint-config/base';

export default baseConfig;
```

### React Configuration

For React projects:

```js
// eslint.config.js
import { reactConfig } from '@redimpulz/eslint-config/react-js';

export default reactConfig;
```

### Next.js Configuration

For Next.js projects:

```js
// eslint.config.js
import { nextConfig } from '@redimpulz/eslint-config/next-js';

export default nextConfig;
```

## Features

- **Base Config**: TypeScript, Import ordering, Turbo monorepo support, Prettier compatibility
- **React Config**: React and React Hooks rules with browser globals
- **Next.js Config**: Next.js specific rules and Core Web Vitals

## Peer Dependencies

- `eslint` ^9.0.0
- `typescript` ^5.0.0

## License

MIT

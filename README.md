# waiit

[![npm version](https://img.shields.io/npm/v/waiit.svg)](https://www.npmjs.com/package/waiit)
[![license](https://img.shields.io/npm/l/waiit.svg)](https://github.com/Raju/waiit/blob/main/LICENSE)

Promise-based delay utility. Tiny, typed, zero dependencies.


## Features

🪶 Lightweight (1 line) · ⚡ Simple async/await API · 📦 TypeScript ready · 🔧 Flexible · 🌐 Universal (Node.js & Browser)


## Install

```bash
npm install waiit
```

## API

```ts
wait(ms?: number): Promise<void>
```

| Parameter | Type     | Default | Description                          |
|-----------|----------|---------|--------------------------------------|
| `ms`      | `number` | `0`     | Delay in milliseconds                |

**Returns:** A `Promise` that resolves after the specified time.


## Usage

```js
// CommonJS
const wait = require('waiit');

// ES Modules
import wait from 'waiit';

// Browser (CDN)
import wait from 'https://unpkg.com/waiit/app.js';
```

```js
await wait(2000);  // Wait 2 seconds
await wait();      // Resolve immediately
```

### Retry with delay
```js
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url);
    } catch (e) {
      if (i < retries - 1) await wait(1000);
    }
  }
  throw new Error('Failed');
}
```

### Sequential execution
```js
for (const step of steps) {
  console.log(step.message);
  wait(step.delay);
}
```

## License

[MIT](LICENSE) © Raju Dhami

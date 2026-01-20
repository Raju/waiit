# waiit

[![npm version](https://img.shields.io/npm/v/waiit.svg)](https://www.npmjs.com/package/waiit)
[![license](https://img.shields.io/npm/l/waiit.svg)](https://github.com/Raju/waiit/blob/main/LICENSE)

Promise-based delay utility. Tiny, typed, zero dependencies.


## Features

🪶 Lightweight (1 line) · ⚡ Simple async/await API · 📦 TypeScript ready · 🔧 Flexible · 🌐 Universal (Node.js & Browser) · 💻 CLI support


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

### In Code

```js
// CommonJS
const wait = require('waiit');

// ES Modules
import wait from 'waiit';

// Browser (CDN)
import wait from 'https://unpkg.com/waiit/app.js';
```

**Basic examples:**
```js
await wait(2000);  // Pause for 2 seconds
await wait(500);   // Pause for 500ms
await wait();      // Continue immediately (0ms)
```

**Retry with delay:**
```js
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url);
    } catch (e) {
      if (i < retries - 1) {
        console.log(`Retry ${i + 1}...`);
        await wait(1000);  // Wait 1s between retries
      }
    }
  }
  throw new Error('Max retries reached');
}
```

**Sequential execution:**
```js
console.log('Starting...');
await wait(1000);
console.log('After 1 second');
await wait(2000);
console.log('After 3 seconds total');
```

### In Terminal (CLI)

```bash
# Via npx (no install needed)
npx waiit 2000   # Wait 2 seconds, then exit
echo "Done!"

# Or install globally
npm i -g waiit
waiit 3000 && echo "3 seconds passed"

# Use in shell scripts
echo "Starting..."
waiit 1000
echo "Finished"
```

**Shell script example:**
```bash
#!/bin/bash
echo "Build starting..."
npm run build
waiit 2000  # Give time for build artifacts to settle
echo "Deploying..."
npm run deploy
```

## License

[MIT](LICENSE) © [Raju Dhami](https://github.com/Raju)

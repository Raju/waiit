# waiit

[![npm version](https://img.shields.io/npm/v/waiit.svg)](https://www.npmjs.com/package/waiit)
[![license](https://img.shields.io/npm/l/waiit.svg)](https://github.com/Raju/waiit/blob/main/LICENSE)

Promise-based delay utility. Tiny, typed, zero dependencies.


## Features

🪶 Lightweight · ⚡ Simple async/await API · 📦 TypeScript ready · 🌐 Universal (Node.js & Browser) · 💻 CLI support


## Install

```bash
# npm
npm install waiit

# yarn
yarn add waiit

# pnpm
pnpm add waiit

# bun
bun add waiit

# deno
deno add npm:waiit
```

## API

```ts
wait(ms?: number): Promise<void>
```

| Parameter | Type     | Default | Description           |
|-----------|----------|---------|----------------------|
| `ms`      | `number` | `0`     | Delay in milliseconds |

**Returns:** A `Promise` that resolves after the specified time.


## Usage

### ES Modules (`app.js`)

```js
import wait from 'waiit';

await wait(2000);  // Pause for 2 seconds
await wait(500);   // Pause for 500ms
await wait();      // Continue immediately (0ms)
```

### CommonJS (`app.cjs`)

```js
const wait = require('waiit');

await wait(2000);
```

### Browser (CDN)

**ES Modules (`app.js`):**
```html
<script type="module">
  import wait from 'https://unpkg.com/waiit/app.js';

  await wait(1000);
  console.log('Done!');
</script>
```

**Classic Script (`app.global.js`):**
```html
<script src="https://unpkg.com/waiit/app.global.js"></script>
<script>
  wait(1000).then(() => console.log('Done!'));
</script>
```


## Examples

**Retry with delay:**
```js
import wait from 'waiit';

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url);
    } catch (e) {
      if (i < retries - 1) {
        console.log(`Retry ${i + 1}...`);
        await wait(1000);
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


## CLI

```bash
# Via npx (no install needed)
npx waiit 2000 && echo "Done!"

# Or install globally
npm i -g waiit
waiit 3000 && echo "3 seconds passed"
```


## Files

| File | Purpose |
|------|---------|
| `app.js` | ESM module (`import wait from 'waiit'`) |
| `app.cjs` | CommonJS module (`require('waiit')`) |
| `app.global.js` | UMD for browsers (`<script>` tag → `window.wait`) |
| `app.d.ts` | TypeScript type definitions (ESM) |
| `app.cjs.d.ts` | TypeScript type definitions (CommonJS) |
| `app.global.d.ts` | TypeScript type definitions (Global/UMD) |
| `app.cli.js` | CLI binary (`npx waiit 1000`) |


## License

[MIT](LICENSE) © [Raju Dhami](https://github.com/Raju)

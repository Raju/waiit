# waiit
Wait for any amount of time in milliseconds or resolve immediately if no value passed.

### Support
&nbsp; &nbsp; NodeJS &nbsp; &nbsp; :heavy_check_mark:

&nbsp; &nbsp; Browser &nbsp; &nbsp; :x:

### Install
```console
npm i waiit
```

### Example
```js
wait() // Returns a promise that resolves immediately
wait(5000) // Returns a promise that resolves after 5sec
```

### Usage
```js
const wait = require ( `waiit` );

const doSomething = async () => {
  console.log ( `Start` );

  await wait ( 5000 );
  console.log ( `Wait` );

  await wait ();
  console.log ( `Finish` );
};

doSomething ();
```
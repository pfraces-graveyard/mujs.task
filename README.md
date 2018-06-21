task
====

Async task scheduler

Usage
-----

```js
var task = require('./task.js');
var map = require('./map.js');

var randomFloat = task(function (done) {
  setTimeout(function () {
    done(Math.random());
  }, 1000);
});

var randomInt = map(randomFloat, function (x) {
  return Math.floor(x * 10);
});

randomInt.subscribe(function (x) {
  console.log(x);
});
```

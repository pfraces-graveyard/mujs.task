task
====

Async task scheduler

Usage
-----

**examples/helloworld.js**

```js
var task = require('../src/task.js');
var map = require('../src/map.js');

var greet = task(function (done) {
  setTimeout(function () {
    done('hello');
  }, 1000);
});

var greetTheWorld = map(greet, function (greeting) {
  return greeting + ' world';
});

greetTheWorld.subscribe(function (greeting) {
  console.log(greeting);
});
```

Motivation
----------

[RxJS 5 Thinking Reactively | Ben Lesh](https://www.youtube.com/watch?v=3LKMwkuK0ZE)

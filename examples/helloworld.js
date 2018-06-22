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
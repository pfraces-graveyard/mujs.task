var task = require('../src/task.js');
var tap = require('../src/tap.js');

var random = task(function (done) {
  setTimeout(function () {
    done(Math.random());
  }, 1000);
});

var debugRandom = tap(random, function (result) {
  console.log('[DEBUG] ' + result);
});

debugRandom.subscribe(function (result) {
  console.log('result: ' + result); 
});
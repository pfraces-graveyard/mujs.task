var task = require('../src/task.js');
var merge = require('../src/merge.js');
var map = require('../src/map.js');
var tap = require('../src/tap.js');

var debugFn = function (x) { console.log('DEBUG ' + x); };

var emitAOne = task(function (done) {
  setTimeout(function () {
    done(1);
  }, 1000);
});

var emitATwo = task(function (done) {
    setTimeout(function () {
      done(2);
    }, 1000);
  });
  
var emitAThree = task(function (done) {
  setTimeout(function () {
    done(3);
  }, 1000);
});

var tapOne = tap(emitAOne, debugFn);
var tapTwo = tap(emitATwo, debugFn);
var tapThree = tap(emitAThree, debugFn);

var emitAll = merge([tapOne, tapTwo, tapThree]);

var sumAll = map(emitAll, function (results) {
  return results.reduce(function (acc, result) {
    return acc + result;
  }, 0);
});

sumAll.subscribe(function (result) {
  console.log('result: ' + result);
});

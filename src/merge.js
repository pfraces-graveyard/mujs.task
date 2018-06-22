/**
 * merge([]) -> done([])
 * TODO: merge({}) -> done({})
 */

var task = require('./task.js');

var noop = function () {};
var call = function (fn) { return fn(); };
var callAll = function (fns) { fns.forEach(call); };

var merge = function (sources) {
  var pending = sources.length;
  var results = [];

  return task(function (done, error) {
    var cancels = sources.map(function (source, index) {
      var doneWrapper = function (result) {
        results[index] = result;
        pending--;
        if (pending) { return; }
        done(results);
      };

      var errorWrapper = function (err) {
        done = noop;
        error(err);
        callAll(cancels);
      };

      return source.subscribe(doneWrapper, errorWrapper);
    });

    return function () {
      callAll(cancels);
    };
  });
};

module.exports = merge;
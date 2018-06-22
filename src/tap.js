var task = require('./task.js');

var tap = function (source, tapFn) {
  return task(function (done, error) {
    var doneWrapper = function (result) {
      tapFn(result);
      done(result);
    };

    return source.subscribe(doneWrapper, error);
  });
};

module.exports = tap;

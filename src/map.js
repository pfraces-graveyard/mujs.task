var task = require('./task.js');

var map = function (source, mapFn) {
  return task(function (done, error) {
    var doneWrapper = function (result) {
      done(mapFn(result));
    };

    return source.subscribe(doneWrapper, error);
  });
};

module.exports = map;

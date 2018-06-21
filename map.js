var task = require('./task.js');

var map = function (source, mapFn) {
  return task(function (done, error) {
    var doneWrapper = function () {
      var args = [].slice.call(arguments);
      done(mapFn.apply(null, args));
    };

    return source.subscribe(doneWrapper, error);
  });
};

module.exports = map;

var task = function (producer) {
  var subscribe = function (done, error) {
    return { unsubscribe: producer(done, error) };
  };

  return { subscribe: subscribe };
};

module.exports = task;

var httpErrors = require('http-errors');

module.exports = function() {
  return function* (next) {
    try {
      yield* next;
    } catch (err) {
      // Duplicate key error
      if (err.code === 11000 || err.code === 11001) {
        throw new httpErrors.Conflict(err.message);
      }

      if (err.name === 'CastError' || err.name === 'ValidationError') {
        throw new httpErrors.BadRequest(err.message);
      }

      throw err;
    }
  };
};

var httpErrors = require('http-errors');

module.exports = function() {
  return function(err, req, res, next) {
    // Duplicate key error
    if (err.code === 11000 || err.code === 11001) {
      next(new httpErrors.Conflict(err.message));
      return;
    }

    if (err.name === 'CastError' || err.name === 'ValidationError') {
      next(new httpErrors.BadRequest(err.message));
      return;
    }

    next(err);
  };
};

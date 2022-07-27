const crypto = require('crypto');

exports.hashPassword = function () {
  return crypto.createHash('sha256').update(password).digest('base64');
};

exports.handleError = function (err) {
  console.error(err);
};

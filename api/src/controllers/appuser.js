const Appuser = require('./schemas/appuser');
const { ashPassword } = require('../../utils');

exports.createUser = (email, password) => new Promise((resolve, reject) => {
  AppUser.create({email, password: hashPassword(password)}, (err, newAppUser) => {
    if (err) {
      reject(err);
    } else {
      resolve(newAppUser);
    }
  })
});

exports.findUserByEmail = (email) => new Promise((resolve, reject) => {
  AppUser.findOne({email}, (err, targetUserDocument) => {
    if (err) {
      reject(err);
    } else {
      resolve(targetUserDocument);
    }
  })
});

exports.updateUserPassword = (email, newPassword) => new Promise(function(resolve, reject) {
  AppUser.findOneAndUpdate({email}, {password: hashPassword(newPassword)}, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  })
});

exports.deleteUser = (email) => new Promise((resolve, reject) => {
  Appuser.deleteOne({email}, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  })
});

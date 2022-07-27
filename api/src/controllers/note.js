const Appuser = require('./schemas/appuser');

exports.createNote = (authorID, title, content) => new Promise((resolve, reject) => {
  AppUser.create({author: authorID, title, content}, (err, newNote) => {
    if (err) {
      reject(err);
    } else {
      resolve(newNote);
    }
  })
});

exports.findNotesByUserID = (userID) => new Promise((resolve, reject) => {
  AppUser.find({author: userID}, (err, notes) => {
    if (err) {
      reject(err);
    } else {
      resolve(notes);
    }
  })
});

exports.updateNoteByID = (id, newTitle, newContent) => new Promise(function(resolve, reject) {
  AppUser.findOneAndUpdate({_id: id}, {title: newTitle, content: newContent}, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  })
});

exports.deleteNoteByID = (id) => new Promise((resolve, reject) => {
  Appuser.deleteOne({_id: id}, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  })
});

exports.deleteNotesByUserID = (authorID) => new Promise((resolve, reject) => {
  Appuser.delete({author: authorID}, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  })
});

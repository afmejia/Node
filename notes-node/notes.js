console.log('Starting notes.js');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Reading note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};

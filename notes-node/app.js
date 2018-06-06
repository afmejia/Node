console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
//var command = process.argv[2];
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
      console.log('Note created');
      console.log('--');
      console.log('Title: ' + argv.title);
      console.log('Body: ' + argv.body);
  } else {
      console.log('Title already in use');
  }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    var deleted = notes.removeNote(argv.title);
    // if (deleted) {
    //     console.log("The note was remove");
    // } else {
    //     console.log("The note does not exist");
    // }
    var message = deleted ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}

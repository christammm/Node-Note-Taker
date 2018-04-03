// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');


//Takes in command line arguments directly into node.
var command = process.argv[2];


//Takes all the arguments within the array
var argumentArray = process.argv;
// console.log('Process arguments:', argumentArray);

//const variables that
var titleOptions = {
    describe: 'Title of note', //description of what needs to be fulfilled
    demand: true, //its required
    alias: 't' //set alias to set as new flag so in the future you can use '-t' instead of '--title';
};

var bodyOptions = {
    describe: 'The Body of the note',
    demand: true,
    alias: 'b'
};
//Initialize Yargs array chaining syntax and using 'command()'
const argv = yargs
.command('add', 'Add a new note',{title: titleOptions,body: bodyOptions})
.command('read','Read a specific note',{title:titleOptions})
.command('remove','Remove title from the notes',{title:titleOptions})
.command('list', 'List all notes')
.help()//sets up yargs to run info and options to display
.argv;
// console.log('Yargs arguments:' , argv);


switch(command){
    case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if(!note){
      console.log('Error: Duplicate title detected.');
    }else{
      console.log('Note added: ', note.title, note.body)
    }
      break;
    case 'remove':
      var noteRemoved = notes.removeNote(argv.title);
      var message = noteRemoved ? 'Note was removed' : 'Note was not found' ; //turnary operator returns string if true or false
      console.log(message);
      break;
    case 'read':
      var note = notes.getNote(argv.title);
      if(note){
        console.log('Note found with title ' + argv.title + ' found');
        notes.logNote(note);
      }else{
        console.log('note not found');
      }
      break;
    case 'list':
      var allNotes = notes.getAll();
      console.log(`Printing ${allNotes.length} note(s).`);
      allNotes.forEach((note) => notes.logNote(note));
      break;
    default:
      console.log('invalid command.');
      break;
}

// console.log('Starting notes.js!');

const fs = require('fs');


var fetchNotes = (notepath) => {
  try{
      var notesString = fs.readFileSync(notepath);
      notes = JSON.parse(notesString);
  } catch (e){
    return [];
  }
  return notes;
};

var saveNotes = (notes)=> {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title,body) => {
    //console.log('Adding a note : ', title, body);
    var notes = fetchNotes('notes-data.json');
    var note = {
      title,
      body,
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
      notes.push(note);
      saveNotes(notes);
      return note;
    }
};

var getAll = () =>{
    var notes = fetchNotes('notes-data.json');
    return notes;
}

var getNote = (title) =>{
    var notes = fetchNotes('notes-data.json');
    var filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
}

var removeNote = (title) =>{
    //fetchNotes
    var notes = fetchNotes('notes-data.json');
    //filter notes, removing the one with the the title of argument;
    var filteredNotes = notes.filter((note)=> note.title !== title);
    //saveNotes to filteredArray
    var newNotes = saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

var logNote = (note) =>{
  debugger;
  console.log('-------------------');
  console.log('Title: ', note.title);
  console.log('Body: ' , note.body);
};


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
}

// module.exports.addSum = (a, b) =>{
//     console.log('AddSum');
//     return (a + b);
// }

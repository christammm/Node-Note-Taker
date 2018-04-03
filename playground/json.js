// var obj = {
//
//   name: 'Chris',
//
// };
//
// //Takes object and returns the JSON stringified version;
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// //Define JSON into a strings
// var personString = '{ "name" : "Andrew", "age" : 22}';
//
// //we need to conver this string directly into an object;
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

//Throw JSON file into strings
const fs = require('fs');
var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);
//Readfilesync gets content
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

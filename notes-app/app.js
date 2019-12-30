const notes = require('./notes');
const chalk = require("chalk");
const yargs = require("yargs");


debugger;
yargs.command({
     command: 'add',
    describe: 'Add New Note',
    builder: {
         title: {
             describe: 'title of note',
             demandOption: true,
             type: 'string'
         },

        body: {
             describe: 'body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log("add note");
        notes.addNote(argv.title, argv.body);
    }
});


yargs.command({
    command: 'remove',
    describe: 'Remove Note From Notes',
    builder: {
      title: {
          describe: 'title of note',
          demandOption: true
      }

    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});


yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: () => {
        notes.getAllNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            demandOption: true,
            describe: 'title of note'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
     }
});

yargs.parse();

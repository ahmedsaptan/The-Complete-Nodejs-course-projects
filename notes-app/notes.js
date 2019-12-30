const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
    const notes = loadNotes();

    debugger;
    const existNote = notes.find((note) => {
       return note.title === title;
    });

    if(existNote) {
        console.log(chalk.bgBlack.inverse.red("Note Exist"));
    } else {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
    }


};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => {
       return note.title !== title;
    });
    if(notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse.redBright('No Note With this title'));
    } else {
        console.log(chalk.green.inverse.greenBright('Note Removed!'));
    }

    saveNotes(notesToKeep);
};


const getAllNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse('Your Notes'));

    notes.forEach((note) => {
        console.log(note.title);
        console.log(note.body);
    });
};

const readNote = (title) => {
    const notes = loadNotes();

    const existNote = notes.find((note) => {
        return note.title === title;
    });

    if(existNote) {
        console.log(chalk.greenBright.inverse(existNote.title));
        console.log(chalk.greenBright.inverse(existNote.body));
    } else {
        console.log(chalk.red.inverse('Not Found'));
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    }catch (e) {
        return [];
    }

};

const saveNotes = (notes) => {
  try {
      return fs.writeFileSync('notes.json', JSON.stringify(notes));
  }  catch (e) {
      return new Error("can't write a file");
  }
};

module.exports = {
    addNote,
    removeNote,
    getAllNotes,
    readNote
};
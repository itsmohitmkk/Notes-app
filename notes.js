const chalk = require('chalk')
const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter(function (note) { (NOTE : searches all node evan if duplicates are found)
//     return note.title === title
// })
    const duplicateNote = notes.find((note) =>note.title === title)
    console.log(duplicateNote)
    console.log(notes)

//  Debugging
    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRedBright('Note title taken!'))
    }
}


const removeNotes = function(title){
    const notes = loadNotes()
    const remNotes = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length === remNotes.length){
        console.log(chalk.bgred.bold("No matching Notes"))
    }
    else{
        console.log(chalk.bgGreen(title + " " + "removed successfully"))
    }
    saveNotes(remNotes)


}


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes : removeNotes
}
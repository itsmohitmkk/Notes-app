//1. writing in files
// const fs = require('fs')
// fs.writeFileSync('notes.txt','Mohit Kumar')

// fs.writeFileSync('notes.txt','Mohit Kumar2')
// fs.appendFileSync('notes.txt','\n')
// fs.appendFileSync('notes.txt','Mohit Kumar3')


//2. function importing from diffrent file ON SYSTEM
// const str = require('C:/Users/itsmo/Desktop/course/notes-app/notes.js')
// console.log(str('Mohit Kumar'))
/********************************************************* */

//3. Importing packages from npm: validator
// const validator =  require('validator')
// console.log(validator.isEmail('itsmohitmk99@gmail.com'))
/********************************************************* */

//4. Importing packages : chalk
//Step1 : install : npm i package name(chalk)
//Step2 :require it in app.js
//Step3 :use its functionality


// const chalk = require('chalk')
// //const { describe } = require('yargs')
// const yargs = require('yargs')
// console.log(process.argv)

// console.log('\n')
// console.log(yargs.argv)
//  console.log(chalk.bold.blueBright("hello"))

/**********************//*********************************** */
//5.Adding command/actions of the commands


// const { argv } = require('yargs')
// const yargs = require('yargs')

// yargs.command({
//     command : 'List',
//     handler : console.log("Mohit")

// })
// console.log(process.argv[2])
// console.log('\n')
// console.log(yargs.argv)


//********************************************************************** */
// const yargs = require('yargs')
// yargs.command({
//     command : 'add',
//     builder : {
//         title : {
//             demandOption : true,
//             type : 'string'
//         },
//         body : {
//             demandOption : true,
//             type : 'string'
//         }
//     },
//     handler : function(argv){
//         console.log( "My title " + argv.title + '\n')
//         console.log( "Contents " + argv.body)
//     }

// })

// yargs.command({
//     command : "substract",
//     handler :  function(){
//         console.log(20)
//     }
    
// })
//  yargs.parse()
/****************************************************************/


//6.adding notes in notes app
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title : {
        demandOption : true,
        type : 'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

 yargs.parse()

// console.log(argv)
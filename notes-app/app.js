       
       //  DEPENDENCIES

const fs = require('fs');

const yargs = require('yargs'); 

const validator = require('validator'); 

const chalk = require('chalk'); 

const notesUtil = require('./notes.js');

                                          //     creating commands

//     creating ADD command 

yargs.command
(
       {
              command : 'add',
              describe : 'Add a new note!',

              builder : 
              {
                     title : 
                     {
                            describe : 'Note title', 
                            demandOption : true, 
                            type : 'string'
                     },
                     
                     body :
                     {
                            describe : 'note body',
                            demandOption : true,
                            type : 'string'
                     }
              }, 
  
              handler(argv)
              {
                     //console.log(argv.body);
                     
                     notesUtil.addNote(argv.title, argv.body) ;                                
              }
       }
)
     
// creating REMOVE command

yargs.command
(
       {
              command : 'remove',
              describe : 'remove a note', 

              builder :
              {
                     title : 
                     {
                            describe : 'note',
                            demandOption : true,
                            type : 'string'      
                     }
              },

              handler(argv)
              {
                    notesUtil.removeNote(argv.title);  
                    console.log('removing a note');                                      
              }
       }
)

yargs.parse();

yargs.command 
(
       {
              command : 'list',
              describe : 'list your notes',       
                                                 
              handler()
              {                                      
                     notesUtil.listNotes();                     
              }                                                                
       }
)

yargs.command 
(

)

























































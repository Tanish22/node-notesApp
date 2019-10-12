const fs = require('fs');

const chalk = require('chalk');

const getNotes = () => 
{
    return 'Your Notes... '
}   

                                //   adding a note functionality
                                
const addNote = (title, body) =>
{
    const notes = loadNotes();

    const duplicateNotes = notes.filter(
        (note) =>
        {
            return note.title === title;
        })      

        if(duplicateNotes.length === 0)         
        {
            notes.push
            (
                {
                    title,

                    body
                }
            )

            saveNotes(notes);
        
            console.log('New note added');
        }
        
        else
        {
            console.log('note title taken');             
        }        

}

                                //   functionality to remove a note

const removeNote = (title) =>
{ 
    const notes = loadNotes();
        
    const notesToKeep = notes.filter( (note) => {return note.title !== title} );

    if (notes.length < notesToKeep.length)
    {
        console.log(chalk.green.inverse('note removed'));        
    }
    else
    {
        console.log(chalk.red.inverse('no note found'));
    }

    saveNotes(notesToKeep);
}

const listNotes = () =>
{
    const notes = loadNotes();

    notes.forEach((note) => {
        console.log(note.title);        
    });
}

const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = () =>
{
    try
    {
        const dataBuffer = fs.readFileSync('notes.json');
    
        const dataJSON = dataBuffer.toString();
    
        return JSON.parse(dataJSON);
    }
    catch(e)
    {
        return [];
    }
}

debugger;
 
module.exports =    
{
    getNotes, 

    addNote,

    removeNote,
     
    listNotes
}



 
















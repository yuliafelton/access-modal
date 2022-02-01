import  React from 'react';
import './notesList.css';
import Note from "../note/note";
import AddNote from '../addNote/addNote';

function NoteList ({notes, handleAddNote, handleDeleteNote}) {

    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote = {handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NoteList;
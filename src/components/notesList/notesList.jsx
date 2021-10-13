import  React from 'react';
import './notesList.css';
import Note from "../note/note";

function NoteList () {
    return (
        <div className='notes-list'>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
        </div>
    )
}

export default NoteList;
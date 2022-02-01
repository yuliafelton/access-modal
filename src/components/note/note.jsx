import  React from 'react';
import './note.css'

function Note ({id, text, date, handleDeleteNote}) {
    return (
        <div className="note">
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <b className='delete-icon' onClick={() => handleDeleteNote(id)}>x</b>
            </div>
        </div>
        )
}

export default Note;

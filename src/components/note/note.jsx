import  React from 'react';
import './note.css'

function Note ({id, text, date}) {
    return (
        <div className="note">
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <b>x</b>
            </div>
        </div>
        )
}

export default Note;

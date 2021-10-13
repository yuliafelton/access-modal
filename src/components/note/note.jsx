import  React from 'react';
import './note.css'

function Note () {
    return (
        <div className="note">
            <span>Here is a note</span>
            <div className='note-footer'>
                <small>date here</small>
                <b>x</b>
            </div>
        </div>
        )
}

export default Note;

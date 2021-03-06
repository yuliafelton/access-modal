import React, {useState} from 'react';
import './addNote.css';

const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        if (noteText) {
            handleAddNote(noteText);
            setNoteText('');
        } else {
            alert('The note is empty')
        }
    };

    return (
        <div className="note new">
            <textarea
                value={noteText}
                rows='8'
                cols='10'
                placeholder='Type to add a note'
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>200 remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
};

export default AddNote;
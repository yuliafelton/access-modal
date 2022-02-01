import React, {useState} from 'react';
import './App.css';
import Header from './components/header/header';
import NoteList from "./components/notesList/notesList";

function App() {

    const [notes, setNotes] = useState([
        {
        id: Math.floor(Math.random() * 100),
        text: "new note",
        date: "date"
        },
        {
            id: Math.floor(Math.random() * 100),
            text: "new note",
            date: "date"
        },
    ]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: Math.floor(Math.random() * 100),
            text: text,
            date: date.toLocaleDateString()
        };
        const newNotes = [...notes, newNote ];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className="Container">
            <Header />
            <NoteList
                notes={notes}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}/>
        </div>
    );
}

export default App;

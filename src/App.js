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

    return (
        <div className="Container">
            <Header />
            <NoteList notes={notes} handleAddNote={addNote}/>
        </div>
    );
}

export default App;

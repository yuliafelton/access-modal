import React from 'react';
import './App.css';
import Header from './components/header/header';
import NoteList from "./components/notesList/notesList";

function App() {
  return (
    <div className="Container">
        <Header />
        <NoteList/>
    </div>
  );
}

export default App;

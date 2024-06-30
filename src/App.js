import React from "react";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { FaHeart } from "react-icons/fa6";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "14/02/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "31/10/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "07/02/2024",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
      <footer>
        <p>
          Made with <FaHeart color="red" /> By Arun Raj R
        </p>
      </footer>
    </div>
  );
};

export default App;

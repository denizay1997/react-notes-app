import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This my first text!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This my secod text!",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "This my third text!",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "This my new text!",
      date: "02/04/2021",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(true);
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
    setNotes([
      ...notes,
      {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      },
    ]);
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
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          hadleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;

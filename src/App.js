import "./styles.css";
import InputForm from "./component/InputForm";
import { createContext, useEffect, useState } from "react";
import ListForm from "./component/ListForm";

export const context = createContext();

export default function App() {
  const savedNotes = () =>
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];
  const [notes, setNotes] = useState(savedNotes());

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
    }
  }, [notes]);

  return (
    <context.Provider value={{ notesMain: notes }}>
      <div className="App">
        <ListForm notes={notes} setNotes={setNotes} />
        <InputForm notesMain={notes} setNotes={setNotes} />
      </div>
    </context.Provider>
  );
}

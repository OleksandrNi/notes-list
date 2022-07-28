import "./styles.css";
import InputForm from "./component/InputForm";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
  // console.log('notes', notes)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {notes.map((note) => (
        <div key={note.id}>{note.title}</div>
      ))}
      <InputForm setNotes={setNotes} notes={notes} />
    </div>
  );
}

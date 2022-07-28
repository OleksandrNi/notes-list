import "./styles.css";
import InputForm from "./component/InputForm";
import { useState } from "react";
import ListForm from "./component/ListForm";

export default function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <ListForm notes={notes} setNotes={setNotes} />
      <InputForm notes={notes} setNotes={setNotes} />
    </div>
  );
}

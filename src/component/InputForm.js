import { useState } from "react";

const InputForm = ({ notes, setNotes }) => {
  const [title, setTitle] = useState("");

  const addNoteValue = () => {
    setNotes([
      ...notes,
      {
        id: notes.length + 1 + new Date() * Math.random(),
        title: title,
        haveSubNotes: false
      }
    ]);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="note-input">Enter new note</label>

      <input
        list="note-input"
        id="note-input"
        name="note-input"
        autoComplete="off"
        placeholder="Write here"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <button type="submit" onClick={addNoteValue}>
        Add
      </button>
    </form>
  );
};

export default InputForm;

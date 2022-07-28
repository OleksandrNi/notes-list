import { useState } from "react";

const InputForm = (props) => {
  const [title, setTitle] = useState("");

  // console.log(console.log(props.notes));
  const addNoteValue = () => {
    props.setNotes([
      ...props.notes,
      {
        id: props.notes.length + 1,
        title: title
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
          console.log("title", e.target.value);
        }}
      />

      <button type="submit" onClick={addNoteValue}>
        Add
      </button>
    </form>
  );
};

export default InputForm;

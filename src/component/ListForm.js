const ListForm = ({ notes, setNotes }) => {
  const notesMovedId = [...notes];

  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const findIndexNote = (noteId) => {
    for (let i = 0; i < notes.length; i++)
      if (notes[i].id === noteId) {
        return i;
      }
  };

  const moveNoteUp = (noteId) => {
    let indexOfId = findIndexNote(noteId);
    (notesMovedId[indexOfId] = notes[indexOfId - 1]),
      (notesMovedId[indexOfId - 1] = notes[indexOfId]);
    setNotes(notesMovedId);
  };

  const moveNoteDown = (noteId) => {
    let indexOfId = findIndexNote(noteId);
    (notesMovedId[indexOfId] = notes[indexOfId + 1]),
      (notesMovedId[indexOfId + 1] = notes[indexOfId]);
    setNotes(notesMovedId);
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          {note.title}
          {note !== notes[0] && (
            <button onClick={() => moveNoteUp(note.id)}>up</button>
          )}
          {note !== notes[notes.length - 1] && (
            <button onClick={() => moveNoteDown(note.id)}>down</button>
          )}
          <button onClick={() => deleteNote(note.id)}>Remove</button>
          {note.haveSubNotes ? (
            <button onClick={() => {}}>Remove Sublist</button>
          ) : (
            <button onClick={() => {}}>Add Sublist</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListForm;

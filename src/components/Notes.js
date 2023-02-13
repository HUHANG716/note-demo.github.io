import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";
function Notes() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    data && data.length && setNotes(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
    console.log(notes);
  }, [notes]);

  const onDeleteHandler = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const onSaveHandler = () => {
    setNotes((prevState) => [
      ...prevState,

      {
        id: uuid(),
        text: input,
      },
    ]);
    setInput("");
  };
  return (
    <div className="notes">
      {notes.map(({ text, id }, index) => {
        return <Note key={index} index={index} id={id} text={text} onDeleteHandler={onDeleteHandler}></Note>;
      })}
      <CreateNote setInput={setInput} input={input} count={count} onSaveHandler={onSaveHandler} setNotes={setNotes} setCount={setCount}></CreateNote>
    </div>
  );
}

export default Notes;

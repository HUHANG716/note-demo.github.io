import { LinearProgress } from "@mui/material";

function CreateNote({ input, setInput, count, setCount, onSaveHandler }) {
  const maxLength = "100";
  const coefficient = 100 / maxLength;
  const onChangeHandle = (e) => {
    const value = e.target.value;
    setInput(value);
    setCount(value.length);
  };

  return (
    <div className="note">
      <textarea className="note__textarea" cols="10" rows="5" onChange={onChangeHandle} value={input} placeholder="Type..." maxLength={maxLength}></textarea>
      <div className="note__footer">
        <span className="label">{maxLength - count} left</span>
        <button onClick={onSaveHandler} className="note__save">
          Save
        </button>
      </div>
      <div className="char__progress">
      <LinearProgress  variant="determinate" value={count * coefficient} /></div>
    </div>
  );
}

export default CreateNote;

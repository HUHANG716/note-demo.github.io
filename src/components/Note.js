import { DeleteForeverOutlined } from "@mui/icons-material";
import "../css/Note.css";
function Note({ text, id, onDeleteHandler, index }) {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer">
        <button className="footer__delete" onClick={() => onDeleteHandler(id)}>
          {" "}
          <DeleteForeverOutlined></DeleteForeverOutlined>
        </button>
        <span>{index + 1}</span>
      </div>
    </div>
  );
}

export default Note;

import { FaPen } from "react-icons/fa";
import "./editor.sass";

function Editor(props) {
  return (
    <div className="editor-container">
      <div className="editor-header">
        <h1 className="title">
          <FaPen className="icono" />
          Editor
        </h1>
      </div>
      <textarea
        value={props.input}
        onChange={(e) => {
          props.setInput(e.target.value);
        }}
        id="editor"
      >
        
      </textarea>
    </div>
  );
}

export default Editor;

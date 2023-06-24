import { FaPen } from "react-icons/fa";
import "./previewer.sass";
import {marked} from 'marked'





function Previewer({ input }) {

  

  marked.setOptions({
    breaks: true,
    mangle: false,
    headerIds: false
  })
  return (
    <div className="previewer-container">
      <div className="preview-header">
        <h1 className="title">
          <FaPen className="icono" />
          Previewer
        </h1>
      </div>
      <div id="preview"  dangerouslySetInnerHTML={{
        __html:marked(input)
      }}>
        
      </div>
    </div>
  );
}

export default Previewer;




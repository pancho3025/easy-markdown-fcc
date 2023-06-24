import "./App.sass";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { useState } from "react";

function App() {
  const [input, setInput] =
    useState(`# Bienvenido a mi React Markdown Previewer!
  ## Este es un subtítulo
  A la hora de usar Markdown podemos escribir \`codigo\`:
  \`\`\`
  {
    "nombre": "John",
    "apellido": "Smith",
    "edad": 25
  }
  \`\`\`
  Poner [links](https://github.com/pancho3025)
  
  Incluso podemos usar
  >Citas en bloque

  Tambien podemos crear una lista ordenada:
  1. Tambien usar texto en **negrita**
  2. y tambien _podemos_ 
  3. crear una ~lista~
  
  - desordenada, con diferentes
    - estilos, y por ultimo
      - podemos poner imagenes!
      

![catpizza, I love this photo](https://i.pinimg.com/originals/7d/74/16/7d7416b4820df975d753ff31da0b9909.jpg)

    
       `);

  return (
    <div className="app">
      <Editor input={input} setInput={setInput} />
      <Previewer input={input} />
    </div>
  );
}

export default App;

/*
  Me falta:
  1_instalar plugin de tablas y de html (remark-gfm y rehype-raw)
  https://remarkjs.github.io/react-markdown/  
  https://github.com/remarkjs/react-markdown
  2_Poner markdown ya escrito como valor inicial
  3_Hacer el responsive por el lado de Sass
  4_Hacer 2 botones, que agranden o el editor, el previewer

  realtimecolors usados: https://realtimecolors.com/?colors=0e0d0b-fafaf9-b4aea2-ffffff-a9a193
  
*/

import React,{useState} from "react";
import ReactDOM from "react-dom";
import MDEditor from '@uiw/react-md-editor';



function MarkDownEditor() {
  const [value, setValue] = useState("");
  return (
    
    <div className="container">
      <MDEditor
        height={200}
        value={value}
        onChange={setValue}
       
      />
    
      <MDEditor.Markdown source={value} />
     
    </div>  
  
  );
  
}


export default MarkDownEditor;


// // import react, react-markdown-editor-lite, and a markdown parser you like
// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import MarkdownIt from 'markdown-it'
// import MdEditor from 'react-markdown-editor-lite'
// // import style manually
// import 'react-markdown-editor-lite/lib/index.css';

// // Register plugins if required
// // MdEditor.use(YOUR_PLUGINS_HERE);

// // Initialize a markdown parser
// const mdParser = new MarkdownIt(/* Markdown-it options */);

// // Finish!
// function handleEditorChange({html, text}) {    
//   console.log('handleEditorChange', html, text)
// }
// export default (props) => {
//   return (
//     <MdEditor
//       style={{ height: "500px" }}
//       renderHTML={(text) => mdParser.render(text)}
//       onChange={handleEditorChange}
//     />
//   )
// }
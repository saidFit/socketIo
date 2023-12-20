// import React, { useState } from 'react'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';


// const modules = {
//    toolbar:[
//     [{header:[1,2,3,4,5,6,false]}],
//     [{font:[]}],
//     [{size:[]}],
//     ["bold","italic","underline","strike","blockquote"],

//   [{ 'color': [] }, { 'background': [] }], 
//     [
//       {list:'ordered'},
//       {list:'bullet'},
//       {indent:"-1"},
//       {indent:"+1"}
//     ],
//     ["link","image","video","color"],
//     ['clean']  
//    ]
// }

// function App() {
//   const [value,setValue] = useState("")
//   return (
//     <div className='w-full h-screen mx-auto'>
//        <div className='flex justify-center items-center h-full'>
//         <div className='editor flex-1 border border-gray-500 min-h-[50%] p-2'>
//         <ReactQuill
//          theme="snow"
//          value={value}
//          onChange={setValue}
//          className='min-h-[50%] border border-gray-400'
//          modules={modules}
//         />
         
//         </div>
//         <div className='flex-1 border border-gray-500 h-full p-2'
//         dangerouslySetInnerHTML={{__html:value}}
//         ></div>
//        </div>
//     </div>
//   )
// }

// export default App






import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css'
// import "./styles.css";

export const App = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = value => {
    setState({ value });
  };
  return (
    <div className="text-editor h-screen w-[60%] mx-auto">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
      <div
      
      >
        { (state.value)?.length }
      </div>
      <ReactQuill
   value={state.value }
   readOnly={true}
   theme={"bubble"}
/>
    </div>
  );
};

export default App;
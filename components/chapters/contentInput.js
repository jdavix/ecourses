import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';

const HTMLEditor = () => {

  const handleEditorChange = function(e){
    console.log('Content was updated:', e.target.getContent());
  }

  return (
    <Editor
      initialValue="<p>Type Your Reach text here.</p>"
      init={{
        height: 300,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
     }}
     onChange={handleEditorChange}
    />
  );
}

const ContentInput = (props) => {
  if (props.contentType === "") return null;
  if (props.contentType === "html") {
    return <HTMLEditor/>
  } else {
    return <input type="file" />
  }
}

export default ContentInput;
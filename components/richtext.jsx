import React from 'react';
import {Editor} from '@tinymce/tinymce-react';

const RichText = ({value, handleEditorChange, editorLoaded, isBorder}) => {
  return (

    editorLoaded ?
      <div className={isBorder ? 'bordertinymc' : ''}>
        <Editor
          value={value}
          initialValue=""
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image',
              'charmap print preview anchor help',
              'searchreplace visualblocks code',
              'insertdatetime media table paste wordcount'
            ], block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3',
            toolbar:
              'undo redo | fontsizeselect | formatselect | bold italic underline | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
          }}
          onChange={handleEditorChange}
        />
      </div> : <p>Editor Loading</p>

  );
}

export default RichText;
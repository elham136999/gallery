import React, { useState } from "react";

function Image({ image, removeItem, setValue, index }) {
  const [show, setShow] = useState(true);
  return (
    <div key={image.id} className='main'>
      <img
        src={image.url}
        className={show ? "main" : "default"}
        onClick={() => setValue(index)}
      />
      <p className='text'>{show ? "" : image.title}</p>
      <div className='button'>
        <button onClick={() => setShow(!show)} className='btn '>
          {show ? "read more" : "not intrested"}
        </button>
        <button className='btn btn-trash' onClick={() => removeItem(image.id)}>
          add to trash
        </button>
      </div>
    </div>
  );
}

export default Image;

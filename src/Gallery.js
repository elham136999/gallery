import React, { useState } from "react";
import "./Gallery.scss";
import Image from "./Image";
import { UseContextImage } from "./FetchImages";

const Gallery = () => {
  const { images, setImages } = UseContextImage();
  const [value, setValue] = useState(0);

  const removeItem = (id) => {
    const data = images.filter((item) => item.id !== id);

    setImages(data);
  };
  if (images == null) return <p>loading...</p>;

  const currentImage = images[value];
  const { thumbnailUrl: currentImageUrl, title } = currentImage;

  return (
    <div className='gallery'>
      <img src={currentImageUrl} alt={title} className='main-img' />

      <div className='list'>
        {images &&
          images.map((image, index) => {
            return (
              <Image
                image={image}
                removeItem={removeItem}
                key={image.id}
                index={index}
                setValue={setValue}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;

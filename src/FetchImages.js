import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

export const data = "https://jsonplaceholder.typicode.com/photos";

export const ImageContext = React.createContext();

export const FetchImages = ({ children }) => {
  const [images, setImages] = useState();
  const Fetchapi = async (url) => {
    try {
      const response = await axios.get(url);

      const items = response.data.slice(0, 20);

      setImages(items);
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    Fetchapi(data);
  }, []);

  // if (data == null) return <p></p>;

  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export const UseContextImage = () => {
  return useContext(ImageContext);
};

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect(() => {
      getImages();
    }, []);
  
    // return {
    //     images: images,
    //     isLoading: isLoading
    // }

    // the return statement can be simplify when the key and value/variable 
    // have the same name, i.e.
    return {
        images,
        isLoading
    }
}

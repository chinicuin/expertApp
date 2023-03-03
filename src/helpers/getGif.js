export const getGifs = async(category) => {
    const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=6in95owKdfNzJtopEsJsXrJj3Pqv8cg9&q=${category}&limit=10`
    const resp = await fetch(searchUrl);
    const {data} = await resp.json();
  
    // returns an object with the gif data.
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized.url,
    }));
  
    // console.log(gifs);
  
    return gifs
  };
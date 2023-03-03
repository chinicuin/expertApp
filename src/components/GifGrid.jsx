
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  // console.log({images, isLoading});

  

  return (
    <>
        <h3>{category}</h3>

        {
          isLoading && <h2>Loading...</h2>
          
          
        }
        
        <div className="card-grid">
          {
            // arrow function, use parenthesis to return an object.
            // images.map( image => (
            //   <li key={image.id}>{image.title}</li>
            // ))
            
            // If curly braces are used you neen to put the return statement.
            // images.map( image => {
            //   return <li key={image.id}>{image.title}</li>
            // })

            // Destructuring the image object
            // images.map( ({id, title, url}) => {
            //   return <GifItem 
            //             key={id}
            //             title={title} 
            //             url={url}/>
            // })

            // Using spread operator
            images.map( (image) => {
              return <GifItem 
                        key={image.id}
                        { ...image }/>
            })
          }
        </div>
    </>
  )
}

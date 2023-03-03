import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [word, setWord] = useState('');

    // const onInputChange = (event) => {
    //     setWord(event.target.value);
    // };
    const onInputChange = ({target}) => {
        setWord(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanWord = word.trim();
        if(cleanWord.length <= 1){
            return;
        }
        
        // setCategories((categories) => [word,...categories]);
        onNewCategory(cleanWord);
        setWord('');
    };

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ word }
            // onChange={ (event) => onInputChange(event)}
            onChange={ onInputChange }
            />
    </form>
  )
}

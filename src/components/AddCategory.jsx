import { useState } from "react";
import  PropTypes  from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

/**
 * Handle form submission.
 * 
 * @param {Event} event - The submit event.
 */
const onSubmit = (event) => {
  event.preventDefault(); // Prevent form from being submitted

  if (inputValue.trim().length <= 1) return; // Check if input value is empty or only has one character

  onNewCategory(inputValue.trim()); // Add new category to the list
  setInputValue(''); // Clear input value
};

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
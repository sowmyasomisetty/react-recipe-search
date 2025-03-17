import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

const IngredientSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async (recipeName) => {
    if (!recipeName.trim()) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/search?q=${recipeName}`);
      setSuggestions(response.data.recipes || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFetchRecipes = useCallback(debounce(fetchRecipes, 500), []);

  useEffect(() => {
    debouncedFetchRecipes(query);
    return () => debouncedFetchRecipes.cancel();
  }, [query, debouncedFetchRecipes]);

  const handleSelectRecipe = async (recipe) => {
    setSelectedRecipe(null); // Reset before loading new data
    setIsLoading(true);

    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${recipe.id}`);
      setSelectedRecipe(response.data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h2>🍽️ Find a Recipe by Name</h2>
      <input
        type="text"
        placeholder="Enter recipe name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((recipe) => (
            <li key={recipe.id} onClick={() => handleSelectRecipe(recipe)}>
              <strong>{recipe.name}</strong> 🍲
            </li>
          ))}
        </ul>
      )}

      {selectedRecipe && (
        <div className="recipe-details">
          <h2>{selectedRecipe.name}</h2>
          <img src={selectedRecipe.image} alt={selectedRecipe.name} className="recipe-image" />
          
          <h3>🛒 Ingredients:</h3>
          <ul className="ingredient-list">
            {selectedRecipe.ingredients.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>

          <h3>👨‍🍳 Cooking Instructions:</h3>
          <p className="recipe-instructions">{selectedRecipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default IngredientSearch;

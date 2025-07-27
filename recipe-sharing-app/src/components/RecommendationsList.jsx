import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);


  const validRecommendations = recommendations.filter(Boolean);

  return (
    <div>
      <h2>Recommended For You</h2>
      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>

      {validRecommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        validRecommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;

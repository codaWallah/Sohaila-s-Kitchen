// Get all recipe cards
const recipeCards = document.querySelectorAll('.recipe-card');

// Add event listeners to each recipe card
recipeCards.forEach((recipeCard) => {
  // Get the buttons and hidden elements
  const showIngredientsBtn = recipeCard.querySelector('#show-ingredients-btn');
  const showStepsBtn = recipeCard.querySelector('#show-steps-btn');
  const ingredientsDiv = recipeCard.querySelector('#ingredients');
  const stepsDiv = recipeCard.querySelector('#steps');
  // Add event listeners to the buttons
  showIngredientsBtn.addEventListener('click', () => {
    ingredientsDiv.classList.toggle('hidden');
  });

  showStepsBtn.addEventListener('click', () => {
    stepsDiv.classList.toggle('hidden');
  });
});





const Recipe = require("../model/recipe.model");

const addRecipe = async (newRecipe) => {
  try {
    const recipe = await Recipe.create(newRecipe);
    return recipe;
  } catch (error) {
    throw error;
  }
};

module.exports = { addRecipe };

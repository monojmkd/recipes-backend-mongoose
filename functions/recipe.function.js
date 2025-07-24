const Recipe = require("../model/recipe.model");

// add
const addRecipe = async (newRecipe) => {
  try {
    const recipe = await Recipe.create(newRecipe);
    return recipe;
  } catch (error) {
    throw error;
  }
};

// getallRecipe
const getAllRecipes = async () => {
  try {
    const allRecipes = await Recipe.find();
    return allRecipes;
  } catch (error) {
    throw error;
  }
};

// get Recipe By title
const getRecipeByTitle = async (title) => {
  try {
    const recipe = await Recipe.find({ title: title });
    return recipe;
  } catch (error) {
    throw error;
  }
};
//get recipe by author
const getRecipeByAuthor = async (author) => {
  try {
    const recipe = await Recipe.find({ author: author });
    return recipe;
  } catch (error) {
    throw error;
  }
};
//get recipe by difficulty level
const getRecipeByDifficulty = async (difficulty) => {
  try {
    const recipe = await Recipe.find({ difficulty: difficulty });
    return recipe;
  } catch (error) {
    throw error;
  }
};
//update recipe's difficulty
const updateRecipeDifficultyById = async (recipeId, dataToUpdate) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      { id: recipeId },
      dataToUpdate,
      {
        new: true,
      }
    );
    return recipe;
  } catch (error) {
    throw error;
  }
};
// update a recipe's prep time and cook time with the help of its title
const updateRecipePrepAndCookTimeByTitle = async (title, dataToUpdate) => {
  try {
    const recipe = await Recipe.findOneAndUpdate(
      { title: title },
      dataToUpdate,
      {
        new: true,
      }
    );
    return recipe;
  } catch (error) {
    throw error;
  }
};
//delete a recipe with the help of a recipe id.
const deleteRecipeById = async (recipeId) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(recipeId);
    return recipe;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addRecipe,
  getAllRecipes,
  getRecipeByTitle,
  getRecipeByAuthor,
  getRecipeByDifficulty,
  updateRecipeDifficultyById,
  updateRecipePrepAndCookTimeByTitle,
  deleteRecipeById,
};

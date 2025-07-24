const express = require("express");
const {
  addRecipe,
  getAllRecipes,
  getRecipeByTitle,
  getRecipeByAuthor,
  getRecipeByDifficulty,
  updateRecipeDifficultyById,
  updateRecipePrepAndCookTimeByTitle,
  deleteRecipeById,
} = require("../functions/recipe.function");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newRecipe = await addRecipe(req.body);
    res.status(201).json({
      message: "New recipe added successfully!",
      newRecipe: newRecipe,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding recipe", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const allRecipes = await getAllRecipes();
    res.status(200).json({ message: "All recipes are:", recipes: allRecipes });
  } catch (error) {
    res.status(500).json({ message: "Error reading all recipes", error });
  }
});

router.get("/:title", async (req, res) => {
  try {
    const recipe = await getRecipeByTitle(req.params.title);
    res.status(200).json({ message: "Recipe Details: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});
router.get("/:author", async (req, res) => {
  try {
    const recipe = await getRecipeByAuthor(req.params.author);
    res.status(200).json({ message: "Recipe Details: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});
router.get("/:difficulty", async (req, res) => {
  try {
    const recipe = await getRecipeByDifficulty(req.params.difficulty);
    res.status(200).json({ message: "Recipe Details: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const recipe = await updateRecipeDifficultyById(req.params.id, req.body);
    res.status(200).json({ message: "Updated Recipe: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});
router.put("/:title", async (req, res) => {
  try {
    const recipe = await updateRecipePrepAndCookTimeByTitle(
      req.params.title,
      req.body
    );
    res.status(200).json({ message: "Updated Recipe: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const recipe = await deleteRecipeById(req.params.id);
    res.status(200).json({ message: "Deleted Recipe: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});

module.exports = router;

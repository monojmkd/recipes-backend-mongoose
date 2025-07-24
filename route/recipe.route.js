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

    if (!recipe || recipe.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

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

    if (!recipe || recipe.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "All recipes are:", recipes: allRecipes });
  } catch (error) {
    res.status(500).json({ message: "Error reading all recipes", error });
  }
});

router.get("/title/:title", async (req, res) => {
  try {
    const recipe = await getRecipeByTitle(req.params.title);

    if (!recipe || recipe.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe Details: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});
router.get("/author/:author", async (req, res) => {
  try {
    const recipe = await getRecipeByAuthor(req.params.author);

    if (!recipe || recipe.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe Details: ", recipe: recipe });
  } catch (error) {
    res.status(500).json({ message: "Error: ", error: error.message });
  }
});
router.get("/difficulty/:difficulty", async (req, res) => {
  try {
    const recipe = await getRecipeByDifficulty(req.params.difficulty);

    if (!recipe || recipe.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe Details: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const recipe = await updateRecipeDifficultyById(req.params.id, req.body);

    if (!recipe || recipe.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Updated Recipe: ", recipe: recipe });
  } catch (error) {
    res.status(500).json({ message: "Error Updating: ", error: error.message });
  }
});
router.put("/title/:title", async (req, res) => {
  try {
    const recipe = await updateRecipePrepAndCookTimeByTitle(
      req.params.title,
      req.body
    );

    if (!recipe || recipe.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Updated Recipe: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const recipe = await deleteRecipeById(req.params.id);

    if (!recipe || recipe.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Deleted Recipe: ", recipe: recipe });
  } catch (error) {
    res.status(500).json("Error: ", error);
  }
});

module.exports = router;

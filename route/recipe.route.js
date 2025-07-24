const express = require("express");
const { addRecipe, getAllRecipes } = require("../functions/recipe.function");
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

module.exports = router;

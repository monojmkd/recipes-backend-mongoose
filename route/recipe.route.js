const express = require("express");
const { addRecipe } = require("../functions/recipe.function");
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

module.exports = router;

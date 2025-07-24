const { initializeDatabase } = require("./db/db.connect");
const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();

app.use("/recipes", require("./route/recipe.route"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

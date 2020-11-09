const Recipe = require("../models/recipe");
const RecipeList = require("./recipe.json");
console.log(RecipeList)

Recipe.deleteMany({}).then(() => {
  // Mongoose Model creating data
  Recipe.create(RecipeList).then((output) => {
    console.log(output);
    process.exit();
  });
});

//console.log the output after the create of the recipe

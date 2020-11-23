const Recipe = require("../models/recipe");
const RecipeList = require("./recipe.json");
console.log(RecipeList);

Recipe.deleteMany({}).then(() => {
  Recipe.create(RecipeList).then((output) => {
    console.log(output);
    process.exit();
  });
});

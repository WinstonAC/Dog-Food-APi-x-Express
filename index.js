const express = require("express");
const app = express();
const recipe = require("./models/recipe");
const parser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(parser.json());

app.get("/", (req, res) => {
  recipe.find({}).then((recipe) => {
    res.json(recipe);
  });
});
app.get("/recipe", (req, res) => {
  recipe.find({}).then((recipe) => {
    res.json(recipe);
  });
});

app.post("/recipe", (req, res) => {
  console.log("you are submitting data to create a recipe", req.body);

  recipe.create(req.body).then((recipe) => {
    res.json(recipe);
  });
});
app.post("/recipe/:id/directions", (req, res) => {
  console.log("you are submitting data to create a recipe", req.body);

  recipe
    .findByIdAndUpdate(
      req.params.id,
      { $push: { items: req.body } },
      { new: true }
    )
    .then((recipe) => {
      res.json(recipe);
    });
});
app.get("/recipe/:title/:ingredient", (req, res) => {
  recipe.find({ title: req.params.title }).then((recipe) => {
    res.json(recipe);
  });
});

app.put("/recipe/:title", (req, res) => {
  recipe
    .findOneAndUpdate({ title: req.params.title }, req.body, { new: true })
    .then((recipe) => {
      res.json(recipe);
    });
});
app.delete("/recipe/:title", (req, res) => {
  recipe
    .findOneAndRemove({ title: req.params.title }, req.body)
    .then((recipe) => {
      res.json(recipe);
    });
});

app.set("1717", process.env.PORT || 8800);

app.listen(app.get("1717"), () => {
  console.log('check PORT: ${app.get("1717")} star');
});

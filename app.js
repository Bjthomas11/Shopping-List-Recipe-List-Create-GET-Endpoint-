const express = require("express");
// const morgan = require("morgan");
const bodyParser = require("body-parser");

const {ShoppingList, Recipes} = require("./models");

const jsonParser = bodyParser.json();
const app = express();

// app.use(morgan("common"));

Recipes.create('boiled white rice', ['1 cup white rice', '2 cups water', 'pinch of salt']);
Recipes.create('milkshake', ['2 tbsp cocoa', '2 cups vanilla ice cream', '1 cup milk']);

app.get("/recipes", (req,res) => {
    res.json(Recipes.get());
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 5000}`);
  });
  
const mongoose = require("../db/connection");

const Recipe = new mongoose.Schema({
    title: String,
    ingredients: [String],
    tools: [String],
    directions: [String],
    aditional_comments: String
}) 


module.exports = mongoose.model("Recipe", Recipe);
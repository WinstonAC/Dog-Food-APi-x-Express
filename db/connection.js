const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/recipe", {usedNewUrlParser:true})
module.exports = mongoose;


let mongoURI = "";

if(process.env.NODE_ENV === "production"){
    mongoURI = process.env.DB_URL;
}else {
    mongoURI = "mongodb://localhost/recipe";
}


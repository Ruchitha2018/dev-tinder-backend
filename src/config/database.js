const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://ruchitadeshpande2023:Ruchi2024@usersapp.a8k6k.mongodb.net/devTinder");   
}
module.exports = connectDB;

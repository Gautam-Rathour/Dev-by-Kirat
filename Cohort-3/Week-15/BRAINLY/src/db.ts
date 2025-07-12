

// create user models and schemas here

import mongoose, { model, Schema } from "mongoose";
// import mongoDB_URL from "../.env";




mongoose.connect("mongodb+srv://gautam:od3aYN8bBZGHv8DQ@cluster0.obw8w.mongodb.net/brainly")
.then(() => {
    console.log("successfully connected to mongoDB");
})
.catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
})






const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
})

export const UserModel = model("User", UserSchema);















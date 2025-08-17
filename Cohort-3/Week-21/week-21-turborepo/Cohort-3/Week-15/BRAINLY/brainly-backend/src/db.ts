

// create user models and schemas here

import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();




const mongoDB_URL = process.env.MONGODB_URL as string;
console.log("Mongo URL: -  ", mongoDB_URL);

mongoose.connect('mongodb://127.0.0.1:27017/brainly')
.then(() => {
    console.log("successfully connected to mongoDB");
})
.catch((err) => {
    console.error("MongoDB connection error:", err.message);
})








const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
})


const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
});


const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true, unique: true},
});





export const UserModel = model("User", UserSchema);
export const ContentModel = model ("Content", ContentSchema);
export const LinkModel = model ("Link", LinkSchema);









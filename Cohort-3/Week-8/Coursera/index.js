const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();



app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);


function main() {
    mongoose.connect("mongodb+srv://gautam:1WO6RSk1On7c9pNm@cluster0.obw8w.mongodb.net/Coursera-app");
    app.listen(3000);
    console.log("listening on port 3000");
}


main();

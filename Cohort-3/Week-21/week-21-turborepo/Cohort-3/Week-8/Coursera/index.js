require("dotenv").config()
console.log(process.env.MONGO_URL);
// const { JWT_USER_PASSWORD } = require("./routes/user");
// const { JWT_ADMIN_PASSWORD } = require("./routes/admin");
// console.log(JWT_USER_PASSWORD);
// console.log(JWT_ADMIN_PASSWORD);


const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());


app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);



async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("listening on port 3000");
}


main();


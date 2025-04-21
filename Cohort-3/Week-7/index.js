
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const JWT_SECRET = "ILoveKirat"


mongoose.connect("mongodb+srv://gautam:Gautam%40123@cluster0.obw8w.mongodb.net/todo-app-database-new")
const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    await UserModel.create({
        name: name,
        email: email,
        password: password
    })

    res.json({
        massage: "You are signUp Successfully! "
    })
})

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    consle.log(user)

    if(user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET)
        res.json({
            token: token
        })
    } else {
        res.status(404).send({
            massage: "Invalid email or password"
        })
    }
    
})

app.post("/todo", function(req, res) {
    
})

app.get("/todos", function(req, res) {
    
})


app.listen(3000);
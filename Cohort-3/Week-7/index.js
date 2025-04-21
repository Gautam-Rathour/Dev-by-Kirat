
const express = require("express");
const { UserModel, TodoModel } = require("./db");


const app = express();
app.use(express.json());

app.post("/signup", function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    UserModel.insert({
        name: name,
        email: email,
        password: password
    })

    res.json({
        massage: "You are signUp Successfully! "
    })
})

app.post("/signin", function(req, res) {
    
})

app.post("/todo", function(req, res) {
    
})

app.get("/todos", function(req, res) {
    
})


app.listen(3000);
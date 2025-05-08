

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "mohitlovepalji"

app.use(express.json());

let users = [];

function logger(req, res, next) {
    console.log(req.method + " request came");
    next();
}

// localhost:3000
app.get("/", function(req, res) {
    res.sendFile("/Users/gautamrathour/HARKIRAT/Cohort-3/Week-6/Auth_And_Connecting_FE_To_BE/public /index.html");
})

app.post("/signup", logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    //we should check if a user with this username already exists.

    res.json({
        message: "You signup, Successfully"
    })
})

app.post("/signin", logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0; i<users.length; i++) {
        if(users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }
    }

    if(foundUser) {
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        // res.header("jwt", token);

        // res.header("random", "harkirat");

        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

function auth(req, res, next) {
    const token  = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);


    if(decodedData.username) {
        req.username = decodedData.username;
        next()
    } else {
        res.json ({
            message: "you are not abel to logged in"
        })
    }
}


app.get("/me", logger, auth, function(req, res) {

    let foundUser = null;

    for(let i=0; i<users.length; i++) {
        if(users[i].username === req.username) {
            foundUser = users[i];
        }
    }

    res.send({
        username: foundUser.username,
        password: foundUser.password
    })
})

// app.get("/todo", auth, function(req, res) {

// })

// app.post("/todo", auth, function(req, res) {
    
// })

// app.delete("/todo", auth, function(req, res) {
    
// })

app.listen(3000);


























































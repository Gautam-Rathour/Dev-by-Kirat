
const bcrypt = require("bcrypt")
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { z } = require("zod");

const JWT_SECRET = "ILoveKirat"


mongoose.connect("mongodb+srv://gautam:Gautam%40123@cluster0.obw8w.mongodb.net/todo-app-week-7-2");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const requiredBody = z.object({
        name: z.string().min(5).max(50),
        email: z.string().min(5).max(50).email(),
        password: z.string().min(8).max(60)
    })
    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success) {
        res.send({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const name = req.body.name;  // string , min-60
    const email = req.body.email;  // string, @ , max-50
    const password = req.body.password;  //string, min-10


    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);
    
    await UserModel.create({
        name: name,
        email: email,
        password: hashedPassword
    })

    res.json({
        massage: "You are signUp Successfully! "
    })
})

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    })

    if(!response) {
        res.status(403).send({
            massage: "User does not exist in our db"
        })
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if(passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid password"
        })
    }
    
})

app.post("/todo", auth, function(req, res) {
    const userId = req.userId;
    const title = req.body.title;

    TodoModel.create({
        title,
        userId
    })

    res.json({
        userId: userId
    })
    
})

app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        userId: userId
    })
})


function auth(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.staus(403).send({
            massage: "Invalid token"
        })
    }
}




app.listen(3000);
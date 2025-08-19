


import express from "express";




const app = express();



app.get("/signup", (req, res) => {
    res.send("Hello world");
})

app.get("/login", (req, res) => {
    res.send("Hello world");
})

app.get("/chat", (req, res) => {
    res.send("Hello world");
})


app.listen(3002, () => {
    console.log("Server is running on port 3002");
})
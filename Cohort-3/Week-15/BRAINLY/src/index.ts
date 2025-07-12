


import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import z from "zod";
import { UserModel } from "./db";








const app = express();
app.use(express.json());


// const signupSchema = z.object({
//     username: z.string().min(3).max(20),
//     password: z.string().min(8).max(16),
// })


app.post("/api/v1/signup", async (req, res) => {
    // zod validation
    const username = req.body.username;
    const password = req.body.password;

    await UserModel.create({
        username: username,
        password: password,
    })

    res.json({
        message: "User signed up"
    })
    
});


app.post("/api/v1/signin", (req, res) => {
    const username = req.body.username;
})


app.post("/api/v1/content", (req, res) => {
    console.log("Post this content content");
})


app.get("/api/v1/content", (req, res) => {
    console.log("This is your content");
    res.send("This is you main page");
})


app.delete("/api/v1/content", (req, res) => {
    
})


app.post("/api/v1/share", (req, res) => {
    
})


app.get("/api/v1/shareLink", (req, res) => {
    
})



    // const PORT = 3000;
    // app.listen(PORT, () => {
    //   console.log(`Server is listening on http://localhost:${PORT}`);
    // });

    app.listen(3001, () => {
        console.log("✅ Server is running at http://localhost:3001");
      });
      
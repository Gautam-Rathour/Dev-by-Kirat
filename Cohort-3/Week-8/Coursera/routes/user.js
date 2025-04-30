// const express = require("express");
// const { Router } = express.Router();


const { Router } = require("express");
const { userModel } = require("../db");
const { z } = require("zod");
const { bcrypt } = require("bcrypt");

const userRouter = Router();


    userRouter.post("/signup", async function(req, res) {
        const { email, password, firstName, lastName } = req.body;

        // TODO: adding zod validation
        const requiredBody = z.object({
            email: String().min(5).max(20).email(),
            password: String().min(5).max(20),
            firstName: String().min(5).max(30),
            lastName: String().min(5).max(10)
        });

        const parseDataWithSuccess = requiredBody.safeParse(req.body);

        if(!parseDataWithSuccess.success) {
            res.send({
                message: "Invalid formate",
                error: parseDataWithSuccess.error
            })
            return;
        }

        // TODO: hash the password so plaintext pw is not stored in the DB
        const hashedPassword = await bcrypt.hash(password, 5);

        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName:firstName,
            lastName:lastName
        })

        res.json({
            message: "signup successfully!"
        })
    })
    
    userRouter.post("/signin", function(req, res) {

        res.json({
            message: "signin endpoint"
        })
    })
    
    userRouter.get("/purchase", function(req, res) {
        res.json({
            message: "purchase"
        })
    })



module.exports = {
    userRouter: userRouter
}
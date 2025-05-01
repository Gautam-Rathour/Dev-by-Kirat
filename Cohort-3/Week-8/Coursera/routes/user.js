// const express = require("express");
// const { Router } = express.Router();


const { Router } = require("express");
const { userModel } = require("../db");
const { z } = require("zod");
const  bcrypt  = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");


const userRouter = Router();


    userRouter.post("/signup", async function(req, res) {
        const { email, password, firstName, lastName } = req.body;

        // TODO: adding zod validation
        const requiredBody = z.object({
            email: z.string().min(5).max(50).email(),
            password: z.string().min(5).max(20),
            firstName: z.string().min(5).max(30),
            lastName: z.string().min(5).max(10)
        });

        const parseDataWithSuccess = requiredBody.safeParse(req.body);

        if(!parseDataWithSuccess.success) {
            res.send({
                message: "Invalid format",
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
    
    userRouter.post("/signin", async function(req, res) {
        const { email, password } = req.body;

        const matchEmail = await userModel.findOne({
            email: email
        })

        if(!matchEmail) {
            res.status(403).send({
                massage: "User is not exist in out DataBase."
            })
        }

        const passwordMatch = await bcrypt.compare(password, matchEmail.password);

        if(passwordMatch) {
            const token = jwt.sign({
                id: matchEmail._id.toString()
            }, JWT_USER_PASSWORD)
            
            // Do cookie logic

            res.send({
                token: token
            })
        } else {
            res.status(403).send({
                message: "Incorrect credentials"
            })
        }


        res.json({
            message: "signin successfully!"
        })
    })
    
    userRouter.get("/purchase", userMiddleware, async function(req, res) {
        const userId = req.userId;

        const purchases = await purchaseModel.find({
            userId,
        })
        res.json({
            purchases
        })
    })



module.exports = {
    userRouter: userRouter,
    JWT_USER_PASSWORD: JWT_USER_PASSWORD
}
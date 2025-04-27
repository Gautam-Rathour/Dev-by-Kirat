
const { Router } = require("express");

const userRouter = Router();


    userRouter.post("/user/signup", function(req, res) {
        res.json({
            message: "signup endpoint"
        })
    })
    
    userRouter.post("/user/signin", function(req, res) {
        res.json({
            message: "signin endpoint"
        })
    })
    
    userRouter.get("/user/purchase", function(req, res) {
        res.json({
            message: "purchase"
        })
    })

    

module.exports = {
    userRouter: userRouter
}
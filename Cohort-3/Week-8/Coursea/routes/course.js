
const { Router } = require("express");

const courseRouter = Router();


    courseRouter.post("/course/purchase", function(req, res) {
        res.json({
            message: " ........... "
        })
    })
    
    courseRouter.get("/courses/preview", function(req, res) {
        res.json({
            message: " ........... "
        })    
    })
    

module.exports = {
    courseRouter: courseRouter
}
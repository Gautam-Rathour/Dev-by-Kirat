

const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");


// auth, jsonwebtoken, zod


adminRouter.post("/signup", async function(req, res) {
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

    await adminModel.create({
        email: email,
        password: hashedPassword,
        firstName:firstName,
        lastName:lastName
    })

    res.json({
        message: "signup successfully!"
    })
})

adminRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

        const matchEmail = await adminModel.findOne({
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
            }, JWT_ADMIN_PASSWORD)
            
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

adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    // Learn how user can send image the place of imageUrl --
    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl:imageUrl,
        price: price,
        creatorId: adminId
    })
    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put("/course", function(req, res) {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.get("/course/bulk", function(req, res) {
    res.json({
        message: "signin endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}
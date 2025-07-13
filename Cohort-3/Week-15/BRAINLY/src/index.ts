


import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import z from "zod";
import { UserModel } from "./db";
import { JWT_SECRET } from "./config"
import { userMeddleware } from "./middleware";
import { ContentModel } from "./db";



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



app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({username: username});

    if(existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(401).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/api/v1/content", userMeddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link: link,
        type: type,
        // @ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content Added!"
    })
})



app.get("/api/v1/content", userMeddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content: content
    })
});


app.delete("/api/v1/content", userMeddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId: contentId,
        // @ts-ignore
        userId: req.userId
    })
    
    res.json({
        message: "Deleted!"
    })
})


app.post("/api/v1/share", userMeddleware, async (req, res) => {
    const contentId = req.body.contentId;
    
    const content = await ContentModel.findOne({
        contentId: contentId,
        // @ts-ignore
        userId: req.userId
    })

    if(!content) {
        res.status(404).json({
            message: "Content not found"
        })
    } else {
        res.json({
            message: "Content found",
            content: {
                title: content.title,
                link: content.link,
                contentId: content._id
            }
        })
    }
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
      



declare global {
    namespace Express {
      export interface Request {
        userId?: string;
      }
    }
  }

  
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import z from "zod";
import { UserModel } from "./db";
import { JWT_SECRET } from "./config"
import { userMeddleware } from "./middleware";
import { ContentModel, LinkModel } from "./db";
import { random } from "./utils";
import cors from "cors";




const app = express();
app.use(express.json());
app.use(cors());


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

    
    console.log("Received signup request:", req.body);
    
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


app.post("/api/v1/brain/share", userMeddleware, async (req, res) => {
    const share = req.body.share;
    
    if(share) {
        const existingLink = await LinkModel.findOne({
            userId: req.userId
        })

        if(existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        })

        res.json({
            hash
        })
    } else {
        await LinkModel.deleteOne({
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }

    res.json({
        message: "Updated sharable link"
    })
})


app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash: hash
    });

    if(!link) {
        res.status(411).json({
            message: "Sorry incorrect link"
        })
        return;
    }

    // userId
    const content = await ContentModel.find({
        userId: link.userId
    })

    console.log(link);
    const user = await UserModel.findOne({
        _id: link.userId
    })

    if(!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })
})






    app.listen(3000, () => {
        console.log("✅ Server is running at http://localhost:3000");
      });
      
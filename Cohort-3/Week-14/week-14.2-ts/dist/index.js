"use strict";
// interface Address {
//         city: string,
//         country: string,
//         pincode: number
//     }
const users = {
    "ras@qd1": { age: 21, name: "harkirat" },
    "ras1dr@": { age: 33, name: "Adsdsd" },
};
// Map : ---
const users = new Map();
users.set("ras@qd1", { name: "Ras", age: 30, email: "ras@qd1" });
users.set("sarah@qd1", { name: "Sarah", age: 32, email: "sarah@qd1" });
const user = users.get("ras@qd1");
console.log(user);
users.delete("ras@qd1");
console.log(user);
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// // Zod  : ----
// import { z } from 'zod';
// import express from "express";
// const app = express();
// // Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });
// app.put("/user", (req, res) => {
//   const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody = req.body; // how to assign a type to updateBody?
//   if (!success) {
//     res.status(411).json({});
//     return
//   }
//   // update database here
//   res.json({
//     message: "User updated"
//   })
// });
// app.listen(3000);
// ===================================================================================================// ===================================================================================================
// import z from 'zod';
// const StringZodSchema = z.string();
// type StringZodType = z.infer<typeof StringZodSchema>; //string

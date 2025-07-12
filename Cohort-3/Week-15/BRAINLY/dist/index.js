"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const signupSchema = z.object({
//     username: z.string().min(3).max(20),
//     password: z.string().min(8).max(16),
// })
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // zod validation
    const username = req.body.username;
    const password = req.body.password;
    yield db_1.UserModel.create({
        username: username,
        password: password,
    });
    res.json({
        message: "User signed up"
    });
}));
app.post("/api/v1/signin", (req, res) => {
    const username = req.body.username;
});
app.post("/api/v1/content", (req, res) => {
    console.log("Post this content content");
});
app.get("/api/v1/content", (req, res) => {
    console.log("This is your content");
    res.send("This is you main page");
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/share", (req, res) => {
});
app.get("/api/v1/shareLink", (req, res) => {
});
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is listening on http://localhost:${PORT}`);
// });
app.listen(3001, () => {
    console.log("✅ Server is running at http://localhost:3001");
});

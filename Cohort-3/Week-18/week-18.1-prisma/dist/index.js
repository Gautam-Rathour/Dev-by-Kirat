"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const app = (0, express_1.default)();
const client = new client_1.PrismaClient();
app.post("/user", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const hasedPassword = bcrypt_1.default.hash(password, 16);
    client.user.create({
        data: {
            username: username,
            password: hasedPassword
        }
    });
});
app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    });
});
app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const user = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json({
        user
    });
});
app.listen(3000);
async function getUser() {
    const user = await client.user.findFirst({
        where: {
            id: 1
        }, include: {
            todos: true
        }
    });
    console.log(user);
}
getUser();
//# sourceMappingURL=index.js.map
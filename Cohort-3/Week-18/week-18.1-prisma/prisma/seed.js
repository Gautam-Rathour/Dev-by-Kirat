"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
async function createDummyUsers() {
    await client.user.create({
        data: {
            username: "monu123",
            age: 33,
            password: "monu12312",
            city: "mathura",
            todos: {
                create: {
                    title: "Gym",
                    description: "Go to gym.",
                    done: false
                }
            }
        }
    });
}
createDummyUsers();
//# sourceMappingURL=seed.js.map
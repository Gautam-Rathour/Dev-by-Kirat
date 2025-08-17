

import { PrismaClient } from "@prisma/client"

const client = new PrismaClient();


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
    })
}


createDummyUsers();



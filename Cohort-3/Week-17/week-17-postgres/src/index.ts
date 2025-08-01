


import express from "express";
import { Client } from "pg";


const app = express();
app.use(express.json());


const pgClient = new Client('postgresql://neondb_owner:npg_8TcI2kxpzOCd@ep-curly-forest-ad3h77on-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
pgClient.connect();


// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_8TcI2kxpzOCd",
//     port: 5432,
//     host: "ep-curly-forest-ad3h77on-pooler.c-2.us-east-1.aws.neon.tech",
//     database: "neondb",
//     ssl: true
// })


// async function main() {
//     const response = await pgClient.query("SELECT * FROM users");
//     console.log(response);
// }

// main();



app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;


    try {

        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`

        const response = await pgClient.query(insertQuery, [username, email, password]);

        res.json({
            message: "You have signed up"
        })
    } catch (e) {
        console.log(e)
        res.json ({
            message: "Error while signing up"
        })
    }
    
})


app.listen(3000);


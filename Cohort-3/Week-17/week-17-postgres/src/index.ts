
import { Client } from "pg";

// const pgClient = new Client('postgresql://neondb_owner:npg_8TcI2kxpzOCd@ep-curly-forest-ad3h77on-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');


const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_8TcI2kxpzOCd",
    port: 5432,
    host: "ep-curly-forest-ad3h77on-pooler.c-2.us-east-1.aws.neon.tech",
    database: "neondb",
    ssl: true
})


async function main() {
    await pgClient.connect();
    const response = await pgClient.query("USERS * FROM users");
    console.log(response);
}


main();



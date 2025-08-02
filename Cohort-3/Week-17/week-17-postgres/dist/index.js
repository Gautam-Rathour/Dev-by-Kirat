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
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client('postgresql://neondb_owner:npg_8TcI2kxpzOCd@ep-curly-forest-ad3h77on-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id ) VALUES ($1, $2, $3, $4, $5);`;
        yield pgClient.query("BEGIN;");
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id;
        const addressInsertResponse = yield pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
        yield pgClient.query("COMMIT;");
        res.json({
            message: "You have signed up"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error while signing up"
        });
    }
}));
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query1 = `SELECT * FROM users WHERE id = $1`;
    const response1 = yield pgClient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE user_id = $1`;
    const response2 = yield pgClient.query(query2, [id]);
    res.json({
        user: response1.rows[0],
        address: response2.rows
    });
}));
app.get("/better-metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode 
    FROM users RIGHT JOIN addresses ON users.id = addresses.user_id
    WHERE users.id = $1;`;
    const response = yield pgClient.query(query, [id]);
    res.json({
        response: response.rows
    });
}));
app.listen(3000);

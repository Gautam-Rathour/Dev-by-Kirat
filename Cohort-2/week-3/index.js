//=========================================================================================
//=========================================================================================


const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "harkirat" || password != "pass") {
        res.status(400).json({"msg": "Somethings up with your ionputs"})
        return
    }
 
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({"msg": "Somethings up with your ionputs"})
        return
    }

    //do somethign with kidney here 
    res.json({
        msg: "Your kidney is fine!"
    })
});

app.listen(3000);


//=========================================================================================
//=========================================================================================

// const fs = require("fs");
// // filesystem module

// fs.readFile("a.txt", "utf-8", function (err, data) {
//     console.log(data);

// })

// console.log("hii there");

// // task very long , longer then the task
// let a = 1;
// for(let i=1; i<1000000000; i++) {
//     a += i;
// }

// console.log("hii there 2");




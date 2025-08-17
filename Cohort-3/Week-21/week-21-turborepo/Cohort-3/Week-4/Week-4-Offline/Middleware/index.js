// const express = require("express");

// const app = express();

// // function that returns a boolean if the age of the person is more than 14.
// function isOldEnough(age) {
//     if(age >= 14) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isOldEnoughMiddleware(req, res, next) {
//     const age = req.query.age;
//     if(age >= 14) {
//         next();
//     } else {
//         res.json({
//             msg: "Sorry you are not of age yet."
//         })
//     }
// }

// app.use(isOldEnoughMiddleware);

// app.get("/ride1", function(req, res) {
//         res.json({
//             msg: "you have successfully riden the ride 1"
//         });
// });

// app.get("/ride2", function(req, res) {
//         res.json({
//             msg: "you have successfully riden the ride 2"
//         });
// });

// app.listen(3000);


// =============================================================================
// =============================================================================
// =============================================================================



const express = require("express");
const app = express();



let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use(function(req, res, next) {
    const userId = req.headers["user-id"]

    if(numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId]++;
        if(numberOfRequestsForUser[userId] > 5) {
            res.status(404).send("no entry");
        } else {
            next();
        }
    } else {
        numberOfRequestsForUser[userId] = 1;
        next();
    }
})



app.listen(3000);























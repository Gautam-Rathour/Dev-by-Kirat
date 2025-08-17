// =======================================================================
// =======================================================================

// const express = require("express");

// const app = express();

// let requestCount = 0;

// function requestIncreaser(req, res, next) {
//     requestCount = requestCount + 1;
//     // req.Name = "random@123";
//     console.log("Total number of requests = " + requestCount);
//     res.json({
//         message: "You are not authenticated"
//     })
// }

// function realSumHandler(req, res) {
//     console.log("control reached the real handler");
//     //main logic
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     console.log(req.Name);

//     res.json({
//         ans: a + b
//     });
// }

// //better routing, and database, middlwares
// app.get("/sum", requestIncreaser, realSumHandler);

// app.listen(3000);


// =======================================================================
// =======================================================================



// const express = require("express");

// const app = express();
// // logs the method, timestamp and the url


// // IMP - ------------- -
// function loggerMiddleware(req, res, next) {
//     console.log("method is " + req.method);
//     console.log("Host is " + req.hostname);
//     console.log("Route is  " + req.url);
//     console.log(new Date());
//     //  if you want you can log the status code of the response.
//     next();
// }
// app.use(loggerMiddleware);

// app.get("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a * b
//     })
// });

// app.get("/divide", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a / b
//     })

// });

// app.get("/subtract", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a - b
//     })
// });

// app.listen(3000);



// // =======================================================================
// // =======================================================================



// const express = require("express");
// const loggerMiddleware = require("logger");

// const app = express();


// app.use(loggerMiddleware);

// app.post("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.listen(3000);


// =======================================================================
// =======================================================================



const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.json());

app.post("/sum", function(req, res) {
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    });
});

app.listen(3000);












































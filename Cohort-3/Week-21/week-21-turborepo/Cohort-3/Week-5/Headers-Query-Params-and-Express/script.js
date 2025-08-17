
const express = require("express");

const app = express();


//better routing, add database, middlwares
app.get("/add/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a + b
    })
})

app.get("/subtract/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a - b
    })
})

app.get("/multiply/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a * b
    })
})

app.get("/divide/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a / b
    })
})

app.listen(3000);


// =======================================================================
// =======================================================================

// const express = require("express");

// const app = express();

























































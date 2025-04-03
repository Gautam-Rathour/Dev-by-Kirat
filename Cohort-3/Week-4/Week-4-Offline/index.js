// /Users/gautamrathour/HARKIRAT/Cohort-3/Week-4/Week-4-Offline

// ===================================================================== 
// ===================================================================== 

// const express = require("express");

// const app = express();

// function sum(n) {
//     let ans = 0;
//     for(let i=1; i<=n; i++) {
//         ans += i;
//     } 
//     return ans;
// }

// // app.get("/", function(req, res) {
// //     const n = req.query.n;
// //     const ans = sum(n);
// //     res.send("hi your ans is = " + ans);
// // })

// app.listen(3000);


// ===================================================================== 
// ===================================================================== 


const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

//query parameters -------
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {

})

app.listen(3000);  // server is running on port 3000

















































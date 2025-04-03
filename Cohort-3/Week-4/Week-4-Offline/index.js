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
// ===================================================================== 



// const express = require("express");
// const app = express();

// const users = [{
//     name: "John",
//     kidneys: [{
//         healthy: false
//     }]
// }];

// app.use(express.json());

// app.get("/", function(req, res) {
//     const johnKidneys = users[0].kidneys;
//     const numberOfKidneys = johnKidneys.length;
//     let numberOfHealthyKidneys = 0;
//     for(let i=0; i<johnKidneys.length; i++) {
//         if(johnKidneys[i].healthy) {
//             numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
//         }
//     }
//     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnhealthyKidneys
//     })
// })

// app.post("/", function(req, res) {
//     const n = req.query.n;
//     console.log(req.body);  //undefinde
//     const isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy: isHealthy
//     })
//     res.json({
//         msg: "Done!"
//     })
// })

// //  411
// app.put("/", function(req, res) {
//     for(let i=0; i<users[0].kidneys.length; i++) {
//         users[0].kidneys[i].healthy = true;
//     }
//     res.json({});
// })


// // removing all the unhealthy kidneys : ---
// app.delete("/", function(req, res) {
//     if(isThereAtleastOneUnhealthyKidney()) {
//         const newKidneys = [];
//         for(let i=0; i<users[0].kidneys.length; i++) {
//             if(users[0].kidneys[i].healthy) {
//                 newKidneys.push({
//                     healthy: true
//                 })
//             }
//         }
//         users[0].kidneys = newKidneys;
//         res.json({msg: "done----!"})
//         } else {
//             res.status(411).json({
//                 msg: "You have no bad kidneys"
//             });
//         }

    
// })

// function isThereAtleastOneUnhealthyKidney() {
//     let atleastOneUnhealthyKidney = false;
//     for(let i=0; i<users[0].kidneys.length; i++) {
//         if(!users[0].kidneys[i].healthy) {
//             atleastOneUnhealthyKidney = true;
//         }
//     }
//     return atleastOneUnhealthyKidney;
// }

// app.listen(3000);  // server is running on port 3000


// ===================================================================== 
// ===================================================================== 
// ===================================================================== 


const express = require("express");
const app = express();

app.get("/files/:fileName", function(req, res) {
    const name = req.params.fileName;
    console.log(name);
    res.json({});
})

app.listen(3000);  // server is running on port 3000
















































// const jwt = require("jsonwebtoken");


// //decode, verify, generate

// const value = {
//     name: "harkirat",
//     accountNumber: 12312312344
// }


//sign and not generate
// const token1 = jwt.sign(value, "secret");
// console.log(token1);

// =======================================================================

// // verify
// const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjM0NCwiaWF0IjoxNzQ0ODMwMDAwfQ.iXeOEtbn6DnS_s7_soK4IDYMbOT4bkeSaj84fsGJMcA", "secret");
// console.log(token);

//this token has been generated using this secret, and hence this token
// can only be verified using this secret

//this is your chequebook

// =======================================================================

// // verify
// const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjM0NCwiaWF0IjoxNzQ0ODMwMDAwfQ.iXeOEtbn6DnS_s7_soK4IDYMbOT4bkeSaj84fsGJMcA", "secret");
// console.log(token);

// =======================================================================
// =======================================================================


// Try catch : -

function getLength(name) {
    return name.length;
}

try {
    const ans = getLength();
    console.log(ans)
} catch (err) {
    console.log("Error : - " , err.message);
}

console.log("hi there.");









































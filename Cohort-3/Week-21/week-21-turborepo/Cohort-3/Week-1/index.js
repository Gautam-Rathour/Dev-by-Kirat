// let firstName = "Rajubhai";
// const age = 30;
// var isStudent = true;

// console.log(firstName);
// console.log(age);
// console.log(isStudent);


// var isStudent = true;
// isStudent = "harkirat";
// isStudent = 10;

// console.log(isStudent);


// let     // const

// let isStudent = true;
// let firstName = "Raju";
// firstName = "Muna";

// console.log(firstName);

// let color = "white";
// const height = 6.2;
// var likepizza = true;

// console.log(color);
// console.log(height);
// console.log(likepizza);  // true

// ========================================================================================================
// ========================================================================================================
 
// let number = 42;             // Number
// let string = "Hello World";  // String
// let isActive = false;        // Boolean
// let numbers = [1, 2, 3];     // Array

// let Name = ["Rahul", "Mohit", "Monu", "Sonu"];
// console.log(Name[3])

// ========================================================================================================
// ========================================================================================================
 
// let sum = 10 + 5;          // Arithmetic operator
// let isEqual = (10 === 10); // Comparison operator
// let isTrue = (true && false); // Logical operator

// ========================================================================================================
// ========================================================================================================
 
// // Function declaration
// function greet(name) {
//     return "Hello, " + name;
// } 

// // Function call
// let message = greet("John"); // "Hello, John"

// let ans1 = greet("mohit");
// let ans2 = greet("raman");
// let ans3 = greet("kirat");

// console.log(ans1);
// console.log(ans2);
// console.log(ans3);

// ========================================================================================================
 
// function sum(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }

// sum(3, 5);
// sum(10, 20);


// function Vote(age) {
//     if(age > 18) {
//         console.log("can Vote");
//     } else {
//         console.log("can't Vote");
//     }
// }

//  Vote(3);

// ========================================================================================================
 
// function greet(user) {
//     console.log("Hello " + user.name + " your age is " + user.age);
// }

// let user = {
//     name: "mohan",
//     age: 52
// }

// greet(user);

// ========================================================================================================
 
// function greet(user) {
//     console.log(`hi ${user.gender} ${user.name}, your age is ${user.age}`);
//     if(user.age > 18) {
//         console.log("you can vote");
//     } else {
//         console.log("you can't vote");
//     }
// }
// let user = {
//     name : "Ramesh",
//     age : 50,
//     gender : "mr"
// }

// greet(user);

// ========================================================================================================
// ========================================================================================================

//  let arr = ["Muna", 34, {
//     name : "Mohit",
//     age: 34,
//     cities: ["delhi", "chandigarh", "bangalore", {
//         country: "malaysta",
//         city: "kuala lumpur"
//     }]
//  }];

// console.log(arr[2].cities[3].city);


//  const val1 = arr[2];
//  const val2 = {
//     name : "Mohit",
//     age: 34
//  }
//  console.log(val1);
//  console.log(val2);

// ========================================================================================================
// ========================================================================================================

function findMale(arr) {
    // filter in js array
    let arr2 = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i].gender == "male" && arr[i].age > 18) {{
            arr2.push(arr[i]);
        }}
    }
    return arr2;
}


const user = [{
    name: "Ramesh",
    age: 21,
    gender: "male"
},{
    name: "priya",
    age: 25,
    gender: "female"
}, {
    name: "Rahul",
    age: 32,
    gender: "male"
}]
const ans = findMale(user);
console.log(ans);

// ========================================================================================================
// ========================================================================================================































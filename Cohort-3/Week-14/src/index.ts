


// let x: number | string = 10;

// x = "harkirat Singh"

// console.log(x);


// ==============================================================

// let yourName: string = "Harkirat Singh";
// console.log("Hello, " + yourName );

// ==============================================================


// function greet(name: String) {
//     console.log("hello, " + name);
// }
// greet("Monu");


// ==============================================================


// function sum(a: number, b: number) {
//     return a + b;
// }
// let ans = sum(4, 8);
// console.log(ans);


// ==============================================================


// function delayCall(fn: () => void) {
//     setTimeout(fn, 2000);
// }

// delayCall(function() {
//     console.log("hi there");
// })

// ==============================================================


// function delayCall(anotherFn: () => void) {
//     setTimeout(anotherFn, 2000);
// }

// function log() {
//     console.log("hi there");
// }

// delayCall(log);

// ==============================================================


// let greet = (name) => {
//     console.log("hi there");
// }


// ==============================================================
// ==============================================================
// ==============================================================


// interface UserType {
//     firstName: string;
//     lastname: string;
//     age: number;
// }


// function greet(user: UserType) {

// }

// let user: UserType = {
//     firstName: "Harkirat",
//     lastname: "Singh",
//     age: 34
// }

// ==============================================================


interface Manager {
    name: string,
    age: number
}

interface Employee {
    name: string,
    department: string
}


type TeamLead = Manager & Employee;

let t : TeamLead = {
    name: "Harkirat",
    age: 22,
    department: "Software Engineering"
}








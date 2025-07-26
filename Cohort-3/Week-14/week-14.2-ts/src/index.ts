
// interface Address {
//         city: string,
//         country: string,
//         pincode: number
//     }

// interface User {
//     name: string,
//     age: number,
//     address?: Address
// }

// let user1: User = {
//     name: "Kirat",
//     age: 34,
//     address: {
//         city: "Chapara",
//         country: "India",
//         pincode: 821010
//     }
// }

// interface Office {
//     address: Address
// }


// function isLegal(user: User) : boolean {
//     return user.age > 18 ? true : false;
// }

// const ans = isLegal(user1);
// ans ? console.log("User is legal") : console.log("User is not legal");



// ===================================================================================================
// ===================================================================================================


// interface User {
//     name: string,
//     age: number,
//     isLegal() : boolean
// }

// class Manager implements User {
//     name: string;
//     age: number;
    
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     } 
//     isLegal() {
//         return this.age > 18
//     }
// }

// const m = new Manager("harkirat", 29);
// console.log(m.isLegal());


// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================


// // Type : --


// type Employee = {
//     name: string,
//     startDate: string
// };

// type Manager = {
//     name: string,
//     department: string
// };

// type TeamLead = Employee & Manager;


// let e: Employee = {
//     name: "Kirat",
//     startDate: "01-03-2003"
// }

// let m: Manager = {
//     name: "Harkirat",
//     department: "Electiricity"
// }

// let t: TeamLead = {
//     name: "Harkirat",
//     startDate: "01-03-2003",
//     department: "Electiricity"
// }


// ===================================================================================================


// type GoodUser = {
//     name: string,
//     gift: string
// };

// type BadUser = {
//     name: string;
//     ip: string;
// };

// type User = GoodUser | BadUser;

// const user : User = {
//     name : "harkirat",
//     gift : "abcd",
//     ip : "092402.94.203.09"
// }


// ===================================================================================================
// ===================================================================================================

// // interfaces vs types
// // Create two types called User and Admin,]
// // Create a function that takes either a user or an admin as an admin as an input, and returns a string saying "welcome [name]".

// interface Admin {
//     name: string;
//     premission: string;
// }

// interface User {
//     name: string;
//     age: number;
// }

// type UserOrAdmin = User | Admin;

// function greet(user: UserOrAdmin) {
//     console.log(user.name);
// }

// ===================================================================================================
// ===================================================================================================


// function getMax(nums: number[]) {
//     let maxValue = -1000000000000;

//     for(let i=0; i<nums.length; i++) {
//         if(nums[i] > maxValue) {
//             maxValue = nums[i];
//         }
//     }
//     return maxValue;
// }

// getMax([1, 2, 3]);

// interface Address {
//     city: string;
//     pincode: string;
// }

// interface User {
//     name: string;
//     age: number;
//     address: Address[];
// }

// let user: user = {
//     name: "harkirat",
//     age: 21,
//     address: []
// }

// ===================================================================================================
// ===================================================================================================


// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// function filterUsers(users: User[]) {
//     let ans: User[] = []
//     for(let i=0; i<users.length; i++) {
//         if(users[i].age > 18) {
//             ans.push(users[i]);
//         }
//     }
//     return ans;
// }

// const filteredUsers = filterUsers([{
//     firstName: "harkirat",
//     lastName: "singh",
//     age: 13
// }])

// console.log(filteredUsers);

// ===================================================================================================
// ===================================================================================================


// interface User {
//     name: string;
//     age: number;
// }

// function sumOfAge(User1: User, User2: User) : number {
//     return User1.age + User2.age;
// }

// let result = sumOfAge({
//     name: "kirat",
//     age: 24,
// },{
//     name: "raman jit",
//     age: 42,
// })

// console.log(result)


// ===================================================================================================
// ===================================================================================================



// interface User {
//     id: string;
//     name: string;
//     age: string;
//     email: string;
//     password: string;
// }

// type UpdateProps = Pick<User, "name" | "age" | "email">

// function updateUser(updatedProps: UpdateProps) {
//     // hit the datebase tp update the user
// }

// ===================================================================================================


// const user = {
//     name: "harkirat",
//     age: 23,
// }

// user.name = "raman";
// console.log(user.name);

// const a = [1, 2, 3, 4, 5];
// a[1] = 9;
// console.log(a);


// ===================================================================================================
// ===================================================================================================


// type User = {
//     id: string;
//     username: string;
// }

// type Users = {
//     [key: string]: User;
// }

// const users: Users = {
//     "ras@qd1": {
//         id: "ras@qd1",
//         username: "harkirat"
//     },
//     "ras1dr@": {
//     id: "ras1dr@",
//     username: "raman"
//     },
// }



// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================





// Record : --
type Users = Record<string, {age: number; name: string}>;

const users: Users = {
    "ras@qd1" : {age: 21, name: "harkirat"},
    "ras1dr@" : {age: 33, name: "Adsdsd"},
}



// Map : ---
const users = new Map() 
users.set("ras@qd1", { name: "Ras", age: 30, email: "ras@qd1" })
users.set("sarah@qd1", { name: "Sarah", age: 32, email: "sarah@qd1" })

const user = users.get("ras@qd1");
console.log(user);
users.delete("ras@qd1");
console.log(user);


// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================



// // Zod  : ----

// import { z } from 'zod';
// import express from "express";

// const app = express();

// // Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });

// app.put("/user", (req, res) => {
//   const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody = req.body; // how to assign a type to updateBody?

//   if (!success) {
//     res.status(411).json({});
//     return
//   }
//   // update database here
//   res.json({
//     message: "User updated"
//   })
// });

// app.listen(3000);





// ===================================================================================================// ===================================================================================================


// import z from 'zod';


// const StringZodSchema = z.string();
// type StringZodType = z.infer<typeof StringZodSchema>; //string












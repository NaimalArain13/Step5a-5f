"use strict";
// // 5
// // Create an object car with properties brand (string) and model (string). Add a method getCarInfo to the object that returns a string combining the brand and model. Call the method and print the result.
// let myObj = {
//   brand: "Toyota",
//   model: "2001abc",
//   getCarInfo: function (): string {
//     return `Brand: ${myObj.brand}  Model: ${myObj.model}`;
//   },
// };
// console.log(myObj.getCarInfo());
// // 6
// // Define an object user with properties username (string) and email (string). Update the email property and print the updated object.
let user = {
    userName: "chanwal",
    email: "chawal@gmail.com",
};
user.email = "bariwalichawal@gmial.com";
let rec = {
    width: 23,
};
let sec = {
    sideLength: 21,
};
let book1 = {
    title: "English",
    author: "elsa kazi",
};
let book2 = {
    title: "maths",
    author: "WWW",
};
book1 = book2;
book2 = book1;
let lib = {
    Book: {
        title: "Hamari pirem kahani",
        author: {
            firstName: "LAL",
            lastName: "BABA",
        },
    },
};
let mag = {
    title: "halwa puri",
    publisher: {
        name: "kallo puri wala",
        location: "gandy naly pr",
    },
};
let alb = {
    title: "Wedding",
    artist: {
        name: "Asra",
        age: 23,
    },
};
let comp = {
    ceo: {
        firstName: "Naimal",
        lastName: "Salahuddin",
    },
};
let team = {
    ins: {
        firstName: "Umar",
        lastName: "Gul",
    },
};
let premium = {
    name: "Naimal",
    customerId: 12,
    membershipId: 23,
};
// console.log(premium);
// 2
// Create a function that throws an error and has a return type of never.
function nev() {
    throw new Error("I'M AN ERROR");
}
// nev()
// 3
// Assign different types of values to a variable of type unknown and print each value. Then attempt to directly assign the unknown variable to variables of other specific types and observe the TypeScript errors.
let newVar;
newVar = 23;
newVar = "23";
newVar = true;
// let thisVar :string = newVar   //Type 'unknown' is not assignable to type 'string'
// 4
// Create a variable of type unknown and a function printUnknown that accepts an unknown type parameter. Inside the function, use type assertion to print the value if it's a string.
// Assign an array, an object, and a function to a variable of type unknown. Use type assertion to safely access and print properties or call the function.
// let herName:unknown = 23
let herName = "naimal";
let fruits = ["apple", "mango"];
let myFruits = () => {
    console.log("naimal");
};
function printUnknown(a) {
    if (typeof a === "string") {
        console.log(a);
    }
}
// printUnknown(herName)
// 5
// Define a function isNumber that takes an unknown parameter and returns a boolean indicating whether the parameter is a number.
// Create a variable of type unknown and use a type guard to safely perform operations if the variable is a number or a string.
function isNumber(a) {
    return typeof a === "number";
}
console.log(isNumber("2"));
let variable;
variable = "2";
if (isNumber(variable)) {
    console.log(`${variable} is a number and it's sqaure is ${variable * 2}`);
}
else if (typeof variable === "string") {
    console.log(`${variable} is a string and it's length is ${variable.length}`);
}
else {
    console.log("variable is unknown");
}
// function isNumber(a: unknown): a is number {
//   return typeof a === "number";
// }
// let variable: unknown;
// variable = "2";
// if (isNumber(variable)) {
//   console.log(`${variable} is a number and its square is ${variable ** 2}`);
// } else if (typeof variable === "string") {
//   console.log(`${variable} is a string and its length is ${variable.length}`);
// } else {
//   console.log("variable is unknown");
// }

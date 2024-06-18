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

// // console.log(user);

// // 3
// // Create two interfaces Rectangle and Square both having a property sideLength (number). Show that a Rectangle can be assigned to a Square.

interface Rectangle {
  width: number;
}
interface Square {
  sideLength: number;
}

let rec: Rectangle = {
  width: 23,
};
let sec: Square = {
  sideLength: 21,
};

// // rec = sec ; sec = rec  //error

// // 7
// // Create an interface Book with properties title (string) and author (string). Show that an object with the same structure but additional properties can be assigned to a Book.

interface Book {
  title: string;
  author: string;
}
let book1: Book = {
  title: "English",
  author: "elsa kazi",
};

let book2 = {
  title: "maths",
  author: "WWW",
};

book1 = book2;

book2 = book1;

// // 4. Nested Object Type
// //     1
// // Define a type Library with a nested object type Book which has properties title (string) and author (object with properties firstName and lastName, both strings). Create an instance of Library and print the book's author name.
type Library = {
  Book: {
    title: string;
    author: {
      firstName: string;
      lastName: string;
    };
  };
};

let lib: Library = {
  Book: {
    title: "Hamari pirem kahani",
    author: {
      firstName: "LAL",
      lastName: "BABA",
    },
  },
};
// // console.log(`${lib.Book["author"].firstName} ${lib.Book["author"].lastName}`);

// // 2
// // Define a type Publisher with properties name (string) and location (string). Create a nested object type Magazine with properties title (string) and publisher (Publisher). Create an instance of Magazine and print the publisher's name.

type Publisher = {
  name: string;
  location: string;
};
type Magazine = {
  title: string;
  publisher: Publisher;
};

let mag: Magazine = {
  title: "halwa puri",
  publisher: {
    name: "kallo puri wala",
    location: "gandy naly pr",
  },
};
// // console.log(mag.publisher["name"]);

// // 3
// // Create a nested object type Album with properties title (string) and artist (object with properties name (string) and age (number)). Create an instance of Album and print the artist's name.

type Album = {
  title: string;
  artist: {
    name: string;
    age: number;
  };
};
let alb: Album = {
  title: "Wedding",
  artist: {
    name: "Asra",
    age: 23,
  },
};

// console.log(alb.artist.name);

// 4
// Define a type Company with a nested object type CEO having properties firstName (string) and lastName (string). Create an instance of Company and print the CEO's full name.

type CEO = {
  firstName: string;
  lastName: string;
};
type Company = {
  ceo: CEO;
};

let comp: Company = {
  ceo: {
    firstName: "Naimal",
    lastName: "Salahuddin",
  },
};
// console.log(`${comp.ceo.firstName} ${comp.ceo.lastName}`);

// 6
// Define a type Team with a nested object type Coach having properties firstName (string) and lastName (string). Create an instance of Team and print the coach's full name.
type Coach = {
  firstName: string;
  lastName: string;
};
type Team = {
  ins: Coach;
};

let team: Team = {
  ins: {
    firstName: "Umar",
    lastName: "Gul",
  },
};

// console.log(`${team.ins.firstName} ${team.ins.lastName}`);

// 1
// Define two interfaces Customer with properties customerId (number) and name (string), and Member with properties membershipId (number) and name (string). Create an intersection type PremiumCustomer and print its properties.

interface Customer {
  customerId: number;
  name: string;
}

interface Member {
  membershipId: number;
  name: string;
}

type PremiumCustomer = Member & Customer;

let premium: PremiumCustomer = {
  name: "Naimal",
  customerId: 12,
  membershipId: 23,
};

// console.log(premium);

// 2
// Create a function that throws an error and has a return type of never.
function nev(): never {
  throw new Error("I'M AN ERROR");
}

// nev()

// 3
// Assign different types of values to a variable of type unknown and print each value. Then attempt to directly assign the unknown variable to variables of other specific types and observe the TypeScript errors.

let newVar: unknown;
newVar = 23;
newVar = "23";
newVar = true;
// let thisVar :string = newVar   //Type 'unknown' is not assignable to type 'string'

// 4
// Create a variable of type unknown and a function printUnknown that accepts an unknown type parameter. Inside the function, use type assertion to print the value if it's a string.
// Assign an array, an object, and a function to a variable of type unknown. Use type assertion to safely access and print properties or call the function.

// let herName:unknown = 23
let herName: unknown = "naimal";
let fruits: string[] = ["apple", "mango"];
let myFruits = () => {
  console.log("naimal");
};
function printUnknown(a: unknown) {
  if (typeof a === "string") {
    console.log(a);
  }
}

// printUnknown(herName)

// 5
// Define a function isNumber that takes an unknown parameter and returns a boolean indicating whether the parameter is a number.
// Create a variable of type unknown and use a type guard to safely perform operations if the variable is a number or a string.

function isNumber(a: unknown):a is number {
  return typeof a === "number";
}

console.log(isNumber("2"))
let variable:unknown;
variable = "2";
if (isNumber(variable)) {
  console.log(`${variable} is a number and it's sqaure is ${variable * 2}`);
} else if (typeof variable === "string") {
  console.log(`${variable} is a string and it's length is ${variable.length}`);
} else {
  console.log("variable is unknown");
}

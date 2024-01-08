//? js is dynamically type language.

//! Primitive (call by value type) data type
// 7 types : String , Numbner , Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3; // both type is number 

const isLogedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol ( '123' );
const anotherId = Symbol ( '123' );
console.log(id === anotherId);
const bigNumber = 2342394809n; //bigint
console.log(typeof (bigNumber));


//! Non Primitive (reference type) data type
// Array , Object, Functions 

const heros = ["shaktiman" , "Naagraj" , "doga"];

// {} => object
let newObj = {
    name : "prince",
    age : 18,
    city : "patna"
} 

// function() {} => function declaration
const myFunction = function() {
    console.log("hello");
}

//! *********************** --Memory-- ****************************

//Stack(Used in primitive datatype), Heap (used in Non-Primitive datatype)

let myName = "prince";
let anotherName = myName;
anotherName = "computer";

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "js@google.com",
    upi : "code@ybl"
}

let userTwo = userOne;

userTwo.email = "code@prince.com";

console.log(userOne.email);
console.log(userTwo.email);
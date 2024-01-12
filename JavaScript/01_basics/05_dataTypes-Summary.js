//? js is dynamically type language.

//! Primitive (call by value type) data type
// 7 types : String , Numbner , Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3; // both type is number 

const isLogedIn = true;
const outsideTemp = null;
let userEmail;  //undefined

const id = Symbol ( '123' );
const anotherId = Symbol ( '123' );
console.log(id === anotherId); //symbol used to make unique element. so id won't equal to anotherid
const bigNumber = 2342394809n; //bigint
const bigNumber2 = 2342394809; //number
console.log(typeof (bigNumber));
console.log(typeof (bigNumber2));


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

myFunction (); //function call

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

let userTwo = userOne; //typeof usertwo is also object due to object conversation

userTwo.email = "code@prince.com";

console.log(userOne.email);
console.log(userTwo.email);
console.log(typeof (userTwo)); 
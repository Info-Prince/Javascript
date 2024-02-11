// Immediately Invoked Function Expressions (IIFE)
//global scope ke pollution ko hatane ke liye IIFE ka use kiya jata hai, sometimes global scope ke object ya variable or else function ko pollute krte hai use hi ignore krne ke liye IIFE ka use kiya jata hai.

// IIFE () () 
// (function definition) (execution call) 

(function chai () {
    console.log("DB CONNECTED");
} ) ();
//NOTE:- WHILE USING IIFE MUST TERMINATE IFFE SCOPE WITH (); SEMICLONE


//using iife with arrow function
( () => {
        console.log("DB CONNECTED TWO");
    } 
) ();

// (function aurcode() {
        //named IIFE
//     console.log("db connected");
// }) (); 

((name) => {
    console.log(name);
}) ("prince");


// two types:- named and simple iife
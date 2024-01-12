const score = 400;
// console.log(score);

const balance = new Number (100); //strictly defined number type of data-type
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toString().length.toFixed(2));
console.log(balance.toFixed(2));

// const otherNumber = 123.7431;
// console.log(otherNumber.toPrecision(3));

// const hundreds = 100000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN"));


//! ++++++++++++++++   Maths     +++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.51));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(5.9));
// console.log(Math.sqrt(25));
// console.log(Math.min(25,2,3,5,6,44,76,8,8,7,5,4,3,));
// console.log(`mimimum value is ${Math.min(25,2,3,5,6,44,76,8,8,7,5,4,3,)}`);
// console.log(Math.max(5,3,45,6,7,8,5,4,4,3,324,3,436));

console.log(Math.random()); // range btw 0 to 1
console.log(Math.random()*10); // 0 to 10
console.log((Math.random()*10) + 1 ); // 1 to 10
console.log(Math.floor((Math.random()*10) +1 ));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random () * (max - min + 1)) + min);

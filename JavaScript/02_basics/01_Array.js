//! Array......

const myArr = [0, 1, 2, 3, 4];
const myHeros = ["shaktiman", "naagraj"];

const  myArr2 = new Array (1, 2, 3, 4);

// console.log(myArr[2]);

// Array methods

// myArr.push(5)
// myArr.push(9)
// myArr.pop()

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//? slice , splice

console.log("A = ", myArr); 

const mynArray1 = myArr.slice(0, 3);
console.log(mynArray1);
console.log("B = ",myArr);

const mynArray2 = myArr.splice(0, 3);
console.log(mynArray2);
console.log("C = ", myArr);

//! Array......

const myArr = [0, 1, 2, 3, 4];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = ["amazon", 2, 3, Boolean, null]
const  myarr3 = new Array (1, 2, 3, 4);

// console.log(myArr[2]);
// console.log(myArr2);
// console.log(myarr3.findIndex);

// Array methods

myArr.push(5) // push -> add element
myArr.push(9)
// console.log(myArr);
myArr.pop() //remove element

// console.log(myArr);

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();

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


// slice me element range se 1 kam print hota hai and no impact on actual array on the other hand splice me range tk ka element concate hota hai and actual array ka element km ho jata hai....
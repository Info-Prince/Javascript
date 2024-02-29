//By default javascript has prototyple behaviour which means it never commit to loose, if it didn't get the element which we have coded to search then it will go to parent , grandparent for searching.
//That's called prototyple inheritance.

//In Javascript Everything can be used as an object.


function multiplyBy5 (num) {
    return num*5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype); 
//technically function object ko bhi reference krta hai.

// function ---> object ---> null
// Array ---> object ---> null
// String ---> object ---> null

//object ka prototype null hota hai.



// ---------------------------------------------
function createUser (username, price) {
    this.username = username;
    this.price = price;
}

//injecting function in function , that means we can use a function as an object.
createUser.prototype.increment = function () {
    this.price++; //means jisne v call kiya hai uska kaam krdo
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.price}`);
}

const chai = new createUser ('chai', 25)
const tea = new createUser ('tea', 250)

chai.printMe();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
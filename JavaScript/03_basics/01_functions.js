
// function sayMyName () {
//     console.log("P");
//     console.log("R");
//     console.log("I");
//     console.log("N");
//     console.log("C");
//     console.log("E");
// }

// sayMyName () //here sayMyName is function reference and () means execution.

// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2);
// }

// function  having parameter and reference having arguement
function addTwoNumbers (number1, number2) {
    //console.log(`Number1 = ${number1} and Number2 = ${number2}`);
    // let result = number1 + number2;
    // return result;
    return number1 + number2
    // console.log(number1 + number2); // after return no any code will be executed.
}

const result = addTwoNumbers(3, 5);

// console.log("result : ", result);

function loginUserMessage (username = "sam" ) {
    // if(username === undefined)
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just loged in`
}

// console.log(loginUserMessage("Prince"))
// console.log(loginUserMessage());
// console.log(loginUserMessage(""));

// console.log(loginUserMessage());
// console.log(loginUserMessage("prince"));


// function calculateCartPrice (num1) //it will hold only single value

// function calculateCartPrice (...num1)
function calculateCartPrice (val1, val2, ...num1) { // basically rest operator (...) will hold all rest value in array which has been passed
    return num1;
}

console.log(calculateCartPrice (200, 300, 400, 600));

///////////////////////////handling object in function..............
const user = {
    username : "Prince",
    price : 999
}

function handleObject (anyObject)     {
    console.log(`Usernaem is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
//we can also pass object while calling function
handleObject({
    username: "Raushan",
    price: 499
})

////////////////////////handling array in function..................
const myNewArray = [100, 399, 423];

function returnSecondArray (getArray) {
    return getArray[1]
}

// console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray([200, 400, 399, 342])); 
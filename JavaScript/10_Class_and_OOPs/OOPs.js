// object literal

// const user = {
//     username: 'prince',
//     loginCount: 8, 
//     signedIn: true, 

//     getUserDetails: function () {
//         console.log('Got user details from database');
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


//_______________________________________

// const promiseOne = new Promise()
// const date = new Date()
//new keyword is a constructor function. it allows to make multiple instances from a single object.

function User (username , loginCount, isLoggedIn) {
    this.username = username; //left side value variable.
    //this is an object and ush object me value insert ho rha hai.
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // it's default whether to mention or not will work the same.
} 

// const userOne = User('prince', 23, true);
// const userTwo = User('Let\'s do', 4, 11) //it will override the value of user , it's not way to code. All program can got into a disaster problem.

const userOne = new User('prince', 23, true);
const userTwo = new User('Let\'s do', 4, true); //now all problem solved, constructor function will give new instances every time. whatever changes you made that will be made on that specific copy only. OTHER W'ONT EFFECTED.
// console.log(userOne);
// console.log(userTwo);

console.log(userTwo.constructor);
//constructor property basically, it's a reference about itself. //javascript instanceof



// new keyword :- 
// 1. firstly empty object will be created, which is called instance
// 2. constructor function is being called due to new keyword. it works to pack all arguments and give it back.
//3. in third step all arguments is being injected into this keyword.
//4. In Forth step, we got our data in function
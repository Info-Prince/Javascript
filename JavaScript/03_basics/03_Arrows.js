const user = {
    username : "prince",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`); // this keyword current context ko refer krta hai
        //context means kiske bare me baat ki ja rhi hai
        console.log(this);
    }
    
}
user.welcomeMessage()
user.username = "raushan"
user.welcomeMessage()

// console.log(this); // it's giving result as per node environment. since node environment hasn't any global object that's what we got empty object. or in browser this will refer to window global object.



//chai and chai2 function are same with same result
function chai ()    {
    let username = "prince"
    console.log(this.username); //it won't work here due to username is not global object of function chai. see the above example.
}
chai()

// const chai2 = function ()   {
//     let username = "prince"
//     console.log(this.username);
// }
// chai2()


//////////////////// arrow function 
const chai3 = () =>  {
    const username = "prince"
    console.log(this.username); 
    console.log(this); //in this situation this will not work as well. or usually this keywork don't use in arrow function.
}
// chai3()

////////////////Arrow function representation
() => {} //that's it. but for performing action on it we can hold named this function and take parameters.

const add = (num1 , num2) => {
    return num1+num2;
}
// add(6,10)
console.log(add(6,10))

//implicit return 
// const addtwo = (num1, num2) => num1 + num2; 
// const addtwo = (num1, num2) => (num1 + num2); //both same 
const addtwo = (num1, num2) => ({username: "hitesh"}) //here object passed
console.log(addtwo(4,9));
// singleton
// Object.create (constructor method of creating object) it's singleton

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Prince",
    "last name": "Singh",
    mySym: "key1", //Actually it's not accessing symbol.
    [mySym]: "mykey1",
    age: 18,
    email: "prince@google.com",
    location: "Patna",
    isLoggedIn: false,
    LastLoginDays: ["Sunday", "Monday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]); //both correct in this situation.

// console.log(jsUser["last name"]); //this won't accessed as first method.
// console.log(jsUser[mySym]);

jsUser.email = "prince@chatgpt.com";
// console.log(jsUser);
// Object.freeze(jsUser);
jsUser.email = "prince@microsoft.com";
console.log(jsUser);

jsUser.greetings = function() {
    console.log("Hello JS user");
}

jsUser.greetingTw0 = function() {
    console.log(`Hello JS user, ${this.name}`);
}


console.log(jsUser.greetings());
console.log(jsUser.greetingTwo());
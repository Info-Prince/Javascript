// let myName = "Prince     ";
// console.log(myName.trueLength());
// target of trueLength method is to give proper msg (true length of string is the length of ${myName} without considering white spaces)
 

let myHeros = ["Thor", "spiderMan"];

let heroPower = {
    thor: 'hammer', 
    spiderMan: 'sling',

    getSpiderPower: function ()     {
        console.log(`Spider power is ${this.spiderMan}`);
    }
}

//heroPower.hitesh(); //can it be done ? -> yes , but in the prototype of object heroPower there must be hitesh.

Object.prototype.hitesh = function ()   { // since all element is traveling from object and hitesh (superpower) is going to be injected into object so it will be accessed by all. like string, array, function etc.
    console.log('hitesh is present in all objects');
}
// heroPower.hitesh();
// myHeros.hitesh ();


// -----if we give power to array then will it go to object?
Array.prototype.heyHitesh = function ()  {
    console.log('Array got power of heyHitesh');
}

// myHeros.heyHitesh();
// heroPower.heyHitesh(); // NO, it wouldn't have such power


//* ---------------------OLD STNTAX INHERITANCE--------------
const user = {
    username: 'prince'
}
const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: true
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: teachingSupport
}
teacher.__proto__ = user;


// --------MODERN SYNTAX OF INHERITANCE------------------
Object.setPrototypeOf(teachingSupport, teacher)
Object.setPrototypeOf(teacher, user)
// console.log(teacher);

// -----------problem solving--------------------
let anotherName = "chaiAurCode    ";

String.prototype.trueLength = function ()   {
    console.log(`${this}`); // inside of this there is current context, and on every calling current context is getting changed , if we called with diff diff arguments. That's what we are getting diff diff msg.
    console.log(`True Length is: ${this.trim().length}`);
}
anotherName.trueLength();
"prince".trueLength();
"iceTea".trueLength();
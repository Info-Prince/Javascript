// singelton object
const tinderUser = new Object;

// object literals
const tinderUser_1 = {};


// console.log(tinderUser);
// console.log(tinderUser_1);

tinderUser.name = 'Prince'
tinderUser.id = "310-23709"
tinderUser.isLogedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Prince",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) 
// {target}, and all object is source element. it's not about empty braces it's telling that assign all element into first defined object element.

const obj4 = { ...obj1, ...obj2, ...obj3 }  //better to use spread 
//console.log(obj4);


//// how value of database come
// object nested under array

const users = [
    { 
        id: 1,
        gmail: "prince2gmail.com"
    }, // object of array.
    {

    },
    {

    }
]

// console.log(users[0]);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser)); // both most important. 
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogedIn"));

//? ----------------------------Destructuring of Object------------------------------

const course = {
    coursename : "js in hindi", 
    price : 999,
    courseInstructor: "hitesh"
}

// course.courseInstructor
// const {} = course; // {it will be filled by which element you want to construct of object. i.e course.}
const {courseInstructor: instructor} = course
const {courseInstructor} = course;

console.log(courseInstructor);
console.log(instructor);


//! API come in either obj format or array format
//// json object format ////
// {
//     "name" : "prince",
//     "course" : "js in hindi",
//     "prince" : 999
// }

//// api array format ////

// [
//     {},
//     {},
// ]
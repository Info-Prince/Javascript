//? Dates 
let myDate = new Date ();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
/* console.log(myDate.toISOString());
console.log(myDate.toJSON()); */
/* console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString()); */

// let myCreatedDate = new Date(2023, 9, 29);
//console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date (2023, 9, 29, 8, 10)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date ("2023-10-30");
let myCreatedDate = new Date ("10-29-2023")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

//console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1); // +1 due to month calculated on index value.
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
//console.log(newDate.getHours());

newDate.toLocaleString("default",{
    weekday:"long"
})
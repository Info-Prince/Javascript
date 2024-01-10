//? Dates 
let myDate = new Date ();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
/*console.log(myDate.toISOString());
console.log(myDate.toJSON());  */
/* console.log(myDate.toLocaleString()); //date and time
console.log(myDate.toLocaleDateString()); //date only
console.log(myDate.toLocaleTimeString()); //time only */

///////////////////////////////////////////////
// let myCreatedDate = new Date(2024, 0, 10); //month start with 0 (jan) and end to 11 (dec).
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date (2024, 0, 10, 13, 55)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date ("2024-01-10"); // yyyy/mm/dd
// let myCreatedDate = new Date ("01-10-2024") // mm/dd/yyyy
// console.log(myCreatedDate.toDateString());
///////////////////////////////////////////////

let myTimeStamp = Date.now();

// console.log(myTimeStamp); //time in millisecond
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //time in second
//////////////////////////////////////////

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1); // +1 due to month calculated on index value.
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());

newDate.toLocaleString("default",{
    weekday:"long"
})
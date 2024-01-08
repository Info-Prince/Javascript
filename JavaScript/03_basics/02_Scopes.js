// var c = 100;
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    newvar = 40;
}

//console.log(a);
// console.log(b);
// console.log(c); //since both are accessed locally only
//console.log(newvar);


function one () {
    const username = "Prince";
    function two () {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two()
}

//one ()

if (true) {
    const username = "prince";
    if ( username === "prince" ) {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//! +++++++++++++++++++++++ Interesting ++++++++++++++++++++

console.log(addnum (5));
function addnum (num) {
    return num + 1;   
}

// console.log(addTwo(8))
const addTwo =  function (num) {
    return num + 2;
}

console.log(addTwo(8))
//Promises complete in future.
// promises having three steps:- 
// 1. pending 
// 2. fulfilled asf
// 3. rejected

// in most of the situation promises is being consumed . But promises can be created as well.

//A Promise is an object representing the eventual completion or failure of an asynchronous operation.


//in general promise can be resolve or can be rejected.
const promiseOne = new Promise( function (resolve, 
    rejected) { //promise created
    // Do an async task
    // DB calls , Cryptography , network calls, etc
    setTimeout (function () {
        console.log('Async task is complete');
        resolve(); //without calling this method .then won't connected into it.
    }, 1000)
});

promiseOne.then( function () { //promise consumed
    console.log('Promise Consumed.');
})



new Promise (function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then (function () {
    console.log('Async 2 resolved');
})


const promiseThree = new Promise (function(resolve, reject) {
    setTimeout (function () {
        resolve( {username:'chai', email: 'chai@example.com'})
    }, 1000)
})
promiseThree.then(function (resolvePassedVal) {
    console.log(resolvePassedVal);
})



const promiseFour = new Promise (function (resolve, reject) {
    setTimeout (function () {
        let error = false;
        if (!error) {
            resolve({username:'prince', password:'newPassword'})
        } else {
            reject('ERROR: Something Went Wrong');
        }
    
    },1000)
})
//now consume this promise
//chaining
promiseFour.then ( (user) => {
    console.log(user);
    return user.username;
}).then ( (username) => {
    console.log(username);
}).catch ( (error) => {
    console.log(error);
}).finally ( () => {
    console.log('The promise either resolved or rejected');
})






const promiseFive = new Promise ( (resolve, reject) => {
    setTimeout ( () => {
        let error = true;
        if (!error) {
            resolve ({username: 'Javascript', password: 'JS@123'});
        } else {
            reject ('ERROR:- JS Went Wrong')
        }
    })
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();
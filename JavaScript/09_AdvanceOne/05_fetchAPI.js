const user = fetch ('https://api.github.com/users/Info-Prince');
user.then ( (Response) => {
    // console.log(Response);

    // Basically status and statusText is showing status code and status text. If promise will get consumed successfully then it will give 200 status code and ok statusText.
    // console.log(Response.status);
    // console.log(Response.statusText);

    console.log( typeof (Response)); //have to go through once!!!

    return Response.json(); // it's returning information of promise which has been fetched from the server. in the form of json format. 

}).then( (data) => {
    // console.log(typeof data);
})
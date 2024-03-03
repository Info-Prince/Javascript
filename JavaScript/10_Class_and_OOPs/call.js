function SetUsername (username) {
    //complex DB calls 
    this.username = username
} 

function createUser (username, email, password) {
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser ('ChaiUser', 'chai@fb.com', '123');
console.log(chai);
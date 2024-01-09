const name = "Prince";
const repoCount = 50;

//console.log(name + repoCount + " Value");
//stringinterpulation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("Prince-prince-prince");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 2);
console.log(anotherString);

const newStringOne = "   prince    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://cssbyprince.netlify-app";
console.log(url.replace("-" , "."));

console.log(url.includes("prince"));

console.log(gameName.split("-"));


const prince = new String ("lets-learn-code-with-me");
console.log(prince.split('-'));
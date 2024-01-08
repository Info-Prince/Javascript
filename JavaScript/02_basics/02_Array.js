const marvel_heros = ["thor","ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros)
// const concated_heros = marvel_heros.concat(dc_heros);
const all_heros = [ ...marvel_heros, ...dc_heros]  //spread operator
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usable_another_array = another_array.flat(Infinity)

// console.log(marvel_heros[3][1]);
// console.log(all_heros);
// console.log(usable_another_array);

console.log(Array.isArray("prince"));
console.log(Array.from("prince"));
console.log(Array.from({name: "prince"})); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
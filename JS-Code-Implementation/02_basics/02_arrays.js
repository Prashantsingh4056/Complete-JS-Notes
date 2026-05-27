const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// actual way to add elements from another array
const allHeroes = marvel_heros.concat(dc_heros)  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeroes);

// Another Easy method to do it 
   // with spread operator (...)

const AllNewHeros = [...marvel_heros , ...dc_heros];
console.log(AllNewHeros);  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// 
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];  // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

// 
console.log(Array.isArray("prashant"))  //false
// convert to  array
console.log(Array.from("Prashant")); // ['P', 'r', 'a', 's', 'h', 'a', 'n', 't']
console.log(Array.from({name: 'prashant'}));  // [] , we have to explicitely define whether to use keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));  // [ 100, 200, 300 ]


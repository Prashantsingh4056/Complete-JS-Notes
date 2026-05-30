// for of

// ["" , "" , ""]
// [{} , {} , {}]  

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

// applying for of loop in strings
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}


// Maps
// The Map object holds key-value pairs and remembers 
// the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set("IN" , "india")
map.set("USA" , "United States of America")
map.set("Fr" , "France")
map.set("In" , "india")

console.log(map) 
// Map(3) {
//   'IN' => 'india',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }


// for of loop in map

// for(const key of map){
//     console.log(key);
// }

// to print key , value separately

for(const [key , value] of map){
    console.log(key , ":-" , value);
    
}

// for of loop in an object 

const myObj = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}


// error : myObj is not iterable
// for(const [key , value] of myObj){
//     console.log(key , ":-" , value);   
// }
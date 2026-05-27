// arrays

const myArr = [0 , 1 ,2 ,3 ,4 ,5] //  elements of different datatypes can be there

console.log(myArr[0]);

// Shallow Copy - 
// A shallow copy of an object is a copy whose properties share the same references
// (point to the same underlying values) as those of the source object from which the copy was made.

// Deep copy
// A deep copy of an object is a copy whose properties do not share the same references 
// (point to the same underlying values) as those of the source object from which the copy was made.

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0]);


// Array Methods
myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(9);// Inserts new elements at the start of an array, and returns the new length of the array.

myArr.shift(); // Removes the first element from an array and returns it

console.log(myArr.includes(9));  // false

console.log(myArr.indexOf(9)); // -1

// array to string
const newArr = myArr.join()


console.log(newArr);  // 0,1,2,3,4,5,6
console.log(typeof newArr); // string


// slice , splice 

console.log("A " , myArr);

const myNewArr1 = myArr.slice(1 , 3)
console.log(myNewArr1);       // [ 1, 2 ]

console.log("B " , myArr);  // [0, 1, 2, 3, 4, 5, 6 ]

const myNewArr2 = myArr.splice(1 , 3)
 console.log("C " , myArr);  // [ 0, 4, 5, 6 ]

console.log(myNewArr2);  // [ 1, 2, 3 ]
 

//! Interview Question -> What is the difference between slice and splice

// => While both are array methods in JavaScript, slice()
//  creates a shallow copy of a portion of an array, 
// leaving the original untouched. splice(), 
// on the other hand, modifies the original array by 
// removing, replacing, or adding elements.




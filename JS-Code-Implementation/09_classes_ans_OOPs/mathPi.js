// Object.getOwnPropertyDescriptor(Math)

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);  // this will not get updated !!


const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descriptor);

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// const myNewObject = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai not made");
        
    }

}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai , "name"));

// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(chai , "name" , {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// {
//   value: 'ginger chai',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

for (const [key , value] of Object.entries(chai)) {
    
    if(typeof value !== 'function'){   // to avoid function enumeration

        console.log(`${key} : ${value}`);
    }
    
}
// const tinderUser = new Object()  // singleton Object
const tinderUser = {}  // non singleton object 

tinderUser.id = "425dgef";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);   //  { id: '425dgef', name: 'sammy', isLoggedIn: false }


// objects inside objects
const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prashant",
            lastname: "Singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// optional chaining (for protection like : if full name does not exist) , generally used when we got an api response 
console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a" , 4: "b"};


// const obj3 = {obj1 , obj2};  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// {} -> target , where values are added 
// syntax -> Object.assign(target , ...sources)

obj3 = Object.assign({} , obj1 , obj2);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// using spread operator ... 
obj3 = {...obj1 , ...obj2} 
console.log(obj3);


// when values come from database as array of objects
const users = [
    {
        id: 1,
        email: "P@gmail.com"
    },
    {
        id: 2,
        email: "S@gmail.com"
    },
    {
        id: 2,
        email: "S@gmail.com"
    }
]

// access 
console.log(users[1].email);

console.log(Object.keys(tinderUser));  // returs array : [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // returs array : [ '425dgef', 'sammy', false ]

console.log(Object.entries(tinderUser));  // returs array : [ [ 'id', '425dgef' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// to check if an object has some specific property 
console.log(tinderUser.hasOwnProperty("isLoggedIn"));  // true



// ------------------------------------------------------Part 3----------------------------------------------------

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor   // common way


// const {courseInstructor} = course

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// in React we use this : 

// const navbar = ({ company }) => {
//   console.log(company); // Output: hitesh
// };

// navbar({ company: "hitesh" });


// Api outputs as json

// {
//     "name": "prashant",
//     "coursename": "Js in Hindi",
//     "price": "free"
// }

// sometimes we get api rsponse as arrays
[
    {},
    {},
    {}
]


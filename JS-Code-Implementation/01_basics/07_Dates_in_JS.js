// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); // Wed May 27 2026 04:33:42 GMT+0000 (Coordinated Universal Time)

// 
console.log(myDate.toDateString());  // Wed May 27 2026
console.log(myDate.toISOString());// 2026-05-27T04:34:36.872Z
console.log(myDate.toJSON()); //2026-05-27T04:34:48.249Z
console.log(myDate.toLocaleDateString()); // 5/27/2026
console.log(myDate.toLocaleString());  // 5/27/2026, 4:35:17 AM

// 
console.log(typeof myDate); // object


// Creating custom date
let myCreatedDate = new Date(2023 , 0 , 23)
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

// with time 
myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3)  // 1/23/2023, 5:03:00 AM
console.log(myCreatedDate.toLocaleString());

// with string (yyyy-mm-dd)
myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

// in india , (mm-dd-yyyy) 
myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toDateString());

// Timestamps
let myTimeStamp = Date.now()

console.log(myTimeStamp);  // 1779857298249
console.log(myCreatedDate.getTime()); // 1673654400000

// convert to sec
console.log(Math.floor(Date.now()/1000));

// 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 4
console.log(newDate.getDay()); // 3

console.log(newDate.getSeconds()); 

// customising the format of .toLocaleString
newDate.toLocaleString('default' , {
    weekday: "long", // like Monday , Tuesday ..
    
})


 



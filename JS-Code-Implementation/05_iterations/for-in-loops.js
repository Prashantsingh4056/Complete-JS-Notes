const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(key);  //  give all the keys
    // console.log(myObj[key]);  // give all the values
    console.log(`${key} shortcut is ${myObj[key]}`);
}

// for in loops for array
const programming = ["js" , "rb" , "py" , "java" , "cpp"];
for(const key in programming){
    console.log(key);    // print array indices from 0 to n - 1
    console.log(programming[key]);  // print all the  array elements
}


// applying for in loop in map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
// here map is not iterable
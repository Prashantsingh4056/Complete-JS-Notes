const coding = ["js", "ruby", "java", "python", "cpp"]


// syntax  array.foreach( callbackfn: ())

coding.forEach( function (val) {
    console.log(val);
})

// with arrow function :
coding.forEach( (val) =>  {
    console.log(val);
})

// 
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)  // just give the reference , not execute it

// full syntax : array.forEach( (item , index , arr) => {})
coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
})


// With array of objects 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    
]

// very useful in database 

myCoding.forEach((item) => {

    console.log(item.languageName);
    
})
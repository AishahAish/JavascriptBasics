console.log("hi");


// function - reusability of code (function)

function myFunction()
{
    console.log("completed");
   
}
function myFunctionOne()
{
let a = 5;
let c = a + 10;
myFunction();
return c;   
}
function myFunctionTwo()
{
let b = 15;
let c = b - 5;
myFunction();
return c;   
}
console.log(myFunctionOne());
console.log(myFunctionTwo());


// parameter or arguments

function myFunctionThree(para1, para2)
{
let a = para1;
let b = para2;
let c = b - a;
myFunction();  
return c; 
}
console.log(myFunctionThree(20,40));


//arrow function

myFunctionFour=() => {
    let a = 10;
    let b = 20;
    let c = a - b;
    myFunction();  
    return c;   
}
console.log(myFunctionFour());

myFunctionFive = c => c;  //while passing one parameter
console.log(myFunctionFive(50));

// Alert
alert("testing");

//Object

let user = {
    firstName : 'Aishah',
    lastName : 'Aish',

}; // semi colon at last

console.log(user.firstName); // to display all single attribute of object
console.log(user); // to display all attributes


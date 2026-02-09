//Task-1- Create a var variable. Declare, initialize, reassign, redeclare and print the final value.

var a= 10; 

    a= 20;

var a= 25;

console.log(a)  // the output is => 25



//Task-2- Create a let variable. Declare, initialize, reassign, attempt redeclaration and print value.

let b= 25;
  
    b= 30;

// let b= 45; //redeclaration is not possible in let variable

console.log(b);  //The output is => 30



//Task-3- Create a const variable. Declare and initialize. Attempt reassigning and redeclaring.

const c= 50; 

//   c= 25; // reassigning is not possibe in const variable it leads to TypeError

// const c= 10;  //redeclaration is not possible in const variable

console.log(c);



//Task-4- Create one var, one let, and one const variable. Reassign only allowed variables and print all.

var x= 10;

let y= 20;

const z= 30;

x= 60;
y= 70;

console.log(x); //The output is=> 60
console.log(y); //The output is=> 70
console.log(z); //The output is=> 30


//Task-5- Print one variable using console.log(), alert(), and document.writeln().

let value= "Hello World";

console.log(value); //The output will be displayed on the developer tool console
alert(value); //The output will be pop-up in the screen whenever we refresh or relode the page
document.writeln(value); //The output will be desplayed on the webpage(UI)



//Task-6- Use confirm(). Store the result in a let variable and print it using console.log().

let result= confirm("Do you want to proceed?") 

console.log(result); //The output will be displayed on the developer tool as abolean value(True or Falsa) as per the users action



//Task-7- Use prompt(). Store user input and print using console.log() and document.writeln().

let input= prompt("Enter your Name:")

console.log("HI "+input); //The output will be in the developer tool
document.writeln("HI "+input); //the output will be on the webpage(UI)



//Task-8- Print one variable using console.log(), console.warn(), and console.error().

let msg="Hello Everyone";

console.log(msg); 
console.warn(msg);
console.error(msg);



//Task-9- Create var price = 100. Reassign to 200. Print before and after values.

var price=100;

console.log(price); //The ouitput will be 100 because it is printed before the reassignment

    price=200;

console.log(price); //The output will be 200 because it is printed after the reassignment



//Task-10- Create a let boolean variable. Assign true, reassign false, and print final value.

let res= true;

    res= false;

console.log(res); //The output is false 



//Task-11- Create a string variable. Reassign a new string and print both values separately.

let str="Balaji";

console.log(str); //The ouitput will be Balaji because it is printed before the reassignment

    str="Anant"

console.log(str); //The ouitput will be Anant because it is printed after the reassignment



//Task-12- Redeclare the same var variable three times with different values and print final value.

let num= 500;
    num= 600;
    num= 700;

console.log(num); //The output will be 700 because the javascript will only take the value which is assigned lastely to the variable



//Task-13- Create a const object. Modify one property value and print the object.

const user={
    name:"balaji",
    age:25
};

    user.age=27; //Here the age 25 will be replaced as 27

console.log(user); //The output will be {name: 'balaji', age: 27}



//Task-14- Create one var, one let, and one const variable. Print using console.log(), console.warn(), console.error().

var ResultOne= "Positive";
let ResultTwo= "Negative";
const ResultThree= "Error";

console.log(ResultOne);
console.warn(ResultTwo);
console.error(ResultThree);





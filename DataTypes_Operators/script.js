//SECTION 1 – Data Types Tasks
//TASK 1 – Primitive Data Types 

let name= "balaji";
let age= 27;
let isLearning= true;
let unknown;
let value= null;

//Printing the Results

console.log(name);
console.log(age);
console.log(isLearning);
console.log(undefined);
console.log(value);

//Printing the Types

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLearning);
console.log(typeof unknown);
console.log(typeof value);



//TASK 2 – Array 

let colors = ["red", "green", "blue", "yellow", "black"]

console.log(colors[0]);
console.log(colors[colors.length-1]);
console.log(colors[2]);
console.log(colors.length);



//TASK 3 – Object 

let student = {
name: "Naveen",
skills: ["HTML", "CSS", "JS"],
experience: "1 year",
location: "India"
}

console.log(student.name);
console.log(student.skills[0])
student.role="Frontend Developer";
console.log(student);



//SECTION 2 – Arithmetic Operators Tasks
//TASK 4 – Basic Calculator

let x = 10;
let y = 3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);



//TASK 5 – Increment & Decrement Logic

let a=5;

let postInc= a++;
let preInc= ++a;

console.log(postInc);
console.log(preInc);
console.log(a);

// Pre Increment (++a)	                 Post Increment (a++)

//value Increases first	                 Uses value first
//Returns updated value	                 Returns old value

let b=2;
b= b++; //Here the incremrnt is happeniong on the value side soo the it takes only the variable

console.log(b);



//SECTION 3 – Assignment Operators
//TASK 6 – Power Assignment

let num=3;

num **=4; //Here we are using the Exponentiation Assignment Operator in a shorthand way so num = 3 ** 4 is 81
 

console.log(num);// Output is 81



//SECTION 4 – Comparison Operators
//TASK 7 – Equality Testing

console.log(5 == "5"); //Output is true
console.log(5 === "5"); //Output is false
console.log(0 == false); //Output is true
console.log(0 === false); //Output is false


//== (Loose Equality)	                    === (Strict Equality)

//Compares value only	                    Compares value + type
//Performs type conversion	                No type conversion



//SECTION 5 – Logical Operators
//TASK 8 – Login System Logic

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234")
         {
            console.log("Login Success");
         }else{
            console.log("Login Failed");
         }



        
//TASK 9 – OR Condition        

let userRole= "admin"

if (userRole ==="admin" || userRole==="manager")
{
    console.log("Access Granted");
    
}else{
    console.log("Access Declined");
}



//TASK 10 – NOT Operator

let loggin = false;

if (loggin ==false)
{
    console.log("Loggin Failed");
    
}



//SECTION 6 – Ternary Operator
//TASK 11 – Voting Eligibility

let z = 17;

let result = z >= 18 ? "Eligible" : "Not Eligible";

console.log(result);


let user = {
name: "Arun",
age: 22,
isLoggedIn: true,
skills: ["JS", "React"]
}

console.log("Name: "+user.name)
console.log("Skills: "+user.skills[0])

if(user.isLoggedIn && user.age >=18)
{
    console.log("Access Allowed")
}else{
    console.log("Access Denied");
    
}

console.log(user.isLoggedIn ? "User is Logged IN" : "User is Not Logged IN");

user.age++;
console.log(user.age);


user.skills.push("Node.js")
console.log(user.skills);

console.log(user);

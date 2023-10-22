//What is Temporal dead zone?
//Are let and const are hoisted
//syntaxError vs Refference Error vs TypeError?

//let and const declarations are hoisted but very differently than var declaration
//we can say let and const are in the temporal dead zone


// console.log(a);// in let case we don't get undefined we get ReferenceError: Cannot access 'a' before initialization this the phase is know as temporol dead zone when it runs the line 11 so the temporal dead zone ends it gets value
// console.log(b);//in case of var declaration we get undefined
let a =100;
console.log(a);//we can access after intilzation
var b =300;

//in case of var we can see it is in the global space
//in case of let we can see it is stored in a different memory space called script also we cannot access the let and const before we are putting some value to them

//Temporal dead zone is the time since when  this let variable was hoisted  and till it intilized some value the beetween that is called as temporal dead zone

//if we do console.log(window.b) it is attached to global space
//but if we do console.log(window.a) NO it is not attached to global space it is attached to a sepreate that is for let and const space called script it shows undefined



//let strict behivaour

// let num =20;
// let num =30;  cant do redeclaration with same number will give us a syntax error
 
let t;
t=20
console.log(t)  // can declare the variable and then give value after that  in let and var


//in case of var we can do this will not throw an error

// var number = 200;
// var number = 300;


//const behaviour its strict than let

const N1 = 50;
//const need to be  given value when it declared
console.log(N1); 

//we can declare const and then give value to it

// const N3 ;
// N3 =20;
// console.log(N3);   

//SyntaxError: Missing initializer in const declaration gives this error

// const N = 1000;

// N=2000;
// console.log(N);this will give a  TypeError: Assignment to constant variable.

// console.log(pN) // will give us a reffernce error cannot access pN before initialization 
// const pN = 400;











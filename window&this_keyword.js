//even if run javascript file  without code. it will still create  global execution is created it also creates window 
//window is like a big object created by js engine it also create a this keyword 
//At the global level this keyword  points to window object this===window in global level
//even for the function  execution context a this key word is created
//Global space any code you write inside javascript which is not inside a function
//anything which is not inside a function is in the global space 

//This variable  and functions get attached to that global object it was windows


var b = 10; // global space
// console.log(window.b);
//console.log(this.b) //same as window
//console.log(b)//same as  console.log(window.b)

function c(){

var x = 20; //
}
// console.log(x)//will give us an error because it was inside in function scope
// also javascript is lossley typed language also known as weekly typed language because we can put any value in a variable string and then change to number ect for same variable
//but in case of c++ c it's strictly typed we can't store any random value in a variable like array string in same variable
//example
let p = 100;
console.log(p)

 p ="hello"

 console.log(p)







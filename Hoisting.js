
//Hoisting

// PrintName();   // so in this case the function value will get print but the value of x will be undefined or in vs code it will give
//an reference error cannot access x before initilaization
// console.log(x);

// also if we don't put the varibale value and try to print the vlaue it will give us a error reffence error x is not defined

const x = 10;


function PrintName(){
    console.log("normal function invoked")
}


// PrintName();
// console.log(x);   //this will print the name and the value 


//arrow function is also behaviou like variable in execution context 

// Nfunction();   if we try to invoke the function it will also act as a variable so we can't acess them before intilization

const Nfunction = ()=>{
    console.log("arrow funciton invoked")
}

// Nfunction();  // This will work properly because we are invoking function after inzilatiaion

//this type of function invocation will also  work as arrow function


// Name(); this will give us an error
const Name  = function (){
    console.log("another function")
}

Name();//this will print the value
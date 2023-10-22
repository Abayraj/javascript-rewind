//Scope means where we can access a specific variable or a  function in our code that is scope
//when execution context is created a lexical enviornment is also created  lexcal enviornment is the local memory along with the lexical enviorment of it's parent

//example

let value = 20;

function firstFunc(){
    console.log(value);//it checks it local memory the function memory space and then check the global space and take the value from there
}
firstFunc();

//another example

let value2 = 200;

function secondFunction(){
    secondFunctionchild();
    function secondFunctionchild(){
        console.log(value2)
    }
}

//the secondFunctionChild is lexicaly inside secondFunction and secondFunction is lexicaly inside the global scope local memory along with parent memory
//first secondFunctionChild  will check it's local memory value2 and then it will goses to the lexical enviornment of it's parent secondFunction and check it's memory space.
//then it will check the global execution context memory space and find the value  it gose back and give the value to console.

// if the value is not there in the lexcal enviornment of global parent it will find null and get b is not definded


//  SO THIS WAY OF FINDING THIS IS CALLED AS SCOPE CHAIN

secondFunction(); 

//so still it checks  secondFunctionchild scope and then the secondFuncion memory space and then the global memory space and take the value

//will it work for the vice versa case? lets chcek

function thirdFunction(){
    let number  = 20;

}

// console.log(number)  ReferenceError: number is not defined can't do this

// so the scope of the number varibale is where can we access the variable number in the code that is scope 




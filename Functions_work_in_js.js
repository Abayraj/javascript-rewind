
var x = 200;
console.log(x)
F1();
F2();


function F1() {
    var x= 10;
    console.log(x);
}

function F2(){
    var x=100;
    console.log(x)
}

// it will print 200,10,100 it dose not effect  the other's  the function and the variable in outside maintains it's own sepreate spaced
//for global execution context or any function context they will have there own memory space


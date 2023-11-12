///---learning function 
//1.Normal function 
//2.Arrow Function 

function add(num1: number, num2: number ) : number {
    return num1 + num2; 
}
add(3, '5'); //incorrect

//but in JS

function add(num1, num2 ) {
    return num1 + num2; 
}
add(3, '5'); //correct 

// Arrow function 
const addInArrow = (num1: number , num2:number) : number=> num1 + num2; 


// Object --->function ----> method

const 

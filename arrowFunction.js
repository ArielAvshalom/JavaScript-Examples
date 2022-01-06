//Example 1 
//** */ //Normal function returning sum
 function sum(x, y) { return x + y; } // Arrow Function equivalent
 // To call an arrow function and reuse it, you need to store it in a variable, for example: 
 let sum2 = (x, y) => x + y; 

 console.log(sum(100,1))
 console.log(sum2(2,3))

 //=========================================================== 
 //Example 2 
 //** */ //Normal function returning if a number is negative 
 function isNegative(num) { return num < 0; } 
 // Arrow Function equivalent
 // To call an arrow function and reuse it, you need to store it in a variable, for example: 
  let isNegative2 = (num) => num < 0;

  console.log(isNegative(-1))
  console.log(isNegative2(1))

// More info on arrow function vs normal function 
// https://blog.bitsrc.io/arrow-functions-vs-regular-functions-in-javascript-458ccd863bc1

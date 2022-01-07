//There is something called structure
//If you put in code line by line, you get output line by line


// while
//let allows you to define a variable
let my_num = 17;

while (my_num <= 21){
    console.log(my_num);
    my_num+=1;
    //ny_num = my_num + 1
}

for (let num = 1; num <= 18; num+=2){
    console.log(num);
}

//you have to use explicit types in Java or C

/*

try:
print something that doesn't work
except:
while true
keep on doing something

*/

let my_var = 21;
//Type number

console.log(typeof my_var);

let my_var2 = '81'

console.log(my_var + my_var2);

//type coercion
//avoid ambiguity

console.log(my_var2 + my_var);

//implicit typing is a dangerous place for everyone.

//explicit typing is much safer

console.log(my_var+Number(my_var2));
my_num = 16;
if(my_num === 17){
    console.log("Hello gEllo world");
} else {
    console.log('it is not good to have a number that is not 17');
}



const cube = function(x, y) {
    return x**y;
};

console.log(cube(17, 2));

//to multiple 4 digit numbers like a calculator

console.log(typeof NaN);
//Infinity and -Infinity

//Remember in computers, we don't have real math, we have math to a certain precision.

console.log(Infinity - -Infinity);

//different scopes open up different variables.
//namespaces
//whenever you load something like p5 for example that's a namespace.

//Global
    //Local

//Things that are global can be accessed by everything in you code.

//Things that are local only work in that local location. 

// let x = 71;
// if (true) {
//     let abc = 'abc'
//     let data = 91;
//     console.log('we are in the if true scope');
//     console.log(x+abc+data);
//     console.log(abc+data);
//     console.log(x+data);
// }
// console.log('out of scope');
// console.log(x+data);
// console.log(abc+data);
// console.log('pizza for everyone');

const var17 = 91;

//var17 = 19;

//don't do this!!!!
if (true) {
    var test = 'I am a test';
}
console.log(test);

const cake = function(){

    const cake_batter = function(){
        let cake_flavor = 'chocolate';
    }

}

const machine = (machine_name, machine_info) =>{
    console.log(machine_name +"\t:\t" + machine_info);
}

machine("susuqov", "32 gb ram i7 8700k 1.25 tb.");

//Does anyone know about the "call stack?"


//every time we call the function again, we get a recreation of that function.

function wrapper(n){
    let local_number = n;
    return () => local_number;
}

let wrapper1 = wrapper(12);
let wrapper2 = wrapper(28); //2 + 14 + 7 + 4 + 1 = 28 // 13 11 they're twins

console.log(wrapper1());
console.log(wrapper2());

//this is called closure everything is pieced together in a simple and enclosed way. Once you finish something you can start it anew.

//Do you all know what recursion is?

function fib(n){ //nth fib   
    if (n === 0){
        return 1;
    }
    if (n === 1){
        return 1;
    }
    console.log(n);
    return fib(n-1) + fib(n-2);

    

}
console.log(fib(10));

//try optimizing and sharing your code on slack

/*
fib(5) we want the 5th fib number.

1 +1 +2 +3 +5
*/


//foreach





Array.prototype.forEachArielVersion = function(callback, thisArg) {

    if (this == null) {throw new TypeError('need not null array');}

    var T, k;

    var O = Object(this);

    var len = O.length >>> 0;

    if (typeof callback !== "function") {throw new TypeError(callback + 'is not a function');}

    if (arguments.length > 1) {T = thisArg;}

    k = 0;

    while (k < len) {
        var kValue;

        if (k in O) {
            kValue = O[k];

            callback.call(T, kValue, k, O);
        }

        k++;
    }
};

const array1 = ['a','b','c'];

array1.forEach(element => console.log(element));

array1.forEachArielVersion(element => console.log(element));


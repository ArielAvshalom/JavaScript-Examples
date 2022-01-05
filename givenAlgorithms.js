algorithms();

/*
Here are some given Javascript algorithms to use to manipulate your program
*/

function algorithms(){
  // Lets start with an array
  let arr = [5, 3, 1, 4, 2];
  // Removes last value in array
  arr.pop()
  console.log(arr);
  // Adds a value in the last position of the array
  arr.push(2);
  console.log(arr);
  // Removes value in the array between a set of two indicies in an array or from that index to the end
  console.log(arr.slice(3));
  console.log(arr.slice(0,1));
  // Sorts array
  arr.sort();
  console.log(arr);
  // To reverse an array
  console.log(arr.reverse());
  // You can completely reverse a string in using 3 algorthms
  let arr2 = "Hello";
  console.log(arr2.split("").reverse().join(""));
  // If you're use to Scanner in Java, here's a replacement
  prompt("How are you doing?");
}

/*
To find more go to this website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/


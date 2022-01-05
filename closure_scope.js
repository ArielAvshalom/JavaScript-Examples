// lexical scope

function callFriend(name) {
  //nested function
  function callBestFriend(name) {
    const bestFriendGreeting = "Hey best friend, " + name;
    console.log(bestFriendGreeting);

    // nested function
    function sayGoodbye(name) {
      const bye = "Bye " + name;
      if (name) {
        const exclamation = "!!!!!";
      }

      //console.log(bye + exclamation); //Error: UNDEFINED OUTSIDE OF IF STATEMENT SCOPE (don't initialize variables in conditional statements)

      console.log(bye);
    }
    sayGoodbye(name);
  }
  // console.log(bestFriendGreeting) // Error: variable is undefined outside of function's scope
  console.log("Hey there, " + name);
  callBestFriend(name);
  //   sayGoodbye(name); // variable is undefined outside of function's scope
}

callFriend("Marnie");

// higher-order functions and closure

function incrementCount() {
  let counter = 0;

  return () => {
    return counter++;
  };
}

const startCount = incrementCount();
console.log(startCount()); // 0
console.log(startCount()); // 1
console.log(startCount()); // 2

function repeat(str) {
  let string = "Hello, ";
  return (str) => {
    string += str;
    return string;
  };
}
const startRepeat = repeat();
console.log(startRepeat("dog")); // 'Hello, dog'
console.log(startRepeat("monster")); // 'Hello, dogmonster'

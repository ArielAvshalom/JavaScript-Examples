let promise = new Promise(function(resolve, reject) {
// producing code
const a = "hello";
const b = "Hello"
  if(a === b) {
    resolve(); // call on fulfilled promise.
}
else {
  reject(); // call on rejected promise.
}
});
 
// consuming code, waiting for a promise to be resolved or fulfilled.
promise.then(function () {
  console.log('The promise is fulfilled.');
}).catch(function () {
  console.log('The promise is rejected.');
});
 

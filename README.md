# JavaScript-Examples
Our TAs present some JavaScript examples for students

# Type Coercion and Truthy-Falsy
<details><summary>Click to Expand</summary>

## Type Coercion
<details><summary>Click to Expand</summary>

JavaScript will automatically attempt to modify the type of a variable in certain circumstances. When speaking about Type Coercion, this modification is implicit (implicit changes can give a developer a really bad day!).

When the conversion is explicit, this is called type conversion.

### An example of type coercion
```JavaScript
const value1 = '5';
const value2 = 10;
let sum = value1 + value2;
console.log(sum);
```

What will be the output?
<details><summary>Click to Expand</summary>
<code>510</code>

The rationalle is that JavaScript will coerce the 9 to a string and "add" (concatenate) the two strings together. Why was the 9 changed and not the 5? It doesn't really matter, what matters is this can throw a wrench into your operations that could take hours or days to find!
</details>

### An example of type conversion:
```JavaScript
const value1 = '5';
const value2 = 10;
let sum = Number(value1) + value2;
console.log(sum);
```
What will be the output?
<details><summary>Click to Expand</summary>
<code>15</code>
</details>

</details>

## Truthy-Falsy
<details><summary>Click to Expand</summary>
A truthy value in Javascript is considered true in a boolean context (booleans are true or false, 1 or 0, etc.).

All values are considered truthy unless they're falsy (code like <code>false, 0, -0, 0n, "", null, undefined, NaN</code>).

Any of these can be coerced to be true in a boolean contex:

```JavaScript
if (true)
if ({})
if (42)
if ("0")
if ("false")
if (new Date())
if (-Infinity)
```
</details>

### Logical And: &&
<details><summary>Click to Expand</summary>

The logical and operator returns the second operator if the first object is truthy

```JavaScript
true && "dog"
// returns "dog"

[] && true
// return true
```

</details>

### Logical Or: ||
<details><summary>Click to Expand</summary>

The logical or operator 
- returns the first operator when it is truthy 
- returns the second operator when the first is falsy
    - the second operator can be truthy or falsy in this case

```JavaScript
console.log(null || "Kale Pizza")
// return "Kale Pizza"
console.log("Strawberry Potato Squash" || "user")
// return "Strawberry Potato Squash"
console.log(0 || NaN)
// return NaN
```
</details>

<br>

:cake: The bottom line:
- values can be implicitly type coerced

- Almost every value in Javascript can be coerced to be truthy in a boolean context (like an if conditional), so be wary!

- Don't get confused by truthy-falsy, it's just a way of saying that JavaScript is a very loose language! 

- Be careful with types and keep on programming!

</details>

Map vs Object

<details><summary>Click to Expand</summary>

Objects are key value pairs. So are maps...so what (Wat) is the difference?

A map has two or three features that diffrentiate it from an object:

    -It keeps track of the size of the map and you can get that value map.size
    -It has an in order iteration of the key : value pairs to keep track of key : values in the order of insertion
    -It uses the map.has(key) prototype to find a key in O(1) lookup time.
        -Please note that objects do something similar with ```in``` and with object.hasOwnProperty() method.

Objects are also used as classes of course and whenever you create a function and use ```this```, you're creating an object in the background.

Maps are (relatively speaking) new.
    


</details>


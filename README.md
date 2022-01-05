# JavaScript-Examples
Our TAs present some JavaScript examples for students

# Examples

## Type Coercion

JavaScript will automatically attempt to modify the type of a variable in certain circumstances. When speaking about Type Coercion, this modification is implicit (implicit changes can give a developer a really bad day!).

When the conversion is explicit, this is called type conversion.

<code>

const value1 = '5';

const value2 = 9;

let sum = value1 + value2;

console.log(sum);

</code>
What will be the output?
<details><summary>Click to Expand</summary>
<code>59</code>
The rationalle is that JavaScript will coerce the 9 to a string and "add" (concatenate) the two strings together.
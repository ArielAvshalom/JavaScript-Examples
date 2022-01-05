# The "this" keyword in JavaScript

“This” is a reference to the object that is executing the current function. If the function is inside an object, “this” references an instance of that object. And if the function is not inside an object, “this” references the global window object (we will learn more about this later).

## Golden rule

To determine what the “this” keyword references, look to the ***left of the dot operator***.



### Example 1
Consider this class:

```javascript
class Car {
  setDriveSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this.sound
  }
}

const myCar = new Car()
myCar.setDriveSound("vroom")
myCar.drive()

```
What does “this” reference when we call setDriveSound() and drive? Again, look to the left of the dot operator. Left of the dot operator is “myCar”, so “this” references an instance of the class Car. 

### Example 2
What is printed to the console?
```javascript
class Car {
  setDriveSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this.sound
  }
}

const myCar = new Car()
myCar.setDriveSound("vroom")

const myTruck = {
  sound: "beep, beep", 
  driveMyTruck: myCar.drive
}

let sound = myTruck.driveMyTruck()
console.log(sound)
```
You might be tempted to say "vroom". Again, look to the left of the dot operator (“truck”). As you can see, “this” references the truck object, therefore, this.sound is equal to "beep, beep".

### Example 3

How about this example?
```javascript
class Car {
  setDriveSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this.sound
  }
}

const myCar = new Car()
myCar.setDriveSound("vroom")

const drive = myCar.drive;

let sound = drive()
console.log(sound)
```

Look to the left of the dot operator. In this case, there is no dot operator, so we should expect the error:

``` bash
"TypeError: Cannot read property ‘sound’ of undefined”. 
``` 

// 1) Constructor Function
//You can tell it is a constructor function because it Uppercased(the first letter of the name)
console.log("Object using Constructor Fuction")
const Person = function(name, birthYear){
  this.name = name;
  this.birthYear = birthYear;
}

//the "new" keyword is very powerful. When it is used:

// 1)  an empty object is created,
// 2) makes sure that this in the constructor is being referred to the instantiated object it is called on. You can see that in the original constructor above there is no return statement, but the new keyword takes care of that.
// 3) and finally return that object.
// 4) The new key word is also responsible for establishing (the concept of prototypal chain)


const jonas = new Person('jonas', 1990);
console.log(jonas); // { birthYear: 1990, name: "jonas"}

const ayush = new Person('ayush', 1992);
console.log(ayush); // { birthYear: 1992, name: "ayush"}


Person.prototype.calcAge = function(){
  console.log(2022 - this.birthYear);
}
jonas.calcAge(); //32
ayush.calcAge(); //20

//////////////////////
// 2) Class constructor
// This way of creating an object and instantiating objects out of it works the same way as constructor function. The class key and the rest of the syntax is just a syntactical sugar over class constructor. The syntax was designed this way so that users of other languages can find a familiar syntax in this.

console.log("Object using Class Constructor")
class PersonCl{
  constructor(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge (){
    console.log(2022 - this.birthYear)
  }
}

const joe = new PersonCl('Joe','1993');
console.log(joe); //PersonCl {firstName: "Ayush", birthYear: "1992"}
joe.calcAge(); //29

///////////////////////////////////
// 3) Object.create()
//This approach is rarely used but for the sake of variations/options out there in js, it is included here.

console.log("Object using Object dot Create")
const Person1 = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person1.prototype.calcAge = function(){
  console.log(2022 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
  //this.firstName = firstName;
  //this.birthYear = birthYear;
        Person1.call( this.firstName, this.birthYear);
        this.course = course;
}

//Linking prototypes
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}.`)
}

const mike = new Student('Mike','1992','Computer Science');
console.log(mike);
//Student {firstName: "Mike", birthYear: "1992", course: "Computer Science"}

mike.introduce();
//My name is Mike and I study  Computer Science.

mike.calcAge(); //30

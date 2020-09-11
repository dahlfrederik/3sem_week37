/* global prop */

var car = {type: "BMW", model: "M5", color: "black"};


console.log("First print:");
for (prop in car) {

    console.log(prop, car[prop]);
}

delete car.color;
console.log("Second time with color deleted:");
for (prop in car) {

    console.log(prop, car[prop]);
}

car.horsepower = 600; 

console.log("Third time with HP:");
for (prop in car) {

    console.log(prop, car[prop]);
}


function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.details = function() {return this.firstName + " " + this.lastName + " " + this.age;};
}

let newPerson = new Person("John", "Doe", 50);

console.log(newPerson.details());
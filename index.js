/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1 **DONE**
    - Write a Person Constructor that initializes `name` and `age` from arguments. **DONE**
    - All instances of Person should initialize with an empty `stomach` array. **DONE**     
    - Give instances of Person the ability to `.eat("someFood")`: **DONE**
        + When eating an edible, it should be pushed into the `stomach`. **DONE**
        + The `eat` method should have no effect if there are 10 items in the `stomach`. **DONE**
    - Give instances of Person the ability to `.poop()`: **DONE**
        + When an instance poops, its `stomach` should empty. **DONE**
    - Give instances of Person a method `.toString()`: **DONE**
        + It should return a string with `name` and `age`. Example: "Mary, 50" **DONE**
*/

function Person(name, age) {
  this.name = name,
  this.age = age,
  this.stomach = [] 
}; 
  
Person.prototype.eat = function (someFood){
    if(this.stomach.length < 10){
      this.stomach.push(someFood);
    } 
};

Person.prototype.poop = function () {
    return this.stomach = [];
};

Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
};


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments. **DONE**
    - All instances built with Car: **DONE**
        + should initialize with an `tank` at 0 **DONE**
        + should initialize with an `odometer` at 0 **DONE**
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`. **DONE**
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven: **DONE**
        + Should cause the `odometer` to go up. **DONE**
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.**DONE**
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) { 
  this.model = model,
  this.milesPerGallon = milesPerGallon,
  this.tank = 0, 
  this.odometer = 0
};

Car.prototype.fill = function(gallons){   // this will get added to Car prototype
  this.tank = this.tank + gallons;
};

Car.prototype.drive = function(distance) {
    this.odometer = this.odometer + distance; // should make odometer increase by distance in miles
    this.tank = this.tank - Math.round(distance/this.milesPerGallon);
   
    if(this.tank <= 0){
      return `I ran out of fuel at ${this.odometer} miles!`
    }
      return;
};




/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);  // subclass is pointing to the superclass
  this.favoriteToy = favoriteToy
};

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function (favoriteToy) {return `Playing with ${this.favoriteToy}`};

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  
  Answer: the 'this' keyword can point to different things depending on the circumstance. in essence there are 
  4 scenarios governing the 'this' command.

  1. Window Binding - if you use 'this' in a function attached to the global scope then 'this' will be pointing towards the window
  object. This is usally not something you would intentionally want to do. 

  2. implicit Binding - occurs when you are employing dot notation to invoke a function. So the general rule would be
  to look to the left of the dot, that will become the context for 'this'. 
  
  3. explicit Binding -  occurs when you employ call() apply() or bind() each of these methods has different properties.
  call() and apply() will both immediately invoke the function. You pass in 'this' bind() we pass in the arguements 
  one by one and the function is not immedietly invoked. bind() also returns a new function that can be assigned to 
  a variable and can be invoked later. 
  
  4. New Binding - 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}

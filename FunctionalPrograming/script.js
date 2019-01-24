"use strict";

/*********************Making Prototype by 2 functions***********************/

//Making BaseFunction prototype of ChildFunction
//Scenario 1
function BaseFunction(){
  this.isBaseFunction = true;
}

function InheritedFunction(){
  this.isInheritedFunction = true;
}

InheritedFunction.prototype = new BaseFunction();

console.log(new InheritedFunction());
//Now with the code BaseFunction becomes __proto__ of InheritedFunction.

//Scenario 2

// Vehicle - superclass
function Vehicle(name) {
  this.name = name;
}
// superclass method
Vehicle.prototype.start = function() {
  return "engine of "+this.name + " starting...";
};
// Car - subclass
function Car(name) {
  Vehicle.call(this,name); // call super constructor.
}
// subclass extends superclass
Car.prototype = Object.create(Vehicle.prototype);
// subclass method
Car.prototype.run = function() {
  console.log("Hello "+ this.start());
};
// instances of subclass
var c1 = new Car("Fiesta");
var c2 = new Car("Baleno");
// accessing the subclass method which internally access superclass method
c1.run();   // "Hello engine of Fiesta starting..."
c2.run();   // "Hello engine of Baleno starting..."


/*******************Making Prototype by 2 objects*****************************/

//Make BaseObject prototype of ChildObject

var BaseObj = {
  job:'engineer',
}

var childObj = {
  name:'shekhar',
  print:function(){console.log(this.job)}
}
Object.setPrototypeOf(childObj,BaseObj);
console.log(childObj.print());//baseObj becomes prototype of childObj


/**************Using [[Prototype]] for making prototype************************/

var proto = {
  job:'loving husband',
  print: function(){
    console.log(this.name,'" Profession  - "',this.job)
  }

}

var currentObj = {
  name:'pankhuri'
}
Object.setPrototypeOf(currentObj,proto);
currentObj.print();


/**************************DefineProperty********************************** */
/*
1 . Configurable - whether prop can be deleted or changed
2 . Writable - can be writable or Not.
3 . Ennumerable -  can be used in the enumerable loops or filter,mapreduce.
*/

var abc = {name:"shekhar"};
// Object.defineProperty();

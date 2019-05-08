/** The four principles of "this";
  * in your own words. explain the four principle for the "this" keyword below.
  *
  * 1. In the global execution context, `outside of any function`, this refers to the global
     `Object` whether in strict mode or not.
  *
  *
  * 2. When a function is called as a method of an object, its this is set to the object the method is called on.
  * 
  * 
  * 3.When a function is used as a constructor `with the new keyword`, its `this` is bound to the new object being constructed. The same notion holds true for methods defined somewhere on the object's prototype chain. If the method is on an object's prototype chain, this refers to the object that the method was called on, as if the method were on the object.
  * 
  * 
  * 4. The `this` keyword inside a function, the value of this depends on how the function is called. So, in strict mode, if this was not defined by the execution context, it remains undefined. The `this` can be set explicitly to pass the value of this from one context to another using bind(), call(), or apply() method all functions inherit from `Function.prototype`. which is sometimes called method borrowing.
  * 
  *
  * write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// Note: A variable without let, const keyword is on global object (window)

// implicit variable get attach to global object (window)
name = 'Yemi';
console.log(this.name);

// explicit variable get attach to global object (window)
window.name = 'John Doe';
console.log(window.name);

console.log(this === window);

// Principle 2

// code example for Implicit Binding
const student = {
	name: 'Yemi',
	age: 18,
	grade: 'Grade 1',
	studentInfo() {
		console.log(`${this.name} is ${this.age} and in ${this.grade}`);
	}
};

// Invocation
student.studentInfo();

// Principle 3

// code example for New Binding
function Student({ name, age, grade = 1, favoriteSport }) {
	this.name = name;
	this.age = age;
	this.grade = grade;
	this.favoriteSport = favoriteSport;
}

// Attach studentDetails method to Student prototype chain
// NOTE: I did not declare the method inside the constructor
//       because if i did any time we create a new instance of Student a new
//      copy of the method will be created which leads to memory consumption
//      even though modern browsers are capable enough but not sufficient
Student.prototype.details = function() {
	return `${this.name} is ${this.age} and love playing ${this.favoriteSport}`;
};

// Creates new instance of Student object
const emily = new Student({ name: 'Emily', age: 20, favoriteSport: 'Basketball' });

console.log(emily.details());

// Principle 4

// code example for Explicit Binding
function getName() {
	// this will point to -> window
	console.log(`------- this pointing to ${this} object -----`);
	console.log(this);
	return this.name;
}
console.log(getName());

const changeName = {
	name: 'Johnson'
};

// this will point to -> changeName
const newName = getName.bind(changeName);
console.log(newName());

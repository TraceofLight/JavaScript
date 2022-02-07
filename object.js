`Use strict`

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const TraceofLight = {name : 'TraceofLight', age : 4};
print(TraceofLight);

// with JavaScript magic (dynamically typed language)
// can add properties later
TraceofLight.hasJob = true;
console.log(TraceofLight.hasJob);

// can delete properties later
delete TraceofLight.hasJob;
console.log(TraceofLight.hasJob);

// 2. Computed properties
// key should be always string
console.log(TraceofLight.name);
console.log(TraceofLight['name']);
TraceofLight['hasJob'] = true;
console.log(TraceofLight.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(TraceofLight, 'name');
printValue(TraceofLight, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// class - object
const person4 = new Person('TraceofLight', 5);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// normal function
// const person4 = makePerson('TraceofLight', 5);
// function makePerson(name, age) {
//   return {
//     name,
//     age
//   }
// }

// 5. in operator: property existence check (key in obj)
console.log('name' in TraceofLight);
console.log('age' in TraceofLight);
console.log('random' in TraceofLight);
console.log(TraceofLight.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear()
for (key in TraceofLight) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}
// for(let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name : 'TraceofLight', age : '20' };
const user2 = user;
// user2.name = 'coder';
console.log(user2);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear()
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

const fruit1 = { color: 'red' };
const fruit2 = { color : 'blue', size 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
`Use Strict`

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Fuction declaration
// function name (param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log(`hello`);
}
printHello();

function log(message) {
  console.log(message);
}
log(`hello@`)
log(20220203);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = `coder`;
}
const ToL = {name: `ToL`};
changeName(ToL);
console.log(ToL);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
  if (from === undefined) {
    from = `unknown`;
  }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');
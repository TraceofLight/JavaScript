/* hello world */
// Javascript is very flexible
// flexible === dangerous
// added ECMAScript 5

// 1. Use strict
'use strict';
console.log('hello world!');

// 2. Variable
// let (added in ES6)

{
  let name = 'traceoflight';
  console.log(name);
  name = 'hello';
  console.log(name);
}

console.log(name);

let apple = 'banana';
console.log(apple);
{console.log(apple)};


let altname = 'Hi';
{
  console.log(altname);
  altname = 'why';
  console.log(altname);
}
console.log(altname);

// var (DO NOT USE THIS!) 
// var hoisting (move declaration from bottom to top)
// has no block scope 

// 3. Constants
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const nice = 'animal';
console.log(nice);
// nice = 'cat'; 사용하면 변경 불가이므로 에러 발생

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// funtion, first-class function

// number - spacial numeric values: infinity, -infinity, NaN

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 3523452345238789756445234523452345243n;  // over (-2^53) ~ (2^53)
console.log('value: ${bigInt}, type: ${typeof bigInt}');
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(greeting)
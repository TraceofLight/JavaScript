/* hello world */
// Javascript is very flexible
// flexible === dangerous
// added ECMAScript 5

// 1. Use strict
`use strict`;
console.log(`hello world!`);

// 2. Variable, rw(read/write)
// let (added in ES6)

{
  let name = `traceoflight`;
  console.log(name);
  name = `hello`;
  console.log(name);
}

console.log(name);

let apple = `banana`;
console.log(apple);
{
  console.log(apple);
}

let altname = `Hi`;
{
  console.log(altname);
  altname = `why`;
  console.log(altname);
}
console.log(altname);

// var (DO NOT USE THIS!)
// var hoisting (move declaration from bottom to top)
// has no block scope

// 3. Constant r(read only)
// use const whenever possible
// only use let if variable needs to change
// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const nice = `animal`;
console.log(nice);
// nice = `cat`; 사용하면 변경 불가이므로 에러 발생

// 4. Variable types
// "primitive", single item: number, string, boolean, null, undefiedn, symbol
// "object", box container
// funtion, first-class function

// number - spacial numeric values: infinity, -infinity, NaN

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = `not a number` / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don`t use it yet)
const bigInt = 3523452345238789756999999999994456532156234523452345243n; // over (-2^53) ~ (2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = `c`;
const brendan = `brendan`;
const greeting = `hello ` + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ` + helloBob + `type: ` + typeof helloBob);

// boolean
// false : 0, null, undefined, NaN, ``
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: typeof ${nothing}`);

// undefined
let x; // = undefined; 로 정의도 가능
console.log(`value: ${x}, type: typeof ${x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol(`id`);
const symbol2 = Symbol(`id`);
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for(`id`);
const gsymbol2 = Symbol.for(`id`);
console.log(gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// ohject, real-life object, data structure
const trace = { name: `trace`, age: 27 };
trace.age = 22;

// 5. Dynamic typing: dynamically typed language
let text = `hello`;
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: {typeof text}`);
text = 1;
console.log(`value: ${text}, type: {typeof text}`);
text = `7` + 5;
console.log(`value: ${text}, type: {typeof text}`);
text = `8` / `2`;
console.log(`value: ${text}, type: {typeof text}`);
// console.log(text.charAt(0)); 실행 시에 에러 발생 > typescript가 만들어진 배경

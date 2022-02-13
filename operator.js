`Use Strict`;

// 1. String concatenation
console.log(`my` + ` cat`);
console.log(`1` + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log(`ToL\'s \n\tbook`);

// 2. Numeric Operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter; 선가산 후할당
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1; 선할당 후가산
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// -- 의 경우도 감산으로 바뀔 뿐 동일한 방식

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// 연산량이 있는 코드를 뒤로 배치하는 것이 효율적임

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// often used to compress long if-statement
// nullablueObject && nullablueObject.something

// if (nullableObject != null) {
//   nullableObject.something
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log(`anything`);
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = `5`;
const numberFive = 5;

// == loose equality, whth type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const trace1 = { name: `ToL` };
const trace2 = { name: `ToL` };
const trace3 = trace1;
console.log(trace1 == trace2);
console.log(trace1 === trace2);
console.log(trace1 === trace3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log(`` == false);
console.log(`` === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = `ToL`;
if (name === `ToL`) {
  console.log(`Welcome, TraceOfLight!`);
} else if (name === `coder`) {
  console.log(`You are amazing coder`);
} else {
  console.log(`unknown`);
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === `ToL` ? `yes` : `no`);

// 10. Switch statement
// use of multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = `IE`;
switch (browser) {
  case `IE`:
    console.log(`go away!`);
    break;
  case `Chrome`:
  case `Firefox`:
    console.log(`love you!`);
    break;
  default:
    console.log(`same all!`);
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition, step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for (let i = 0; i < 11; i++) {
  console.log(`i: ${i}`);
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`i= ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i < 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(`i= ${i}`);
}

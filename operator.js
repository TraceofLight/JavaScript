'Use Strict'

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log('string literals: 1 + 2 = ${1 + 2}');

console.log('ToL\'s \n\tbook');

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
console.log('preIncrement: ${preIncrement}, counter: ${counter}')
const postIncrement = counter++
// preIncrement = counter; 
// counter = counter + 1; 선할당 후가산
console.log('postIncrement: ${postIncrement}, counter: ${counter}')
// -- 의 경우도 감산으로 바뀔 뿐 동일한 방식
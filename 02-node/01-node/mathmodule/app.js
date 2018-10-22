const MathLibrary = require("./mathlib");
const math = new MathLibrary();

const num1 = 1;
const num2 = 35;
const num = 5;

console.log(math);
console.log('\nSum of: ' + num1 + ' and ' + num2 + ' => '+ math.add(num1, num2));
console.log('Product of: ' + num1 + ' and ' + num2 + ' => '+ math.multiply(num1, num2));
console.log('Square of: ' + num + ' => '+ math.square(num));
console.log('Random number between: ' + num1 + ' and ' + num2 + ' => ' + math.random(num1, num2));
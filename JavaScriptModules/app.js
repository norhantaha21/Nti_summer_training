import { add, subtract, pi } from './math.js';
import { greet } from './greet.js';
import { capitalize } from './utils.js';

console.log("Addition:", add(5, 3));           // 8
console.log("Subtraction:", subtract(10, 4));  // 6
console.log("Value of pi:", pi);               // 3.14159

const name = "nourhan";
console.log(greet(capitalize(name)));          // Hello, Nourhan! Welcome!
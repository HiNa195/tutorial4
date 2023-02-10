/* Tutorial 4
   Exercise 2 JavaScript code
   -- Simple Calculation
*/
console.log("Tran's Output from Tutorial 4 Exercise 4");
let num1 = Number(prompt("Please enter the first integer:"));
let num2 = Number(prompt("Please enter the second integer:"));
if (isNaN(num1) || isNaN(num2)) {
   console.log("Invalid input. You entered not a number.")
}
else if (Number.isInteger(num1) && (Number.isInteger(num2))) {
   console.log("Sum = " + (num1 + num2));
   console.log("Differrent = " + (num1 - num2));
   console.log("Product = " + (num1 * num2));
   console.log("Quotient = " + (num1 / num2));
   console.log("Remainder = " + (num1 % num2));
}
else {
   console.log("Invalid input. Please enter two integers.")
}
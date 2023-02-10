/* Tutorial 4
   Exercise 1 JavaScript code
   -- Validate Input
*/
console.log("Tran's Output from Tutorial 4 Exercise 1");
let num = prompt("Please enter a number between 1 – 100:");
if (num >= 1 && num <= 100) {
    console.log(`Thank you! You entered ${num}, a valid number`);
}
else {
    console.log(`Sorry, ${num} is not a valid entry`);
}
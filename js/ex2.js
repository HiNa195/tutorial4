/* Tutorial 4
   Exercise 2 JavaScript code
   -- Class Standing
*/
console.log("Tran's Output from Tutorial 4 Exercise 2");
let xname = prompt("Please enter your name:");
let unit = Number(prompt("Please enter number of units completed at college:"));
if (isNaN(unit)) {
    console.log("Invalid input. You entered not a number.")
}
else if (Number.isInteger(unit)) {
    if (unit >= 0) {
        console.log(`Hello ${xname}`);
        if (unit >= 0 && unit <= 30) {
            console.log("Your grade standing is Freshman.");
        }
        else if (unit >= 31 && unit <= 60) {
            console.log("Your grade standing is Sophomore.");
        }
        else if (unit >= 61 && unit <= 90) {
            console.log("Your grade standing is Junior.");
        }
        else {
            console.log("Your grade standing is Senior.");
        }
    }
    else {
        console.log("Invalid input. Must be greater than 0.");
    }
}
else {
    console.log("Invalid input. You entered a decimal.")
}
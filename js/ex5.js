/* Tutorial 4
   Exercise 2 JavaScript code
   -- Password
*/
console.log("Tran's Output from Tutorial 4 Exercise 5");
pw = prompt("Please enter password:");
for (let i = 1; i <= 3; i++) {
   if (pw === "secret") {
      console.log(`You entered the correct password after ${i} attempt(s)`);
   }
   else if (i <= 2) {
      pw = prompt("Incorrect password. Please enter again:");
   }
   else {
      console.log(`Your account is locked! You failed to enter the correct password ${i} times`);
   }
}

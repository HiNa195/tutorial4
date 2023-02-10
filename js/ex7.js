/* Tutorial 4
   Exercise 2 JavaScript code
*/
console.log("Tran's Output from Tutorial 4 Exercise 7");
hour = Number(prompt("Please enter hour:"));
min = Number(prompt("Please enter minute:"));
sec = Number(prompt("Please enter second:"));
if (isNaN(hour) || isNaN(min) || isNaN(sec)) {
   console.log("Invalid input. You entered not a number.")
}
else if (Number.isInteger(hour) && (Number.isInteger(min)) && Number.isInteger(sec)) {
   if (hour < 0 || hour > 24){
      console.log("Invalid hour input. Hour must be 0 - 24.");
   }
   else if (min < 0 || min > 59){
      console.log("Invalid minute input. Minute must be 0 - 59.");
   }
   else if (sec < 0 || hour > 59){
      console.log("Invalid second input. Second must be 0 - 59.");
   }
   else {
      console.log(`Time input: ${hour}h${min}m${sec}s`);
      if (min < 59 && sec === 59) {
         sec = 0;
         console.log(`One second later: ${hour}h${min+1}m${sec}s`);
      }
      else if (hour < 23 && min === 59 && sec === 59) {
         min = 0;
         sec = 0;
         console.log(`One second later: ${hour+1}h${min}m${sec}s`);
      }
      else if (hour === 23 && min === 59 && sec === 59) {
         hour = 0;
         min = 0;
         sec = 0;
         console.log(`One second later: ${hour}h${min}m${sec}s`);
      }
      else {
         console.log(`One second later: ${hour}h${min}m${sec+1}s`);
      }
   }
}
else {
   console.log("Invalid input. You entered a decimal.")
}
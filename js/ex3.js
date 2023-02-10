/* Tutorial 4
   Exercise 2 JavaScript code
   -- Following Day
*/
console.log("Tran's Output from Tutorial 4 Exercise 3");
day = prompt("Please enter a day of the week (three letters, lowercase):")
if (day === day.toLowerCase()) {
   if (day.length === 3) {
      switch (day) {
         case "sun":
            console.log(`You entered: ${day}`);
            console.log("The following day is: mon")
            break;
         case "mon":
            console.log(`You entered: ${day}`);
            console.log("The following day is: tue")
            break;
         case "tue":
            console.log(`You entered: ${day}`);
            console.log("The following day is: wed")
            break;
         case "wed":
            console.log(`You entered: ${day}`);
            console.log("The following day is: thu")
            break;
         case "thu":
            console.log(`You entered: ${day}`);
            console.log("The following day is: fri")
            break;
         case "fri":
            console.log(`You entered: ${day}`);
            console.log("The following day is: sat")
            break;
         case "sat":
            console.log(`You entered: ${day}`);
            console.log("The following day is: sun")
            break;
      }
   }
   else {
      console.log("Invalid input. Please enter exactly three letters.")
   }
}
else {
   console.log("Invalid input. Please enter three lowercase letters.")
}
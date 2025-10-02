//Name : Mohamed Hussien Khalil
//Task 9: Conditional Execution
/*Dec: Ask the user to enter their age.
 Print:"Child" if age < 13.
 "Teenager" if 13 ≤ age ≤ 19.
 "Adult" if age ≥ 20
*/
let age = prompt("enter a number");
if (age < 13) console.log("Child");
else if (13 <= age && age <= 19) console.log("Teenager");
else if (age >= 20) console.log("Adult");
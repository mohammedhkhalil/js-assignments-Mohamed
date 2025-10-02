//Name : Mohamed Hussien Khalil
//Bonus 1: Calculator
/*Dec: Build a simple program that asks the user for two numbers and an operator 
(+ , -, *, /) and prints the result.
*/

let num1 = Number(prompt("enter the 1st number")),
  num2 = Number(prompt("enter the 2nd number"));
let operator = prompt("choose the operator (+ , -, *, /)");

if (operator == "+") console.log(num1 + num2);
else if (operator == "-") console.log(num1 - num2);
else if (operator == "*") console.log(num1 * num2);
else if (operator == "/") console.log(num1 / num2);

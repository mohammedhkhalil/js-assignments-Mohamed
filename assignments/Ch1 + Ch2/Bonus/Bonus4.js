//Name : Mohamed Hussien Khalil
//Bonus 4:  Minimum Number Finder
/*Ask the user to enter 3 numbers.
 Print the smallest number.
*/

let a = prompt("enter the 1st number");
let b = prompt("enter the 2nd number");
let c = prompt("enter the 3rd number");

if(a<=b && a<=c) console.log(a);
else if(c<=b && c<=a) console.log(c);
else console.log(b);
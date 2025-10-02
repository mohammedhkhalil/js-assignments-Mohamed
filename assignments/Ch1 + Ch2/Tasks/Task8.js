//Name : Mohamed Hussien Khalil
//Task 8: Chessboard (Dynamic)
/*Dec: Create a variable size .
 The program should print a grid according to the value of size (e.g., 4×4 or 10×10).
*/

let size = prompt("enter a number");
for(let i=0; i<size; ++i)
  console.log('#'.repeat(size))
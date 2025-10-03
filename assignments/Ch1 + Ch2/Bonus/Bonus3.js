//Name : Mohamed Hussien Khalil
//Bonus 3:  Palindrome Checker
/*Ask the user to enter a word.
 Print true if the word is a palindrome (e.g., "level"), 
 otherwise print false .
*/

let word = prompt("write a word");
let check = 1;
for(let i = 0, j = word.length-1; i<word.length/2 ;++i, --j){
  if(word[i]!=word[j]){
    check = 0; 
    break;
  }
}
if(check) console.log("true");
else console.log("false");
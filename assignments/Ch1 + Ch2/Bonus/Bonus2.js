//Name : Mohamed Hussien Khalil
//Bonus 2: Multiplication Table
/*Dec: Print the multiplication table from 1 to 10 using nested loops
*/

for(let i=1; i<=10; ++i){
  let row="";
  for(let j=i; j<=10; ++j){
    row+=i+"*"+j+"="+i*j+" ... ";
  }
  console.log(row);
}

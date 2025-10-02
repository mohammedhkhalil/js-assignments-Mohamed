//Name : Mohamed Hussien Khalil
//Task 6: FizzBuzz
/*Dec: Print numbers from 1 → 100.
 Replace: Numbers divisible by 3 with "Fizz" .
 Numbers divisible by 5 with "Buzz" .
 Numbers divisible by both 3 and 5 with "FizzBuzz" .
*/

for (let i = 1; i <= 100; ++i) {
  if (i % 5 == 0 && i % 3 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

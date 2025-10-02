//Name : Mohamed Hussien Khalil
//Task 5: Looping a Triangle
/*Dec: Print the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
*/

for (let i = 0; i < 7; ++i) {
  for (let j = 0; j <= i; ++j) {
    console.log("#".repeat(j));
  }
}

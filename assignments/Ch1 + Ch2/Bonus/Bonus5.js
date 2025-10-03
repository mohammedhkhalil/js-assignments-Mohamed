//Name : Mohamed Hussien Khalil
//Bonus 5:  Pattern – Pyramid 
/* Print an inverted pyramid like this:
 #####
 ####
 ###
 ##
 #
*/

let s = 5;
for(let i=s; i>0; --i){
  console.log('#'.repeat(i));
}
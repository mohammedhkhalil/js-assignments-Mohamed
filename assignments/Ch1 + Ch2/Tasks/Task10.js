//Name : Mohamed Hussien Khalil
//Task 10: Custom Pattern
/*Dec: Ask the user to choose a shape:
 Triangle
 Square
 Ask for the number of rows.
 Print the chosen shape using 
# 
*/
let shape = prompt("Choose a shape\n\t 1-Triangle\n\t 2-Square");
shape.toLowerCase();
if (shape != "triangle" && shape != "square")
  shape = prompt(
    "some missing characters, plz choose again\n\t 1-Triangle\n\t 2-Square"
  );

let hight = 0,
  width = 0;
if (shape == "triangle") {
  hight = prompt("enter the hight");
  width = prompt("enter the width");
} else if (shape == "square") {
  hight = prompt("enter the hight");
  width = hight;
}
for (let i = 0; i < hight; ++i) {
    if (i == 0 || i == hight - 1) console.log("#".repeat(width));
    else console.log("#", " ".repeat(width - 4), "#");
}

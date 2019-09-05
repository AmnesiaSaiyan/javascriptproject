let space1 = "o";
let space2 = "o";
let space3 = "o";
let space4 = " ";
let space5 = " ";
let space6 = " ";
let space7 = " ";
let space8 = " ";
let space9 = " ";


console.log("   |   |   ");
console.log(`${space1}  | ${space2} | ${space3}   `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(`${space4}  | ${space5} | ${space6}   `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(`${space7}  | ${space8} | ${space9}   `);
console.log("   |   |   ");

if (space1 == 'o' && space2 == 'o' && space3 == 'o'){
    console.log("player wins")
} else {
    console.log("player loses")
}
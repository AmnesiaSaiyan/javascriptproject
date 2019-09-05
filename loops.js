//counting from zero to 9
/*
for( i = 0 ; i < 10 ; i++){
    console.log(i);
}
*/

/*
//counting down from 9 to 0
for( i = 9 ; i > -1 ; i--){
    console.log(i);
}
*/

/*
let favouriteDrinks = ["Coke", "Pepsi", "Fanta"];

console.log(favouriteDrinks[0]);
console.log(favouriteDrinks[1]);
console.log(favouriteDrinks[2]);
*/

/*
//array with for loop
let favFilms = ["Ready Player One", "Goonies", "Ghostbusters", "LOTR", "Hobbit"];

favFilms.splice(5, 1, "Star Trek")
favFilms.splice(6, 1, "World War Z")

for (filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    console.log(favFilms[filmIndex]);
}
let requestedFilm = "Ghostbusters";
const checkForFilm = (requestedFilm) =>{
} 
if (favFilms[2] == requestedFilm){
    console.log("Yay it's Ghostbusters")
}
else ;{
    console.log("Boo, We Want Ghostbusters")
}
*/

let number = 50;
let currentnumber = 0;
 while(currentnumber != 50){
     console.log(currentnumber);
     currentnumber = Math.floor(Math.random()*50) +1;
 }
console.log(currentnumber);
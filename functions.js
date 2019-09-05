/*
const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}

pressGrindBeans ();
*/


/*
const pressThatButton = () => {
    console.log("Get That Button Pressed!!")
}

pressThatButton ();
*/
/*
const leaveTheRoom = () => {
    console.log("Get Out!");
}

leaveTheRoom ();
*/


/*
let coffeeIsGrinding = true;

const pressGrindBeans = () => {
if (coffeeIsGrinding) {
    console.log("Stopping the grind");
    coffeeIsGrinding = false;
} else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding = true;   }
}

pressGrindBeans();
pressGrindBeans();
*/


/*
let cashWithdrawal = (amount, accnum) => {
    console.log(`withdrawal ${amount} from ${accnum}`)
}
cashWithdrawal (10, 76543)
cashWithdrawal (20, 76543)
*/
/*
const takeOrder = (size, drinkType) => {
    console.log(`Order recieved: ${size} ${drinkType}. Thank you`);
}

takeOrder("Large","Latte");
*/
/*
let Markacc = 50449921;

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawal(300, Markacc);

const whichAcc = (acc) => {
    console.log(`the account number is ${acc}`);
}
whichAcc(Markacc);
*/
/*
const addUp =(num1, num2) =>{
    return num1 + num2;
}

console.log(addUp(7,3));
console.log(addUp(2,5));
*/

/*
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFahrenheit(15) + "°F")
*/

/*
let minus = (fahrenheight) => {
    return fahrenheight - 32
}
let inCelsius = (fahrenheight) => {
    return Math.floor(minus(fahrenheight) * 5/9)
}
console.log(`the tempterature in celsius is ${inCelsius(70)}`)
*/

/*
let orderCount = 0;
const takeOrder = (topping, size, crust) => {
    console.log(`Orderded a ${size} inch pizza with ${topping} and ${crust} crust`);
    orderCount++;
    console.log(orderCount);
}

takeOrder("pineapple", "12", "Deep Pan");
*/

/*
let balance = 5000
//let accnum = 777
//let pin = 1234

const cashWithdrawal = (accnum, pin, amount) => {
    
if (pin == 1234 && amount >= balance){
    console.log(`withdraw ${amount} from account ${accnum}`);
}

else if (pin != 1234 || amount <= balance){
    console.log("Unable to withdraw funds");
}
}
cashWithdrawal(777, 1234 , 5001)
*/


let orderCount = 0;
const takeOrder = (topping1, topping2, topping3, topping4, topping5, sauce) => {
    console.log(`Ordered a sandwich with ${topping1}, ${topping2}, ${topping3}, ${topping4}, ${topping5} and a little ${sauce}`);
    orderCount++;
    console.log(orderCount);
}

takeOrder("ham", "cheese", "bacon", "tomato","onion", "mayo");
takeOrder("beef", "cheese", "peppers", "salami", "chicken", "bbq sauce")
takeOrder("bacon", "lettuce", "tomato", "onion", "cheese", "salad cream")
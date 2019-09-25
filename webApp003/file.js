console.log("Hello World!");

//var UserAge = prompt("How old are u?");

//console.log("Your age is " + (2019 - UserAge));

var nombre = prompt("Product Name:");
var price = prompt("Product Price:");

var total = parseFloat(price) + (price * 0.16);
console.log(nombre + " price: " + (total.toFixed(2)));
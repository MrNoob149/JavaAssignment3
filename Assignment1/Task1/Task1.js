'use strict'; 
let a = parseInt(prompt("Enter your number: "))
let converted = ((a*9/5)+32)
document.querySelector("#task1").innerHTML = "The converted temperature is " + converted

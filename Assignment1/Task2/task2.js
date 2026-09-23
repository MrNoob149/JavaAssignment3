'use strict'; 
let x1 = parseInt(prompt("Enter your number x1: "))
let x2 = parseInt(prompt("Enter your number x2: "))
let y1 = parseInt(prompt("Enter your number y1: "))
let y2 = parseInt(prompt("Enter your number y2: "))
let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
document.querySelector("#task2").innerHTML = "The converted temperature is " + distance

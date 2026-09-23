'use strict'; 
let a = parseInt(prompt("Enter your first side: "))
let b = parseInt(prompt("Enter your second side: "))
let c = parseInt(prompt("Enter your third side: "))

if (a == b && a == c && b == c) { 
    document.querySelector("#task3").innerHTML = "This triangle is an equilateral" 
}
else if (a == b || a == c || b == c ) { 
    document.querySelector("#task3").innerHTML = "This triangle is an isosceles"
} 
else { 
    document.querySelector("#task3").innerHTML = "This triangle is a scalene"
}

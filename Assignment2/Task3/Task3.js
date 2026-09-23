'use strict';

const numbers = [];
while (true) {
    let number = prompt("Enter a number (or 'done' to finish): ");
    if (number === "done") {
        break;
    }
    numbers.push(parseInt(number));
}
const evenNumber = [];
for (let number of numbers) { 
    if (number % 2 == 0 ) { 
        evenNumber.push(number)
    }        
}
document.querySelector("#task3").innerHTML += "Even Numbers: " + evenNumber + "<br>"      

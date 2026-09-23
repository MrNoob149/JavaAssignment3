'use strict'; 
let number = parseInt(prompt("Enter your number: "))
if (number < 0) { 
        document.querySelector("#task6").innerHTML = "Error, number must be positive"
} else { 
    let result = "multiplation table <br>"
    for (let i = 1; number >= i; i++) { 
        for (let j = 1; number >= j; j++) { 
            let product = i * j; 
            result = result + product + " "
        }
        result = result + "<br>"
    } 
    document.querySelector("#task6").innerHTML = result;

}
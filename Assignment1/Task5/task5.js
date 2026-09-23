'use strict'; 
let number = parseInt(prompt("Enter your number: "))
if (number < 0) { 
        document.querySelector("#task5").innerHTML = "Error, number must be positive"
} else { 
    let result = 0 

    for (let i = 1; number >= i; i++) {
        result = result + i;
    }
    document.querySelector("#task5").innerHTML ="The result is " + result;
}


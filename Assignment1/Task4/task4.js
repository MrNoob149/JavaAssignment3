'use strict'; 
let grade = parseInt(prompt("Enter your score: "))

if (0 < grade && grade < 39) { 
    document.querySelector("#task4").innerHTML = "Your grade is 0"
}
else if (40 < grade && grade < 51) { 
    document.querySelector("#task4").innerHTML = "Your grade is 1"
}
else if (52 < grade && grade < 63) { 
    document.querySelector("#task4").innerHTML = "Your grade is 2"
}
else if (64 < grade && grade < 75) { 
    document.querySelector("#task4").innerHTML = "Your grade is 3"
}
else if (76 < grade && grade  < 87) { 
    document.querySelector("#task4").innerHTML = "Your grade is 4"
}
else if (88 < grade && grade  < 100) { 
    document.querySelector("#task4").innerHTML = "Your grade is 5"
}

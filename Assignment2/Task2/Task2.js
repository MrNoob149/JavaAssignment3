const numbers = [];

for (let i = 1; i <=5 ; i++) { 
    let number = parseInt(prompt("Enter your numbers: "));
    numbers.push(number);
}
document.querySelector("#task2").innerHTML = "Numbers: " + numbers + "<br>"

let searchNumber = parseInt(prompt("Enter a number to search: "));

    if (numbers.includes(searchNumber)) { 
        document.querySelector("#task2").innerHTML += "Number " + searchNumber + " is found in the array"
    } else { 
        document.querySelector("#task2").innerHTML += "Number " + searchNumber + " is not found in the array<br>";
    }

numbers.pop();
document.querySelector("#task2").innerHTML += "Updated numbers: " + numbers + "<br>"

const sort = numbers.sort();
document.querySelector("#task2").innerHTML += "Sorted Numbers: " + sort + "<br>"
const numbers = [2, 45, 31, 4, 50]
console.log(numbers)
let sort = numbers.sort();
console.log(sort)

function sortArray(numbers, order) { 

    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    } 
    else if (order === "desc") {
        numbers.sort((a, b) => b - a);
    }

    return numbers;
}

console.log("Ascending:", sortArray(numbers, "asc"));
console.log("Descending:", sortArray(numbers, "desc"));

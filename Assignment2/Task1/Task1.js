const fruits = ["banana", "apple", "orange", "grape" , "kiwi"];
const vegetables = [];
document.querySelector("#task1").innerHTML = "Fruits: " + fruits + "<br>"
let length = fruits.length
document.querySelector("#task1").innerHTML += "Length: " + length + "<br>"
let index2 = fruits[2]
document.querySelector("#task1").innerHTML += "Element at Index 2: " + index2 + "<br>"
let lastin = fruits[fruits.length -1];
document.querySelector("#task1").innerHTML += "Last emelent of Fruits: " + lastin + "<br>"
for (let i =1; i < 4; i++) { 
    let vegetable = prompt("Enter your vegetable: ");
    vegetables.push(vegetable);
}
document.querySelector("#task1").innerHTML += "Vegetables: " + vegetables + "<br>"
let length2 = vegetables.length
document.querySelector("#task1").innerHTML += "Length of vetetabels: " + length2
const movies = []; 
let amount = parseInt(prompt("How many movies do you want to rate?"))
for (i = 0; i < amount; i++) { 
    let title = prompt("Enter the movie name: ")
    let rating = parseInt(prompt("Enter the rating (1-5):"));
    let movie = { title: title, rating: rating }
    movies.push(movie)
}

movies.sort((a, b) => b.rating - a.rating);
document.querySelector("#task6").innerHTML += "Sorted Movies:<br>";
for (let movie of movies) {
    document.querySelector("#task6").innerHTML += movie.title + " - Rating: " + movie.rating + "<br>";
}
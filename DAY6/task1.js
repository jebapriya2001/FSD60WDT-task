// a) and b) Constructor for the class Movie
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    // c) Method getPG
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// d) Code to create an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of the class and getPG method
const movies = [
    new Movie("The Lion King", "Disney", "PG"),
    new Movie("Inception", "Warner Bros", "PG-13"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("Jumanji", "Columbia Pictures", "PG"),
    casinoRoyale
];

const pgMovies = Movie.getPG(movies);

console.log("PG Movies:");
pgMovies.forEach(movie => console.log(movie.title));


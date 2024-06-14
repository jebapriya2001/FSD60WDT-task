//a) and b) Constructor for the class Movie

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
// c) Method getPG

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
//d) Code to create an instance of Movie

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


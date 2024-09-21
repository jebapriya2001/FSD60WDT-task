class Ride {
    constructor(kilometer = 0, pricePerKilometer = 0) {
        this.kilometer = kilometer;
        this.pricePerKilometer = pricePerKilometer;
    }

    setKilometer(kilometer) {
        this.kilometer = kilometer;
    }

    setPricePerKilometer(pricePerKilometer) {
        this.pricePerKilometer = pricePerKilometer;
    }

    calculatePrice() {
        return this.kilometer * this.pricePerKilometer;
    }

    toString() {
        return `Ride[kilometer=${this.kilometer}, pricePerKilometer=${this.pricePerKilometer}]`;
    }
}

// Example usage:
const ride = new Ride();
ride.setKilometer(15); // Setting the distance to 15 kilometers
ride.setPricePerKilometer(2); // Setting the price per kilometer to $2

const totalPrice = ride.calculatePrice();
console.log(`The total price of the ride is $${totalPrice.toFixed(2)}`); // The total price of the ride is $30.00
console.log(ride.toString()); // Ride[kilometer=15, pricePerKilometer=2]
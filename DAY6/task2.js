class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const defaultCircle = new Circle();
console.log(defaultCircle.toString());  // Circle[radius=1, color=red]

const customCircle = new Circle(2.5, "blue");
console.log(customCircle.toString());  // Circle[radius=2.5, color=blue]
console.log(`Area: ${customCircle.getArea()}`);  // Area: 19.634954084936208
console.log(`Circumference: ${customCircle.getCircumference()}`);  // Circumference: 15.707963267948966
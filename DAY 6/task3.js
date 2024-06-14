class Person {
    constructor(firstName, lastName, age, gender, address, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    toString() {
        return `Person[Full Name=${this.getFullName()}, Age=${this.age}, Gender=${this.gender}, Address=${this.address}, Phone Number=${this.phoneNumber}, Email=${this.email}]`;
    }
}

// Example usage:
const person = new Person("John", "Doe", 30, "Male", "1234 Elm Street", "123-456-7890", "john.doe@example.com");
console.log(person.toString());  // Person[Full Name=John Doe, Age=30, Gender=Male, Address=1234 Elm Street, Phone Number=123-456-7890, Email=john.doe@example.com]

// Do the below programs in Arrow functions

// a) print odd nubers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = array.filter(num => num % 2 !== 0);

console.log(oddNumbers);


// b) convert all the strings to tittle caps in a string array

let stringArray = ["hello world", "javascript is fun", "title case conversion"];

let titleCasedArray = stringArray.map(str => 
  str.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ')
);

console.log(titleCasedArray);

//c) sum of all numbers in an array

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

// d) return all the prime numbers in an array

let numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let primeNumbers = numArray.filter(num => isPrime(num));

console.log(primeNumbers);


//e) return all the palidromes in an array

let stringarray = ["racecar", "hello", "level", "world", "madam"];

let palindromes = stringArray.filter(str => str === str.split('').reverse().join(''));

console.log(palindromes);
// a) print odd number in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = arr.filter(function(num) {
  return num % 2 !== 0;
});
console.log(oddNumbers);

(function() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let oddNumbers = arr.filter(function(num) {
    return num % 2 !== 0;
  });
  console.log(oddNumbers);
})();

//b) convert all the string to tittle caps in string array

let stringarray = ["hello world", "javascript is fun", "title case conversion"];
let titleCasedArray = stringArray.map(function(str) {
  return str.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
});
console.log(titleCasedArray);

(function() {
  let stringArray = ["hello world", "javascript is fun", "title case conversion"];
  let titleCasedArray = stringArray.map(function(str) {
    return str.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
  console.log(titleCasedArray);
})();

// c)sum of all numbers in an array

let numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);

(function() {
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = numArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  console.log(sum);
})();

//d) return all the prime number in an array

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let primeNumbers = numArray.filter(function(num) {
  return isPrime(num);
});

console.log(primeNumbers);

(function() {
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let primeNumbers = numArray.filter(function(num) {
    return isPrime(num);
  });

  console.log(primeNumbers);
})();


// e) return all the palindromes in an array

let stringArray = ["racecar", "hello", "level", "world", "madam"];

let palindromes = stringArray.filter(function(str) {
  return str === str.split('').reverse().join('');
});

console.log(palindromes);


(function() {
  let stringArray = ["racecar", "hello", "level", "world", "madam"];

  let palindromes = stringArray.filter(function(str) {
    return str === str.split('').reverse().join('');
  });

  console.log(palindromes);
})();

//f) return median of two sorted array of the same size

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let findMedian = function(arr1, arr2) {
  let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  let mid = Math.floor(mergedArray.length / 2);
  
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
};

console.log(findMedian(arr1, arr2));

(function(arr1, arr2) {
  let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  let mid = Math.floor(mergedArray.length / 2);
  
  let median;
  if (mergedArray.length % 2 === 0) {
    median = (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    median = mergedArray[mid];
  }
  
  console.log(median);
})([1, 3, 5], [2, 4, 6]);

//g) remote duplicate from an array

let array = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10, 10];

let removeDuplicates = function(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

let uniqueArray = removeDuplicates(array);
console.log(uniqueArray);

(function(arr) {
  let uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(uniqueArray);
})([1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10, 10]);

//h) rotate an array by K times

let K = 3;

let rotateArray = function(arr, k) {
  k = k % arr.length;  // Adjust k to be within the range of array length
  return arr.slice(k).concat(arr.slice(0, k));
};

let rotatedArray = rotateArray(array, K);
console.log(rotatedArray);

(function(arr, k) {
  k = k % arr.length;  // Adjust k to be within the range of array length
  let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  console.log(rotatedArray);
})([1, 2, 3, 4, 5, 6, 7], 3);










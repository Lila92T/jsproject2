// ========= STRING ========= //
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("lila"));

function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("lila talbi"));

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("lila talbi"));

// ========= ARRAY ========= //
const numbers = [10, 3, 25, 7, 1, 12];

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(findMax(numbers));
console.log(findMin(numbers));
console.log(sumArray(numbers));

// ========= MATH ========= //
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(4));

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(11));
console.log(isPrime(12));

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log(fibonacci(6));

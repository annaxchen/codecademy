// Function below calculates the factorial for num, by turning num into an array (arr) using the .reduce method for array objects
const factorial = (num) => {
  arr = [];
  for (let i = 0; i<num; i++) {
  arr.push(num-i)};
  fact = arr.reduce((accumulator, currentValue) => {return accumulator * currentValue;});
  return fact};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(6));
console.log(factorial(3))

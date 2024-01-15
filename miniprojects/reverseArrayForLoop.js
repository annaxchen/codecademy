// Function creates new array (reversedArray) of parameter (sentence) using a For loop.
const reverseArray = (sentence) => {
  const reversedArray = [];
  //cycles through array of strings (sentence) counting down until i=0
  for (let i = sentence.length-1; i >= 0; i--) {
    reversedArray.push(sentence[i])}
    return reversedArray
  };

// Tests function on strings
const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));

// Tests function on numbers
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));

//can achieve this by using built-in method .reverse() which skips all of this

//can also use .unshift method which pushes elements to the beginning of the array

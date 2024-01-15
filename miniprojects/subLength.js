// Function below compares an array of strings and filters to create new array of just characters that match 'char'
const charCheck = (arr, char) => arr.filter((filChar) => filChar === char);

// Function turns string into an array, and finds the difference between the first and second matching character (char).
const subLength = (string, char) => {
  let word = [];
  for (let i=0; i< string.length; i++) {
    word.push(string[i])
  };
  let charFirst = word.findIndex((x) => x === char);
  let charLast = word.lastIndexOf(char);
  diff = charLast - charFirst+1;
  charsInWord = charCheck(word, char);
  //returns zero if there are more than 2 of variable char
  if (charsInWord.length > 2 || charsInWord.length < 2) {diff = 0}; 
  return diff
}

//testing a few words
console.log(subLength('funny', 'n'))
console.log(subLength('momentum', 'm'));
console.log(subLength('uncopyrightable', 'u'));

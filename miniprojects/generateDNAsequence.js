//This project generates a 15-base sequence for an an organism 
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
};

//returns object with properties specimenNum and dna 
const pAequorFactory = (num, arr) => { 
  let object = {
    specimenNum: num,
    dna: arr,
    //simulates any mutates that may occur
    mutate: function() {
     arr[Math.floor(Math.random()*15)] = returnRandBase()
    },
    //.compareDNA method allows us to compare DNA and return percent% that is identical
    compareDNA: function(pAequor) {
      let identical = 0; 
      for (let i=0; i<15; i++) {
        if(pAequor[i] === arr[i]) {identical++; }
      };
      let identicalPercent = identical / 15 *100;
      return `specimen ${object.specimenNum} & specimen ${pAequor.specimenNum} have ${identicalPercent}% DNA in common`
    },
    //The specimen has a higher likelihood of survival if DNA is > 60% C or G bases, so we calculate if the specific array or sequence has a higher likelihood of survival with this method 
      willLikelySurvive: function () {
      let countCG = 0
      for (let i=0; i<15; i++) {
        if(arr[i] === 'C' || arr[i] === 'G') {countCG++};
      let percentCG = countCG / 15;
      if (countCG > .6) {return true} else {return false}

      }
    }
    }
  return object
}

//Test runs
//console.log(returnRandBase())
//console.log(mockUpStrand())
//console.log(pAequorFactory(1, mockUpStrand()))
//console.log(pAequorFactory(2, mockUpStrand()))

let storedArray = [];
let idCounter = 1;
//creates 30 instances of DNA where likelihood survival is higher using a While Loop
const create30instances = () => {
  while (storedArray.length<30) {
    let strand = (pAequorFactory((idCounter), mockUpStrand()));
    if (strand.willLikelySurvive() === true && storedArray.length < 30){
    storedArray.push(strand);
    idCounter++
  }
}}


create30instances()

//returns 30 instances of the specimen
console.log(storedArray);
//checks that count = 30
console.log(storedArray.length);




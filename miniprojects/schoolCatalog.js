//Creates a parent class School that uses name of school, level and number as base inputs for Primary, Middle and High school.
class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents}
  get name(){
    return this._name
  }
  get level(){
    return this._level
  }
  set numberOfStudents(newNumberOfStudents){
    if(typeof newNumberOfStudents === 'number'){
      this._numberOfStudents = newNumberOfStudents
    }
    else {console.log('Invalid input: numberOfStudents must be set to a Number.')}
  }
  get numberOfStudents(){
    return this._numberOfStudents
  }
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeachers){
    let i = Math.floor(Math.random()*(substituteTeachers.length-1))
    return substituteTeachers[i]
  }
}

class Primary extends School {
  constructor(name, level, numberOfStudents, pickUpPolicy){
    super(name, level, numberOfStudents);
    this._pickUpPolicy = pickUpPolicy 
  }
  get pickUpPolicy(){
    return this._pickUpPolicy
  }
}

class Middle extends School{
  constructor(name, level, numberOfStudents){
    super(name, level, numberOfStudents);
  }}

class High extends School{
  constructor(name, level, numberOfStudents, sportsTeams){
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    console.log(this._sportsTeams)
  }
}

//Testing the classes created above via new instances, using getters, etc.
//creating a new instance for primary school Lorraine Hansbury
const lorraineHansbury = new Primary('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

//pick a substitute teacher using static function of parent class
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new High('Al E. Smith', 'high', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

alSmith.sportsTeams


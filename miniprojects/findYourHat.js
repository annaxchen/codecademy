const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

/*
Wins by finding their hat.
Loses by landing on (and falling in) a hole.
Attempts to move “outside” the field.
*/

//function to choose between characters of field
//() -> string (hold, field or path)
function chooseCharacter() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return hole;
        case 1:
            return fieldCharacter;
        case 2:
            return pathCharacter;
    }
}

//function to choose coordinates of the hat
// (num, num, array) -> array
function chooseHatLocation(height, width, field) {
    let heightCoordinates = Math.floor(Math.random() * height);
    let widthCoordinates = Math.floor(Math.random() * width);
    field[heightCoordinates][widthCoordinates] = hat;
    return field;
}

class Field {
    //(field) -> field
    constructor(field) {
        this.field = field;
    }
    //() -> undefined
    print() {
        this.field.map(row=> row.join(('')))
    }
    //static bc doesn't need to be tied to any instance
    static generateField(height, width) {
        //creating grid of rows
        let field = [];
        for (let i = 0; i < height; i++) {
            //creating grid of columns
            let subField = [];
            for (let i = 0; i < width; i++) {
                subField.push(chooseCharacter())
            }
            field.push(subField);
        }
        field = chooseHatLocation(height, width, field);
        return field
    }
}

//class property -> undefined
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]); 

// -> prints entire field
myField.print();

// generates a field using static method
console.log(Field.generateField(3, 3));

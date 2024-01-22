//creating a parent class that contains overlapping datapoints
class Media {
  constructor(creator, title, length, ratings) {
    this._creator = creator;
    this._title = title;
    this._length = length;
    this._isChecked = false;
    this._ratings = ratings;
  }
  get title() {
    return this._title;
  }
  get isChecked() {
    return this._isChecked;
  }
  get ratings() {
    return this._ratings;
  }
  getAverageRating() {
    let sumOfRatings =
      this._ratings.reduce((accumulator, rating) => accumulator + rating, 0);
    let averageRating = sumOfRatings / this._ratings.length;
    return averageRating;
  }
  toggleCheckOutStatus(trueOrFalse) {
    this._isChecked = trueOrFalse;
  }
  addRating(review) {
    this._ratings.push(review);
  }
}

//Book subclass that converts creator->author and length->pages
class Book extends Media {
  constructor(creator, title, length, ratings) {
    super(creator, title, length, ratings);
    this._author = creator;
    this._pages = length;
  }
  get author() {
    return this._creator;
  }
  get pages() {
    return this._length;
  }
}

//Movie subclass that converts creator->director and length->runTime
class Movie extends Media {
  constructor(creator, title, length, ratings) {
    super(creator, title, length, ratings);
    this._director = creator;
    this._runTime = length
  }
  get director() {
      return this._creator;
    }
    get runTime() {
      return this._length;
    }
}

class CD extends Media {
  constructor(creator, title, songs, ratings) {
    super(creator, title, ratings);
    this._artist = creator;
    this._songs = songs;
  }
  get artist() {
    return this._creator;
  }
  get songs() {
    return this._songs;
  }
}

//testing each class and methods
const newBook = new Book("author", "title", "pages", [5, 5, 10]);
console.log(newBook);

const newMovie = new Movie("director", "title", "runTime", [5, 5, 10]);
console.log(newMovie);

const newCD = new CD("artist", "title", ['song1', 'song2', 'song3'], [5, 5, 10]);

console.log(newCD);
newBook.toggleCheckOutStatus(false);
console.log(newBook);
console.log(newBook.getAverageRating());
console.log(newBook.ratings.length);
console.log(newBook.isChecked);

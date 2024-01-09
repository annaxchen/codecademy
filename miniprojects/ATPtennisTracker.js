const team = {
  _players: [
    { firstName: "Carlos", lastName: "Alcaraz", age: 22 },
    { firstName: "Roger", lastName: "Federer", age: 41 },
    { firstName: "Novak", lastName: "Djokovic", age: 32 },
  ],
  _games: [{ opponent: "Jannik Sinner", teamPoints: 3, opponentPoints: 2 }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    this._players.push({
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    });
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    });
  },
};

team.addPlayer("Daniel", "Medvedev", 32);

console.log(team._players);
console.log(team._games)

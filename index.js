const team = {
  _players: [
    {firstName: 'Bill', lastName: 'Bob', age: 42},
    {firstName: 'Bob', lastName: 'Bill', age: 35},
    {firstName: 'Bobby', lastName: 'Boil', age: 54},
  ],
  _games: [
    {opponent: 'Life', teamPoints: 10, opponentPoints: 100},
    {opponent: 'Depression', teamPoints: 15, opponentPoints: 150},
    {opponent: 'Mental Health', teamPoints: 5, opponentPoints: 20},
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      OppononentPoints: newOpponentPoints,
    };
    this.games.push(game)
  }
}; 

team.addPlayer('bugs', 'bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);


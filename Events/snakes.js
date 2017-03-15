function SnakesLadders() {

    this.board = new Array(100);

    for (var index = 0; index < 100; index++) {
        this.board[index] = "*";
    }
    // ladders
    this.board[1] = 37;
    this.board[6] = 13;
    this.board[7] = 30;
    this.board[14] = 25;
    this.board[35] = 43;
    this.board[20] = 41;
    this.board[27] = 83;
    this.board[50] = 66;
    this.board[70] = 90;
    this.board[77] = 97;
    this.board[86] = 93;

    //  snakes
    this.board[15] = 5;
    this.board[45] = 24;
    this.board[48] = 10;
    this.board[61] = 18;
    this.board[63] = 59;
    this.board[73] = 52;
    this.board[88] = 67;
    this.board[91] = 87;
    this.board[94] = 74;
    this.board[98] = 79;
    this.player1 = {
        name: "Player 1",
        position: 0
    };
    this.player2 = {
        name: "Player 2",
        position: 0
    };
    this.playerOnTurn = this.player1;


};

SnakesLadders.prototype.play = function(die1, die2) {
    var sumOfDies = die1 + die2;

    this.playerOnTurn.position += sumOfDies;
    if(this.playerOnTurn.position>100){
      this.playerOnTurn.position-=this.playerOnTurn.position-100;
    }
    if (this.board[this.playerOnTurn.position - 1] !== "*") {
        this.playerOnTurn.position = this.board[this.playerOnTurn.position - 1] + 1;
    }
    var gameOver=false;
    if (this.playerOnTurn.position == 100) {
      if(!gameOver){
        gameOver=true;
        return this.playerOnTurn.name + " wins! \nGame over!";
      }
      else {
        return "Game over!";
      }
    }
    if (die1 !== die2) {
        if (this.playerOnTurn == this.player1) {

            this.playerOnTurn = this.player2;
        } else {
            this.playerOnTurn = this.player1;
        }
    }


    if (this.playerOnTurn == this.player1 && die1 !== die2) {
        return (this.player2.name + " is on square " + this.player2.position);
    } else if (this.playerOnTurn == this.player2 && die1 !== die2) {
        return (this.player1.name + " is on square " + this.player1.position);
    } else if (die1 == die2) {
        return (this.playerOnTurn.name + " is on square " + this.playerOnTurn.position);
    }

}

var game = new SnakesLadders();
console.log(game.play(6, 6));
console.log(game.play(1, 2));
console.log(game.play(4, 3));
console.log(game.play(6, 4));
console.log(game.play(3, 4));
console.log(game.play(16, 18));
console.log(game.play(1, 2));
console.log(game.play(1, 1));

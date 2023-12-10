/*Coding Steps:
FINAL JS WAR ASSIGNMENT
For the final project you will be creating an automated version of the classic card game WAR!
There are many versions of the game WAR. In this version there are only 2 players.
 - You do not need to do anything special when there is a tie in a round.


Think about how you would build this project and write your plan down.
Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
 - You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.
The completed project should, when executed, do the following:
 -- Deal 26 Cards to each Player from a Deck of 52 cards.
 -- Iterate through the turns where each Player plays a Card.
 -- The Player who played the higher card is awarded a point.
 -- Ties result in zero points for both Players.
 -- After all cards have been played, display the score and declare the winner.
 */

/*Classes:
Card
Deck
Player
Methods and Properties?
*/

/*Composition. A standard 52-card French-suited deck - 13 ranks in each of the four suits: clubs (♣), diamonds ( ), hearts (♥) and spades (♠).
 */
class Card {
  constructor(suitsData, valuesData, ranksData) {
    this.suit = suitsData;
    this.value = valuesData;
    this.rank = ranksData;
  }
}

class Player {
  constructor() {
    this.playerDeck = [];
    this.playerScore = 0;
  }

  showScore() {
    return this.playerScore;
  }
}

class Deck {
  constructor() {
    this.mainDeck = [];
    this.player1Cards = [];
    this.player2Cards = [];
  }

  createDeck() {
    let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let ranks = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.mainDeck.push(new Card(suits[i], ranks[j], j + 2));
      }
    }
  }

  shuffle() {
    for (let i = 0; i < this.mainDeck.length; i++) {
      let tempPlaceHold = this.mainDeck[i];

      let randomCardAtIndex = Math.floor(Math.random() * i);
      this.mainDeck[i] = this.mainDeck[randomCardAtIndex];
      this.mainDeck[randomCardAtIndex] = tempPlaceHold;
    }
  }

  deal() {
    this.player1Cards = this.mainDeck.slice(0, 26);
    this.player2Cards = this.mainDeck.slice(26, 52);
  }

  showTopCard() {
    console.log(this.player1Cards);
  }
}

class Game {
  constructor() {
    this.deck = new Deck();
    this.player1Cards;
    this.player2Cards;
    this.p1 = new Player();
    this.p2 = new Player();
  }

  startGame(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.deck.createDeck();
    this.deck.shuffle();
    this.deck.deal();
    this.playHand();
  }

  playHand() {
    console.log(
      `${this.player1} is Player 1`
    ); /*This concats the code so the right name is placed with the right player*/
    console.log(`${this.player2} is Player 2`);
    console.log(`\nStart Game`);

    while (
      this.deck.player1Cards.length !== 0 &&
      this.deck.player2Cards.length !== 0
    ) {
      this.player1Card = this.deck.player1Cards.pop();
      console.log(`\n${this.player1}'s Card`, this.player1Card);
      this.player2Card = this.deck.player2Cards.pop();
      console.log(`${this.player2}'s Card`, this.player2Card);
      /*This above logs out the two players names and the cards that were drawn*/
      if (this.player1Card.value > this.player2Card.value) {
        this.p1.playerScore++;
        console.log(`${this.player1} wins this round!`);
      } else if (this.player1Card.value < this.player2Card.value) {
        this.p2.playerScore++;
        console.log(`${this.player2} wins the round...`);
      } else {
        console.log(`Tie: No score received this round`);
      } /*This above is the functions that decide who wins the round based on the value and rank of the card they drew*/
      console.log(`${this.player1}'s Score:`, this.p1.showScore());
      console.log(`${this.player2}'s Score:`, this.p2.showScore());
      console.log(`Round Is Over`);
    }

    if (this.p1.playerScore > this.p2.playerScore) {
      console.log(`${this.player1} wins the game!`);
    } else if (this.p1.playerScore < this.p2.playerScore) {
      console.log(`${this.player2} wins the game...`);
    } else {
      console.log("Tie Score: No Points");
    }
  }
}

let myGame = new Game();
myGame.startGame("Delvonte", "Guest");
/*The two players in this game are myself and a guest*/

let deckOfCards = [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]
//array to hold used cards 
let cardsUsed = [];

//Game Class
class Game { 
  //give access to the deck
	constructor(cards) {
	   this.cards = deckOfCards
  }

  //making a draw function 
  draw(player) {

    for(let i=0; i<3; i++) {
      //drawing random card from the deck
      let randomCard = deckOfCards.splice(Math.floor(Math.random() * deckOfCards.length), 1)[0]; 
      player.cards.push(randomCard);

      console.log(`${player.name} has been dealt ${randomCard.name}`)
      cardsUsed.push(randomCard.name)
    }
  }

  //making playing card function 
  playCard(player) {

    let playersChoice = player.cards.splice(Math.floor(Math.random() * player.cards.length),1)[0];
    console.log(`${player.name} has played ${playersChoice.name} with damage of ${playersChoice.damage}`)

    return playersChoice
  }

  battle(player1, player2) {

    let x = this.playCard(firstPlayer);
    let y = this.playCard(secondPlayer);

    //game logic
    if (x.damage > y.damage) {
      player1.points += 1
      console.log('========Player 1 WINS========')
    } else if (x.damage < y.damage) {
      player2.points += 1 
      console.log('========Player 2 WINS========')
    } else {
      console.log('===========TIE GAME==========')
    }
  }

  countRounds() {
    for(let i = 0; i < 3; i++) {

      this.draw(firstPlayer)
      this.draw(secondPlayer)

      for(let j = 0; j < 3; j++) {

        this.battle(firstPlayer, secondPlayer)

      }

      if(firstPlayer.points > secondPlayer.points) {
        firstPlayer.rounds++
        console.log('********Player 1 WINS THE ROUND********')
      } else if (firstPlayer.points < secondPlayer.points) {
        secondPlayer.rounds++
        console.log('********Player 2 WINS THE ROUND********')
      } else {
        console.log('**********ROUND TIE**********')
      }
    }

    if(firstPlayer.rounds > secondPlayer.rounds) {
      console.log('>>>>>>>>Player 1 WINS GAME<<<<<<<<')
    } else if (firstPlayer.rounds < secondPlayer.rounds) {
      console.log('>>>>>>>>Player 2 WINS GAME<<<<<<<<')
    } else {
      console.log('NO WINNER. TIE GAME')
    }
  }
}

//Player Class
class Player { 

  constructor(player) {
    this.name = player,
    this.cards = [],
    this.points = 0,
    this.wins = 0,
    this.rounds = 0
  }
}

let firstPlayer = new Player("Player One")
let secondPlayer = new Player("Player Two")

// for(let i = 0; i < 3; i++) {
//   let game1 = new Game(deckOfCards);

//   game1.draw(firstPlayer);
//   game1.draw(secondPlayer);

//   game1.battle(firstPlayer, secondPlayer);
// }

console.log("NEW GAME")
let game1 = new Game();
game1.countRounds();








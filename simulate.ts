import { Card, Deck } from './card';
import { Game, GameState } from './game';
import { xorRNG } from "./random";

function simulate(game: Game) {
    // Game loop
    while (this.state === GameState.RUNNING) {
        this.nextRound(xorRNG.randomInt(0, 2) ? "pay" : "take");
        
        console.log(`TURN ${game.turn}`);
        console.log(`CURRENT PLAYER: Player ${game.currentPlayer + 1}`);
        console.log(`CURRENT CARD: ${game.currentCard!.value} with ${game.currentCard!.tokens} tokens`)
        
        for (let i = 0; i < game.players.length; i++) {
            console.log(`PLAYER ${i + 1}'s TOKENS: ${game.players[i].tokens}`);
            console.log(`PLAYER ${i + 1}'s DECK:`);
            console.log(game.players[i].hand.toString());
        }
    }
}

const game = new Game();
simulate(game);
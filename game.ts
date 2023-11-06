import { Card, Deck } from './card.ts';
import { Player } from './player.ts';
import { xorRNG } from './random.ts';

class Game {
    constructor(
        private deck: Deck,
        private players: Player[],
        private round: number = 1, // 1-indexed
        private currentPlayer: number = 0, // Index of the players array
        private currentCard: Card = null,
    ) {}

    nextRound() {
        const player = this.players[this.currentPlayer];
        
        if (xorRNG.randomInt(0, 2) && player.payToken()) { // Chooses to skip turn & can pay token
            
        } else { // Takes card

        }
    }

    nextCurrentPlayer() {
        this.currentPlayer = (this.currentPlayer + 1) % this.players.length
    }
}
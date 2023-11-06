import { Card, Deck } from './card.ts';
import { Player } from './player.ts';
import { xorRNG } from './random.ts';

export enum GameState {
    RUNNING = "run",
    END = "end",
}

export class Game {
    constructor(
        private deck: Deck,
        private players: Player[],
        private turn: number = 0,
        private currentPlayer: number = 0, // Index of the players array
        private currentCard: Card | null = null, // No current card at start
        public state: GameState = GameState.RUNNING,
    ) {}

    private nextRound() {
        this.checkEnd();
        // Update state variables
        this.turn++;
        const player = this.players[this.currentPlayer];
        this.currentCard = this.deck.draw();

        // Randomize player's move
        if (xorRNG.randomInt(0, 2) && player.payToken()) { // Chooses to skip turn & can pay token
            this.currentCard?.addToken();
            this.nextCurrentPlayer();
        } else { // Takes card
            player.addToHand(this.currentCard!)
        }
    }

    private nextCurrentPlayer() {
        this.currentPlayer = (this.currentPlayer + 1) % this.players.length
    }

    private checkEnd() {
        if (this.deck.length === 0) this.state = GameState.END;
    }
}
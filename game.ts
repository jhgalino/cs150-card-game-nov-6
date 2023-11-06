import { Card, Deck } from './card.ts';
import { Player } from './player.ts';
import { xorRNG } from './random.ts';

export enum GameState {
    RUNNING = "run",
    END = "end",
}

export class Game {
    constructor(
        min: number = 3, 
        max: number = 35, 
        removedCards: number = 9, 
        startingTokens: number = 11, 
        numPlayers: number = 2,
        private deck: Deck = new Deck(min, max),
        public players: Player[] = [],
        private turn: number = 0,
        private currentPlayer: number = 0, // Index of the players array
        private currentCard: Card | null = null, // No current card at start
        public state: GameState = GameState.RUNNING,
    ) {
        if (numPlayers < 2) {
            throw new Error("Minimum of 2 players");
        }

        for (let i = 0; i < numPlayers; i++) {
            players.push(new Player(startingTokens))
        }

        deck.shuffle();
        for (let i = 0; i < removedCards; i++) {
            deck.draw();
        }
    }

    public nextRound() {
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

    public checkEnd() {
        if (this.deck.length === 0) this.state = GameState.END;
    }

    public determineWinners() {
        const scores: number[] = this.players.map((player) => player.calculateScore());
        const max: number = scores.reduce((curr, next) => curr > next ? curr : next);
        const winners: number[] = [];
        for (const [i, score] of scores.entries()) {
            if (score === max) winners.push(i);
        } 

        return winners;
    }
}
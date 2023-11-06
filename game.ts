import { Card, Deck } from './card';
import { Player } from './player';
import { xorRNG } from './random';

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
        numPlayers: number = 3,
        public deck: Deck = new Deck(min, max),
        public players: Player[] = [],
        public turn: number = 0,
        public currentPlayer: number = 0, // Index of the players array
        public currentCard: Card | null = null, // No current card at start
        public state: GameState = GameState.RUNNING,
    ) {
        if (numPlayers < 2) {
            throw new Error("Minimum of 2 players");
        }

        for (let i = 0; i < numPlayers; i++) {
            players.push(new Player(startingTokens))
        }

        deck.shuffle();
        if (removedCards > deck.length) throw new Error(`Cannot remove ${removedCards} cards from the deck of ${deck.length}!`);
        for (let i = 0; i < removedCards; i++) {
            deck.draw()
        }
    }

    public nextRound(move: string) {
        this.checkEnd();
        // Update state variables
        this.turn++;
        const player = this.players[this.currentPlayer];
        this.currentCard = this.deck.draw();

        if (move === "pay" && player.payTokenTo(this.currentCard)) { // Chooses to skip turn & can pay token
            this.nextCurrentPlayer();
        } else { // Takes card
            player.addToHand(this.currentCard!)
        }

        this.checkEnd();
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
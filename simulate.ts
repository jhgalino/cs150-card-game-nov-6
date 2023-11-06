import { Card, Deck } from './card.ts';
import { Game, GameState } from './game.ts';

function simulate(game: Game) {
    // Game loop
    while (this.state === GameState.RUNNING) {
        this.checkEnd();
        this.nextRound();
    }
}
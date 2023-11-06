import { Card, Deck } from './card';
import { Game, GameState } from './game';

function simulate(game: Game) {
    // Game loop
    while (this.state === GameState.RUNNING) {
        this.nextRound();
        this.checkEnd();
    }
}
import { Card, Deck } from './card.ts';
import { Game } from './game.ts';

simulate(game: Game) {
    // Game loop
    while (this.state === GameState.RUNNING) {
        this.checkEnd();
        this.nextRound();
    }
}
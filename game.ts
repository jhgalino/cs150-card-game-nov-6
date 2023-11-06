import { Card, Deck } from './card.ts';
import { Player } from './player.ts';

class Game {
    constructor(
        private deck: Deck,
        private players: Player[],
        private round: number = 0,
    ) {}

    nextRound() {
        
    }
}
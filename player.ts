import { Card, Deck } from 'card.ts'

class Player {
    constructor(
        private tokens: number,
        private deck: Deck,
    ) {}

    payToken(card: Card) {
        this.tokens -= 1;
        card.addToken();
    }
}
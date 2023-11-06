import { Card, Hand } from './card.ts'

export class Player {
    constructor(
        private tokens: number = 0,
        private hand: Hand,
    ) {}

    payToken(n: number = 1): number {
        if (this.tokens < n) return 0;
        this.tokens -= n;
        return n;
    }

    addToHand(card: Card) {

    }
}
import { Card, Hand } from './card.ts'

export class Player {
    constructor(
        private tokens: number,
        private hand: Hand,
    ) {}

    payToken(n: number = 1) {
        this.tokens -= n;
    }

    addToHand(card: Card) {

    }
}
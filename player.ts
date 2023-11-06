import { Card, Collection } from './card.ts'

class Hand extends Collection {
    totalValue() {
        return this.cards.reduce((score, card) => score += card.value, 0)    
    }

    add(card: Card) {
        this.cards.push()
    }
}

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
        this.hand.add(card);
    }
}
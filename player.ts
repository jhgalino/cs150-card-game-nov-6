import { Card, Collection } from './card.ts'

class Hand extends Collection {
    constructor() {
        super();
    }

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
        private hand: Hand = new Hand(),
    ) {}

    payTokenTo(n: number = 1, card: Card): number {
        if (this.tokens < n) return 0;
        this.tokens -= n;
        card.addToken(1)
        return n;
    }

    addToHand(card: Card) {
        this.hand.add(card);
    }

    calculateScore(): number {
        return this.hand.totalValue() - this.tokens;
        
    }
}
import { Card, Collection } from './card'

export class Hand extends Collection {
    constructor() {
        super();
    }

    totalValue() {
        let totalScore = 0;
        if (this.getContiguousValues().length == 0) {
            for (let card of this.cards) {
                totalScore += card.getValue;
            }
            // return this.cards.reduce((acc, card) => acc + card.getValue, 0);
        } else {
            for (let i = 0; i < this.cards.length; i++) {
                if (!this.getContiguousValues().some(r => i > r.start && i <= r.end)) {
                    totalScore += i;
                }
            }
        }
        return totalScore;
    }

    add(card: Card) {
        this.cards.push(card);
    }

    toString() {
        return this.cards.join(", ");
    }

    private sort() {
        this.cards.sort((a, b) => a.getValue - b.getValue);
    }

    getContiguousValues() {
        const contiguousValues: {start: number, end: number}[] = [];
        this.sort();
        for (let i = 0; i < this.cards.length; i++) {
            let start = 0, end = 0, inContiguousZone = false;
            // if the next card is 1 more than the current card, set `start`
            // to the index of the current card
            if (this.cards[i+1].getValue - this.cards[i].getValue == 1) {
                start = i;
                inContiguousZone = true;
                console.log('start, end, inccontig', start, end, inContiguousZone);
            } else {
                if (inContiguousZone) {
                    inContiguousZone = false;
                    end = i;
                    contiguousValues.push({
                        start,
                        end,
                    });
                }
                console.log('start, end, inccontig', start, end, inContiguousZone);
            }
        }
        return contiguousValues;
    }
}

export class Player {
    constructor(
        public tokens: number = 0,
        public hand: Hand = new Hand(),
    ) {}

    payTokenTo(card: Card, n: number = 1): number {
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
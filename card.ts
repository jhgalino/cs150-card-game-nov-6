import { xorRNG } from "./random";

export class Card {
    public tokens: number = 0;

    constructor(
        private value: number,
    ) {}  

    addToken(n: number = 1) {
        this.tokens += n;
        return n;
    }

    get getValue() {
        return this.value;
    }
}

export class Collection {
    constructor(
        protected cards: Card[] = []
    ) {}
}

export class Deck extends Collection {
    constructor(min: number, max: number) {
        super();
        for (let i = min; i <= max; i++) {
            this.cards.push(new Card(i))
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.abs(xorRNG.random()) * (i + 1));
            
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw() {
        const card = this.cards.pop();
        if (card == undefined) {
            throw new Error("Deck is empty!");
        }
        return card;
    }

    get length() {
        return this.cards.length;
    }
}
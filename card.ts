class Card {
    constructor(
        private value: number,
        private tokens: number = 0,
    ) {}  

    addToken(n: number = 1) {
        this.tokens += n;
        return n;
    }
}

class Collection {
    constructor(
        protected cards: Card[] = []
    ) {}
}

class Deck extends Collection {
    constructor() {
        super();
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
          }
    }

    draw() {
        return this.cards.pop();
    }

    get length() {
        return this.cards.length;
    }

    static Generate(min, max: number) {
        
    }
}
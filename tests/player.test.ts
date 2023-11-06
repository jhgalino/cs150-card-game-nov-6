import { expect, test } from 'vitest';
import { Player } from '../player';
import { Card, Deck } from '../card';
import { Game } from '../game';

test("Player successfully places a token on card", () => {
    const testPlayer = new Player(11); // 11 tokens
    const testCard = new Card(3);

    expect(testPlayer.payTokenTo(testCard)).toBe(1);

    expect(testPlayer.tokens).toBe(10);
    expect(testCard.tokens).toBe(1);
});

test("Tokenless player tries to place token on card", () => {
    const testPlayer = new Player(0);
    const testCard = new Card(3);

    expect(testPlayer.payTokenTo(testCard)).toBe(0);

    expect(testPlayer.tokens).toBe(0);
    expect(testCard.tokens).toBe(0);
});

test("Player takes two cards in succession", () => {
    const game = new Game();
});

test("Deck is created successfully", () => {
    const testDeck = new Deck(3, 35);

    expect(testDeck.draw()).toBe(new Card(3));
})
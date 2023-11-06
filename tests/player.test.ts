import { expect, test } from 'vitest';
import { Player, Hand } from '../player';
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

    game.nextRound("take");
    game.nextRound("take");

    const testHand = new Hand();
    testHand.add(new Card(8));
    testHand.add(new Card(27));

    expect(game.players[0].hand).toStrictEqual(testHand);
    expect(game.players[1].hand).toStrictEqual(new Hand());
});

test("Player draws the last card of the deck", () => {
    const game = new Game(3, 5, 1); // Only 2 cards

    expect(testDeck.draw()).toBe(new Card(35));
})

test("Scoring of unsorted hand with one sequence of at least length 5 without unrelated cards with nonzero tokens", () => {
    const testHand = new Hand();
    testHand.add(new Card(7));
    testHand.add(new Card(8));

    expect(testHand.getContiguousValues.length).toBe(7);
})
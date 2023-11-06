import { expect, test } from 'vitest';
import { Player } from '../player';
import { Card } from '../card';

test("Player successfully places a token on card", () => {
    const testPlayer = new Player(11); // 11 tokens
    const testCard = new Card(3);

    expect(testPlayer.payTokenTo(testCard)).toBe(1);

    testPlayer.payTokenTo(testCard);

    expect(testPlayer.tokens).toBe(10);
    expect(testCard.tokens).toBe(1);
})

test("Tokenless player tries to place token on card", () => {
    const testPlayer = new Player(0);
    const testCard = new Card(3);

    expect(testPlayer.payTokenTo(testCard)).toBe(0);

    testPlayer.payTokenTo(testCard);

    expect(testPlayer.tokens).toBe(0);
    expect(testCard.tokens).toBe(0);
})
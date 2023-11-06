import { expect, test } from 'vitest';
import { Player } from '../player';
import { Card } from '../card';

test("Player successfully places a token on card", () => {
    const testPlayer = new Player();
    const testCard = new Card(3);

    testPlayer.payTokenTo(testCard);
})

test("Tokenless player tries to place token on card", () => {
    const
})
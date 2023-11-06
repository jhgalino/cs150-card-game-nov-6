import { expect, test } from 'vitest';
import { Player, Hand } from './player';
import { Card, Deck } from './card';
import { Game } from './game';

const game = new Game();

game.nextRound("take");
game.nextRound("take");

const testHand = new Hand();
testHand.add(new Card(3));
testHand.add(new Card(4));

console.log(game.players[0].hand)
console.log(game.players[1].hand)
console.log(testHand);
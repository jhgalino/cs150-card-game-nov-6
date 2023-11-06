import { Player, Hand } from './player';
import { Card, Deck } from './card';

const testHand = new Hand();
testHand.add(new Card(7));
testHand.add(new Card(8));

console.log(testHand.getContiguousValues())

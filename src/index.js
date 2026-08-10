import { parseScore, parseScores } from './parser.js';

console.log(parseScore(' 88 '));
console.log(parseScores([
  { label: 'first', value: ' 90 ' },
  { label: 'second', value: 'bad' }
]));

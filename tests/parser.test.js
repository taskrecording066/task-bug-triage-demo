import test from 'node:test';
import assert from 'node:assert/strict';
import { parseScore, parseScores } from '../src/parser.js';

test('parseScore trims and clamps values', () => {
  assert.equal(parseScore(' 88 '), 88);
  assert.equal(parseScore('200'), 100);
  assert.equal(parseScore('bad'), 0);
});

test('parseScores transforms entries safely', () => {
  const res = parseScores([{ label: 'first', value: ' 90 ' }, { label: 'second', value: 'oops' }]);
  assert.deepEqual(res, [
    { label: 'first', score: 90 },
    { label: 'second', score: 0 }
  ]);
});

import { knightMoves } from './moves.js';

test('simple move', () => {
  expect(knightMoves([0, 0], [1, 2])).toEqual([[0, 0], [1, 2]]);
});

test('short path', () => {
  const result = knightMoves([0, 0], [3, 3]);
  expect(result[0]).toEqual([0, 0]);
  expect(result[result.length - 1]).toEqual([3, 3]);
  expect(result.length).toBeLessThanOrEqual(4);
});

test('reverse path', () => {
  const result = knightMoves([3, 3], [0, 0]);
  expect(result[0]).toEqual([3, 3]);
  expect(result[result.length - 1]).toEqual([0, 0]);
});
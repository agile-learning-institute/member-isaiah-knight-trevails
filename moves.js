function knightMoves(start, end) {
  const directions = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1],
  ];

  const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(p => console.log(p));
      return path;
    }

    for (const [dx, dy] of directions) {
      const next = [current[0] + dx, current[1] + dy];
      if (isValid(next) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([next, [...path, next]]);
      }
    }
  }

  return null;
}
import { knightMoves } from './moves.js';

document.getElementById('move-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const start = document.getElementById('start').value.split(',').map(Number);
  const end = document.getElementById('end').value.split(',').map(Number);
  const path = knightMoves(start, end);
  const output = document.getElementById('output');
  output.textContent = `You made it in ${path.length - 1} moves!\n` + path.map(p => `[${p}]`).join('\n');
});
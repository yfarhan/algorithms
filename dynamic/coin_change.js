const { pprint2D } = require('../util');
const coins = [1, 5, 10];
const N = 5;

function makeChange(coins, n) {
  let k = [];

  for (let i = 0; i <= coins.length; ++i) {
    k[i] = new Array(n + 1).fill(0);
  }

  for (let x = 1; x < k.length; ++x) {
    let coin = typeof coins[x - 1] === 'undefined' ? 0 : coins[x - 1];

    for (let y = 0; y < n + 1; ++y) {
      if (x === 0) {
        k[x][y] = 0;
      } else if (y === 0) {
        k[x][y] = 1;
      } else {
        k[x][y] = k[x - 1][y] + (k[x][y - coins[x - 1]] || 0);
      }

      pprint2D(k);
    }
  }

  debugger;
}

makeChange(coins, N);

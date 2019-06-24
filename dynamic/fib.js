/**
 * Fib by Recurrsion
 * O(2^n)
 * 0 , 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
 * @param {number} n
 */
function recurrfib(n) {
  if (n < 2) {
    return n;
  } else {
    return recurrfib(n - 1) + recurrfib(n - 2);
  }
}

// console.log(recurrfib(10));

/**
 * Dynamic programming
 * @param {number} n
 */
function dynFib(n) {
  const val = [];

  for (let i = 0; i <= n; ++i) {
    val[i] = 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  } else {
    val[1] = 1;
    val[2] = 2;
    for (let i = 3; i <= n; ++i) {
      val[i] = val[i - 1] + val[i - 2];
    }

    return val[n - 1];
  }
}

// console.log('dynFib(10) :', dynFib(10));

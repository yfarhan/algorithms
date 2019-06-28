const steps = [1, 2];
const N = 6;

function countSteps(steps) {
  /**
   * the number of steps taken to get to 0 is 0, i.e do nothing.
   * the number of steps taken to get to 1 is 1.
   */
  let k = [1, 1];
  for (let i = 2; i <= N; ++i) {
    k[i] = k[i - 1] + k[i - 2];
  }

  return k;
}

let result = countSteps(steps);
console.log('result :', result);

debugger

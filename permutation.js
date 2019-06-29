const seq = [6, 2, 1, 5, 4, 3, 0];

/**
 * Returns the next Permutation sequence
 * @param {array[numbers]} seq
 */
function nextSeq(seq) {
  let currIndex = null;
  let pool = [];

  for (let i = seq.length - 1; i >= 0; --i) {
    if (seq[i - 1] < seq[i]) {
      currIndex = i;
      break;
    }
  }

  let currentElm = seq[currIndex - 1];
  pool = seq.slice(currIndex - 1).sort();
  let nextElm = pool.find((e, i) => e > currentElm);
  seq[currIndex - 1] = nextElm;

  pool = pool.filter(e => e != nextElm);
  for (let i = pool.length - 1; i >= 0; --i) {
    seq[currIndex + i] = pool[i];
  }

  return seq;
}

let result = nextSeq(seq);
console.log('result :', result);

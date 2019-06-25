function max(a, b) {
  return a > b ? a : b;
}

function knapSack(capacity, size, value, num) {
  let k = [];

  for (let i = 0; i <= capacity + 1; ++i) {
    k[i] = [];
  }

  for (let i = 0; i <= num; ++i) {
    for (let w = 0; w <= capacity; ++w) {
      if (i == 0 || w == 0) {
        k[i][w] = 0;
      } else if (size[i - 1] <= w) {
        k[i][w] = max(value[i - 1] + k[i - 1][w - size[i - 1]], k[i - 1][w]);
      } else {
        k[i][w] = k[i - 1][w];
      }
    }
  }
}

/**
 * Pretty prints twodimentional array
 * @param {array[]} arr
 */
function pprint(arr) {
  for (let i = 0; i <= arr.length - 1; ++i) {
    console.log(arr[i].toString());
  }
  console.log('---- ----');
}

knapSack(16, [3, 4, 7, 8, 9], [4, 5, 10, 11, 13], 5);

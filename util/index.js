'use strict';

/**
 * Pretty prints twodimentional array
 * @param {array[]} arr
 */
function pprint2D(arr) {
  for (let i = 0; i <= arr.length - 1; ++i) {
    console.log(arr[i].toString());
  }
  console.log('---- ----');
}

module.exports = {
  pprint2D
};

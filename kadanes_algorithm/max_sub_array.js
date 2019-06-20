function maxSubArray(arr) {
  let local_max = 0;
  let global_max = -Infinity;
  let fromIndex = 0;
  let toIndex = 0;

  for (const [i, v] of arr.entries()) {
    /**
     * Decide if adding to prev makes sense or
     * start with current elm.
     */
    if (Math.max(...[v, v + local_max]) === v) {
      fromIndex = i;
    }
    local_max = Math.max(...[v, v + local_max]);
    /**
     * current calculated max is greatest them set global.
     */
    if (local_max > global_max) {
      global_max = local_max;
      toIndex = i;
    }
  }

  console.log(
    `Max subarray is from ${fromIndex}, ${toIndex} with sum of ${global_max}`
  );
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

maxSubArray(arr);

const arr = [5, 3, 2, 10, 1, 9, 8, 6, 4, 7];

const heapSort = array => {
  snapshot(array);
  array = createMaxHeap(array);
  let heapSize = array.length;
  let temp;
  for (let i = array.length - 1; i > 0; i--) {
    temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapSize--;
    heapify(array, 0, heapSize);
  }
  snapshot(array);
  return array;
};

const createMaxHeap = array => {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

const heapify = (array, index, heapSize) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  let largestValueIndex = index;

  if (heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left;
  }

  if (heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right;
  }

  if (largestValueIndex !== index) {
    const temp = array[index];
    array[index] = array[largestValueIndex];
    array[largestValueIndex] = temp;
    heapify(array, largestValueIndex, heapSize);
    snapshot(array);
  }
};

function snapshot(arr) {
  console.log(arr);
}

heapSort(arr);
debugger;

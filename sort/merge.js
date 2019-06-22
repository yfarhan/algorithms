function merge(arr1, arr2) {
  let arr = [];
  console.log('merge :', arr1.toString(), arr2.toString());

  while (arr2.length > 0) {
    let curr = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
    arr.push(curr);
  }

  return arr.concat([...arr1, ...arr2]);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    console.log('smallest :', arr.toString());
    return arr;
  } else {
    let len = arr.length;
    let a = arr.slice(0, len / 2);
    let b = arr.slice(len / 2, len);

    console.log('split into :', a.toString(), ' | ', b.toString());
    return merge(mergeSort(a), mergeSort(b));
  }
}

const array = [10, 30, 20, 40, 0, 80];
let result = mergeSort(array);
console.log(result);

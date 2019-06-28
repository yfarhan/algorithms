const N = 3;

function genParams(left, right, str = '') {
  if (left > right) {
    return '';
  }

  if (left == 0) {
    str += fillRightParans(right);
    console.log('===> ', left, right, str);
    return str;
  } else {
    console.log('str :', str);
    genParams(left - 1, right, str + '(');
    genParams(left, right - 1, str + ')');
  }
}

genParams(3, 3);
debugger;

function fillRightParans(right, str = '') {
  for (let i = 0; i < right; ++i) {
    str += ')';
  }
  return str;
}

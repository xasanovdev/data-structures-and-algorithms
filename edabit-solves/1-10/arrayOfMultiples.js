function arrayOfMultiples(num, length) {
  let arr = [];
  let primary = num;
  for (let i = 0; i < length; i++) {
    arr.push(num);
    num = primary + num;
  }
  return arr;
}

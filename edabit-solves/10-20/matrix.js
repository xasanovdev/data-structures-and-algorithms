function matrix(x, y, z) {
  let arr = [];
  for (let i = 0; i < x; i++) {
    arr.push([]);
    let j = 0;
    while (y > j) {
      arr[i].push(z);
      j++;
    }
  }
  return arr;
}

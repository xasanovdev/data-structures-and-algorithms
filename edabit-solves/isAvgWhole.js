function isAvgWhole(arr) {

  let summ = arr.reduce((item, acc) => acc + item, 0) / arr.length;

  return summ % 1 === 0;
  
}

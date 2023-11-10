function diceGame(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1]) return 0;
    else {
      summ = summ + arr[i][0] + arr[i][1];
    }
  }
  return summ;
}

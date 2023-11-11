function mean(num) {
  let count = 0;
  let summ = 0;
  while (num >= 1) {
    summ = summ + (num % 10);
    num = Math.floor(num / 10);
    count++;
  }

  return Math.floor(summ / count);
}

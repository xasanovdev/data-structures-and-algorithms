function calculateLosses(obj) {
  let summ = 0;
  if (Object.keys(obj).length === 0) return 'Lucky you!';
  for (let key in obj) {
    summ = summ + obj[key];
  }
  return summ;
}

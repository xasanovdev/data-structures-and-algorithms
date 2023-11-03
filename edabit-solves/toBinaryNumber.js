// 1

function binary(decimal) {
  let result = '';
  if (decimal == 0) {
    result = '0';
  }
  while (decimal > 0) {
    result += decimal % 2;
    decimal = Math.floor(decimal / 2);
  }
  return result.split('').reverse().join('');
}
// 2

function binary(decimal) {
  return decimal.toString(2);
}

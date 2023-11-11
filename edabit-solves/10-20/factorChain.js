function factorChain(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % arr[i - 1] !== 0) {
      return false;
    }
  }
  return true;
}

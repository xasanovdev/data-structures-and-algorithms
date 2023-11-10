function allTruthy(...args) {
  let arr = [...args];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) return false;
  }
  return true;
}

function hashPlusCount(str) {
  let hash = 0;
  let plus = 0;
  if (str.length == 0) return [hash, plus];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '#') hash++;
    else plus++;
  }

  return [hash, plus];
}

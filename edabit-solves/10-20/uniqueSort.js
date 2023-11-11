//1
function uniqueSort(arr) {
  let set = new Set(arr);
  return Array.from(set).sort((a,b) => a - b);
}

//2

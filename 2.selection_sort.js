function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j > 0; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

bubbleSort([19, 44, 38, 5, 47, 15]);

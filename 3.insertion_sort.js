function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      } else break;
    }
  }
  return arr;
}

insertionSort([24, 3, 45, 1, 43, 67, 77]);

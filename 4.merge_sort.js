function mergeSort(arr1, arr2) {
  let newSortedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      newSortedArray.push(arr2[j]);
      j++;
    } else {
      newSortedArray.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    newSortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newSortedArray.push(arr2[j]);
    j++;
  }

  return newSortedArray;
}

function mergeSortRecurssion(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return mergeSort(left, right);
}

mergeSortRecurssion([2, 4, 6, 1, 3, 5, 7]);

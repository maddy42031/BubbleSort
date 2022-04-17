function bubbleSort(array) {
  let i, j, temp;
  let arrLen = array.length; // Get the length of an array
  let a = [...array]; // Store the array in a varialbe using spread operator

  for (i = 1; i < arrLen; i++) {
    for (j = 0; j < arrLen - 1; j++) {
      if (a[j + 1] < a[j]) {
        temp = a[j + 1];
        a[j + 1] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}

let array = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9];
let sortedArray = bubbleSort(array);
console.log(sortedArray);

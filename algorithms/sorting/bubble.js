const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // once the biggest number reaches the end, start the loop over until the array is sorted
    for (let j = 0; j < length; j++) {
      // check to see if if the index of j is greater than the next index, if it is have
      // have them switch places. Once the index reaches the end or a value that is bigger than it
      // end the loop.
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

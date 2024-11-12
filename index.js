// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function insertionSortEvensFirst(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    let j = i - 1;

    // Move elements that are greater than `current` or are odd (while `current` is even

    while (
      j >= 0 &&
      ((arr[j] % 2 !== 0 && current % 2 === 0) || // `current is even, arr[j] is odd
        (arr[j] % 2 === current % 2 && arr[j] > current))
    ) {
      // Both are even or both are odd, sort ascending
      arr[j + 1] = arr[j];

      j--;
    }

    // Place `current in its correct location

    arr[j + 1] = current;
  }

  return arr;
}

const inputArray = [6, 3, 4, 7, 2, 1]
console.log("Evens First Sorted Array:", insertionSortEvensFirst(inputArray))
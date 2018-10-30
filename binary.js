'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temp;
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[k])
        k = j;
    }
    temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  }
  return arr
}

function binary_search(search, array) {
  // Your searching code
  let right = array.length - 1
  let left = 0
  while (right >= left) {
    let middle = Math.floor((right + left) / 2)
    let mid = array[middle]
    if (mid == search) {
      return middle
    } else if (search > mid) {
      left = left + 1
    } else {
      right = middle - 1
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
// var testArrayGenap = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function ownSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    debugger
    let temp = 0
    debugger
    for (let j = i; j > 0; j--) {
      debugger
      if (arr[j] < arr[j - 1]) {
        debugger
        temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
        debugger
      }
    }
  }
  debugger
  return arr
}

function binary_search(search, array) {
  let low = 0
  let height = array.length - 1
  while (low <= height) {
    let mid = Math.floor((low + height) / 2)
    if (search === array[mid]) {
      return mid
    }
    else if (search > array[mid]) {
      low = mid + 1
    }
    else {
      height = mid - 1
    }

  }
  return -1;
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

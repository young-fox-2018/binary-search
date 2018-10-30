'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    let temp = 0
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let low = 0
  let high = array.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (array[mid] == search) {
      return mid
    }
    else if (array[mid] < search) {
      low = mid + 1
    }
    else {
      high = mid - 1
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
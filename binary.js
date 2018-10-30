'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = 0
    for (let j = i; j >= 0; j--) {
      if (arr[j] <= arr[j-1]) {
        tmp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = tmp
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  let isFound = false
  let index = 0
  while (isFound === false) {
    let mid = Math.floor(array.length/2)
    if (search >= array[Math.floor(array.length/2)]) {
      array = array.slice(Math.floor(array.length/2))
      index += mid
    }
    else {
      array = array.slice(0,Math.floor(array.length/2))
    }
    if (array.length === 1) {
      isFound = true
      if (array[0] === search) {
        return index
      }
      else {
        return -1
      }
    }
  }
  
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(90, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}

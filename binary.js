'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //debugger
    let sorting = arr[i]
    //debugger
    let comparing = i - 1
    //debugger
    while (comparing >= 0 && arr[comparing] > sorting) {
      //debugger
      arr[comparing + 1] = arr[comparing]
      //debugger
      comparing--
      //debugger
    }
    //debugger
    arr[comparing + 1] = sorting
  }
  // debugger
  return arr
}

function binary_search(search, array) {
  let high = array.length - 1
  let low = 0
  while (low <= high) {
    let mid = Math.floor((high + low) / 2)
    if (array[mid] === search) {
      return mid
    } else if (array[mid] < search) {
      low = mid + 1
    } else if (array[mid] > search) {
      high = mid - 1
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
//debugger
//console.log(arrayGenapSorted)
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }

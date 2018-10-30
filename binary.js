'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0 ; j--) {
      if (arr[j-1] > arr[j]) {
        let bucket = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = bucket
      }
    }
  }
  console.log(arr)
  return arr
}


function binarySearch (search, array) {
  // Your searching code
  let max = array.length-1
  let min = 0
  while(min <= max) {
    let tengah = Math.floor((max+min)/2)
    if (search < array[tengah]) max = tengah - 1
    else if (search > array[tengah]) min = tengah + 1 
    else if (search === array[tengah]) return tengah
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
  // binary_search
// }

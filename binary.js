'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        var temp = arr[j];
        arr[j] = arr[j-1]
        arr[j-1] = temp;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var indexDepan = 0;
  var indexBelakang = array.length;
  var indexTengah = Math.floor((indexBelakang + indexDepan) / 2);
  debugger
  while (array[indexTengah] !== search) {
    if (indexDepan === indexBelakang) {
      return -1
    }
    if (search < array[indexTengah]) {
      indexBelakang = indexTengah-1;
    }
    else {
      indexDepan = indexTengah+1;
    }
    indexTengah = Math.floor((indexBelakang + indexDepan) / 2);
  }
  return indexTengah;
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
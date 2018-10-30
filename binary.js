'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var index = i
    var temp = 0
    for (var j = index; j > 0; j--) {
      if (arr[index -1] > arr[index]) {
        temp = arr[index -1]
        arr[index -1] = arr[index]
        arr[index] = temp
      }
      index = index -1
    }
  }
  return arr
}

function binary_search (search, array) {
  var awal  = 0
  var akhir = array.length -1
  var tengah = Math.floor((awal+akhir)/2)
  while (true) {
    if (search === array[tengah]) {
      return tengah
    }
    else if (awal === tengah || akhir === tengah) {
      return -1
    }
    else {
      if (search > array[tengah]) {
        awal = tengah+1
        tengah = Math.floor((awal+akhir)/2)
      }
      else if(search < array[tengah]) {
        akhir = tengah-1
        tengah = Math.floor((awal+akhir)/2)
      }
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))
//
 module.exports = {
   binary_search
 }

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if(arr[j] < arr[j-1]) {
        var tem = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = tem
      }
    }
    // console.log(arr)
  }
  return arr
}

function binary_search (search, array) {
  
    var indexAwal = 0
    var indexAkhir = array.length
    var indexMid = Math.floor(array.length/2)
  

    while(array[indexMid] !== search) {
      if(indexAkhir === indexAwal) {
        return -1
      }
      if(search > array[indexMid]) {
        indexAwal = indexMid + 1
        indexMid = Math.floor((indexAwal + indexAkhir)/ 2)
      } else if(search < array[indexMid]) {
        indexAkhir= indexMid - 1
        indexMid = Math.floor((indexAwal + indexAkhir)/ 2)
      }
      
    }
    return indexMid
    
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)
// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }

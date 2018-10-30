'use strict'
//NOTE
//TEST CASE GENAP SALAH, HARUSNYA BERJUMLAH GANJIL
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    var index = i
    var temp = 0
    for (let j = index; j >= 0; j--) {
      if (arr[index - 1] > arr[index]) {
        temp = arr[index - 1]
        arr[index - 1] = arr[index]
        arr[index] = temp
      }
      index = index - 1
    }
  }
  return arr
}

function binary_search(search, array) {

  var indexLow = 0
  var indexHigh = array.length - 1
  var indexMid = Math.floor((indexLow + indexHigh) / 2)

  if (array[indexMid] == search) {
    return indexMid
  }


  while (search !== array[Math.floor((indexLow + indexHigh) / 2)]) {
    var valueMid = array[Math.floor((indexLow + indexHigh) / 2)]

    if (valueMid > search) {
      indexMid = Math.floor((indexLow + indexHigh) / 2)
      indexHigh = indexMid - 1

    } else if (valueMid < search) {
      indexMid = Math.floor((indexLow + indexHigh) / 2)
      indexLow = indexMid + 1

    }

    if (search === array[Math.floor(indexHigh / 2)]) {
      return indexMid - 1
    } else if (indexMid == indexHigh || indexMid == indexLow) {
      return -1
    }
  }
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

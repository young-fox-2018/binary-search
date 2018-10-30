'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i = 0; i < arr.length; i++){
    var initial = arr[i]
    var j = i - 1
    while(j >= 0 && arr[j] > initial){
        arr[j+1] = arr[j]
        j -= 1
    }
    arr[j+1] = initial
}
  return arr

}

function binary_search (search, array) {
  // Your searching code
  var awal = 0
  var akhir = array.length-1
  var tengah = Math.round((awal + akhir)/2)
  while(akhir >= awal){
      if(array[tengah] === search){
          return tengah
      }else if(search < array[tengah]){
          akhir = tengah - 1
      }else{
          awal = tengah + 1
      }
      tengah = Math.floor((awal + akhir)/2)
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

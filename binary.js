'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var count, temp

  for(var i=0; i<arr.length; i++){
      count = i
      while(count!==0){
        if(arr[count]<arr[count-1]){
          temp = arr[count-1]
          // console.log("temp",temp)
          arr[count-1] = arr[count]
          // console.log("count-1",temp)
          arr[count] = temp
          // console.log("count-",temp)
          // console.log("after",arr)
        }
        count -= 1
      }
      // console.log(arr)
  }
  return arr
}

function binary_search (search, array) {
  var idxawal = 0
  var idxakhir = array.length
  var idxtengah = Math.floor((idxawal+idxakhir)/2)

  while(array[idxtengah] !== search){
    
    if(idxakhir === idxtengah){
      return -1
    }
    if(array[idxtengah]<search){
      idxawal = idxtengah + 1
      idxtengah = Math.floor((idxawal+idxakhir)/2)
    }
    else{
      idxakhir = idxtengah - 1
      idxtengah = Math.floor((idxawal+idxakhir)/2)
    }
  }

  return idxtengah;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log("genap:",arrayGenapSorted)
console.log("ganjil:",arrayGanjilSorted)

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

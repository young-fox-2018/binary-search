'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var temp
  var idxMin
  for(var i=0;i<arr.length;i++){
    idxMin = undefined // refresh temp & idx
    temp = undefined

    for(var j=i+1;j<arr.length;j++){
      if(temp == undefined){
          temp = arr[j]
          idxMin = j
          // first insert temp & idx
      }else if(temp > arr[j]){
          temp = arr[j]
          idxMin = j
          // insert temp & idx if less than it's before
      }
    }

    if(arr[i]>temp){
      // swap if current number is greater than temp
      arr[idxMin] = arr[i]
      arr[i] = temp
    }
  }

  return arr
}

// function binarySearch(search, arr){

// }


function binary_search (search, array) {
  var idxTerkecil = 0
  var idxTerbesar = array.length-1

  // console.log(array)

  while (idxTerkecil <= idxTerbesar) {
    var idxTengah = Math.floor((idxTerkecil + idxTerbesar) / 2)
    
    
    if (array[idxTengah] === search) {
      return idxTengah
    } else if ( array[idxTengah] > search ) {
      idxTerbesar = idxTengah - 1 
    } else if ( array[idxTengah] < search ) {
      idxTerkecil = idxTengah + 1
    }
    debugger

  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// release 0
console.log('RELEASE 0')
let test_array = [1,2,3,4,5]
console.log(binary_search(3, test_array) === 2) // true

test_array = [13, 19, 24, 29, 32, 37, 43]
console.log(binary_search(3, test_array) === -1) // true

test_array = [100, 120, 130, 135, 150, 170]
console.log(binary_search(135, test_array) === 3) // true



// release 1
// // Driver code
console.log('RELEASE 1')
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// console.log(binary_search(32, [13,19,24,29,32,37,43]))

module.exports = {
  binary_search
}

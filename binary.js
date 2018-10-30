'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

// insertion sort
function ownSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      while (arr[i-1] > arr[i]) { // change > value to change sorting direction
          let temp_arr_i_min = arr[i - 1]; arr[i-1] = arr[i]; arr[i] = temp_arr_i_min; i--;
      }
   }
  return arr
}

function binary_search (search, array) {
  let top = array.length-1
  let low = 0;
  let mid = Math.floor((top + low) / 2)

  while (low <= top) {
       if (search == array[mid]) return mid
       if (search < array[mid]) {
            top = mid - 1
       } else {
            low = mid + 1
       }
       mid = Math.floor((top+low) / 2)
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// Driver code

console.log("array genap: ")
console.log(arrayGenapSorted)
console.log(binary_search(8, arrayGenapSorted ))
console.log(binary_search(10, arrayGenapSorted ))
console.log(binary_search(33, arrayGenapSorted ))

console.log("array ganjil: ")
console.log(arrayGanjilSorted)
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted)) 
console.log(binary_search(2, arrayGanjilSorted)) 

module.exports = {
  binary_search
}

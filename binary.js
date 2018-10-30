'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i = 0; i < arr.length; i++) {
    let index = i

    if(index !== 0) {
      for(let j = index; j > 0; j--) {
        let temp
        if(arr[index] < arr[index-1]) {
          temp = arr[index]
          arr[index] = arr[index-1]
          arr[index-1] = temp
        }
        index = index - 1      
      }
    }

  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let low = 0
  let high = array.length
  let mid = Math.floor((low + high) / 2)

  while(array[mid] !== search) {
      
      if(low === high) {
          return -1
        }
    
      if(array[mid] < search) {
        low = mid + 1
      } else {
        high = mid - 1
      }
      
      mid = Math.floor((low + high) / 2)
      
  }

  return mid
  // return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// console.log(arrayGenapSorted)
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

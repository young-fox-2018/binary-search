'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i = 1; i < arr.length; i++){
    let smallest = arr[i]
    for(let j = i-1; j >= 0; j--){
      if(arr[j] > smallest){
        arr[j+1] = arr[j]
        arr[j] = smallest
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  let low = 0
  let high = array.length-1
  
  while(low <= high){
    let mid = Math.floor((low+high)/2)
    if(search === array[mid]){
      return mid
    }else if(search < array[mid]){
      high = mid -1
    }else{
      low = mid + 1
    }
  } 

  return -1
  // return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted)
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(arrayGanjilSorted)
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}

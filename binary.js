'use strict'

var testArrayGenap = [40, 18, 24, 32, 90, 12, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var temp = 0
  for ( let i = 0; i <arr.length; i++) {
    for ( let j = arr.length; j > 0; j--){
      if (arr[j] < arr[j-1]) {
        temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  let isFound = false
  let midPoint= Math.floor(array.length/2)
  let refMid =  Math.floor(array.length/2)
  let count = 0
  while(isFound===false){
    if(midPoint < 1 && array[0] !==search ||
       midPoint > array.length-2          &&
       array[array.length-1] !==search    ||
       count===5 && array[0] !==search
    ){
      return -1
    }
    count+=1
    refMid=refMid/2
    if(search===array[midPoint]){
      return midPoint
    }else if(search>array[midPoint]){
      midPoint=midPoint+Math.ceil(refMid)
    }else{
      midPoint=midPoint/2
    }
  }
  return '';
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(12, arrayGenapSorted))
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(12, arrayGanjilSorted))
//
// module.exports = {
//   binary_search
// }

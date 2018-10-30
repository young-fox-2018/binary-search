'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  for (var i = 0; i < arr.length; i++){
        var min = 9999999999;
        var index 
        for(var j = i; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                index = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp
        
    }
    return arr
}

function binarySearch (search, array) {
  // Your searching code
  var startInd = 0;
  var midInd = Math.floor(array.length/2);
  var endInd = array.length-1;

  while(array[midInd] !== search && startInd < endInd){
    if (search < array[midInd]){
      endInd = midInd-1;
      midInd = Math.floor((startInd+endInd)/2)
    }else if (search > array[midInd]){
      startInd = midInd + 1;
      midInd = Math.floor((startInd+endInd)/2)
    }
  }
  if(search !== array[midInd]){
    midInd = -1
  }
  return midInd

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// // Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

var testArray = [1,2,3,4,5]
console.log(binarySearch(3, testArray) === 2)

var testArray = [13,19,24,19,32,37,43]
console.log(binarySearch(35, testArray) === -1)

var testArray = [100,120,130,135,150,170]
console.log(binarySearch(135, testArray) === 3)


module.exports = {
  binarySearch
}

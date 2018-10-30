'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {

  for(var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    var firstIndex = i;
    var firstValue = arr[i];
    // console.log(firstIndex)
    var temp = 0;
    for(var j = firstIndex - 1; j >= 0; j--){
      // console.log(arr[firstIndex] < arr[j])
      if(arr[firstIndex] < arr[j]){
        temp = arr[j];
        arr[j] = firstValue;
        arr[firstIndex] = temp;
        firstIndex = firstIndex - 1;
      }
    }
    // console.log(arr[index], arr[i])
  }
  return arr;
  // console.log(arr)
}

function binary_search (search, array) {

  var middleIndex = Math.floor(array.length/2);
  var start = 0;
  var last = array.length;

  // console.log(search)
  while(array[middleIndex] !== search){
    if(start === last){
      return -1;
    }
      if(search < array[middleIndex]){
        last = middleIndex - 1;
        middleIndex = Math.floor((start + last)/2);
      } else {
        start = middleIndex + 1;
        middleIndex = Math.floor((start + last)/2);
      }
  }
  return middleIndex;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);
// console.log(arrayGanjilSorted)
// console.log(arrayGenapSorted)
// // Driver code
console.log(binary_search(8, arrayGenapSorted));
console.log(binary_search(10, arrayGenapSorted));
console.log(binary_search(33, arrayGenapSorted));

console.log(binary_search(53, arrayGanjilSorted));
console.log(binary_search(3, arrayGanjilSorted));
console.log(binary_search(2, arrayGanjilSorted));

module.exports = {
  binary_search
}


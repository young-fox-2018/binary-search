'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]


/*

INITIALIZE "sorted"

LOOP "arr" starting at index 1 using var "i", INCREMENTING every loop
  LOOP "arr" through index "j" (which is index before "i"), IF "j" <= "i"-1, INCREMENTING every loop 
    IF arr[j] > arr[i]
      SWITCH arr[i] into arr[j]
  END OF LOOP
END OF LOOP
RETURN "arr"

*/

// INSERTION SORT
function ownSort(arr) {
  // Your sorting code
  var sorted = 0

  for (var i = 1; i < arr.length ; i++) {
   for (var j = 0; j <= i - 1; j++) {
      if(arr[j] > arr[i]){
        var tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
      }
    }
  }
  return arr
}

/*

INITIALIZE "iStart" as index 0
INITIALIZE "iMid" as mid index of "array"
INITIALIZE "iEnd" as index of the last item in "array" 

LOOP while "iStart" <= "iEnd"
  IF "search" is in "iMid"
    return "iMid"
  ELSE IF "search" is smaller than array[iMid]
    REASSIGN "iStart" with a value of "iMid" + 1
    REASSIGN "iMid" to the new length of array between "iStart" & "iEnd"
  ELSE IF "search" is smaller than array[iMid]
    REASSIGN "iEnd" with a value of "iMid" - 1
    REASSIGN "iMid" to the new length of array between "iStart" & "iEnd"
END OF LOOP
If nothing is found in the array, return "-1"
*/

function binarySearch (search, array) {
  // Your searching code
  var iStart = 0
  var iMid = Math.floor(array.length/2)
  var iEnd = array.length-1

  while(iStart <= iEnd){
    
    if(search === array[iMid]){
      return iMid
    }
    else if(search > array[iMid]){
      iStart = iMid + 1
      iMid = Math.floor((iEnd + iStart) / 2 )
    }
    else if(search < array[iMid]){
      iEnd = iMid - 1
      iMid = Math.floor((iEnd - iStart) / 2 )
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))   // 0
console.log(binarySearch(10, arrayGenapSorted))  // 1
console.log(binarySearch(33, arrayGenapSorted))  // -1

console.log(binarySearch(53, arrayGanjilSorted)) // 4
console.log(binarySearch(3, arrayGanjilSorted))  // 0
console.log(binarySearch(2, arrayGanjilSorted))  // -1

module.exports = {
  binarySearch
}

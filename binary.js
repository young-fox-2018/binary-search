'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let leftValue = 0;
  let tempValue = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; i >= 0; j--) {
      if ( j - 1 >= 0) {
        if (arr[j] < arr[j-1]) {
          tempValue = arr[j];
          leftValue = arr[j-1];
          arr[j] = leftValue;
          arr[j-1] = tempValue;
        }
      } else {
        break;
      }
    }
  }
 
  return arr;
}

function binarySearch (search, array) {
  let centreAdjustment = 0;
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let midValue = 0;
  let centerIndex = 0;

  while (midValue != search) {     
    centreAdjustment = Math.floor((lastIndex - firstIndex)/2);
    centerIndex = firstIndex + centreAdjustment;
    midValue = array[centerIndex];
    console.log(array);
    if (midValue == search) {
      break;
    } 

    if (centreAdjustment == 0 && array[lastIndex + 1] != search) {
      break;
    }

    if (centreAdjustment == 0 && arra[firstIndex -1] != search) {
      break;
    }

    if (search < midValue) {
        lastIndex = centerIndex - 1;
    } else {
        firstIndex = centerIndex + 1;
    }
  }

  if (midValue == search) {
    return centerIndex;
  } else {
    return -1;
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(2, arrayGenapSorted))
console.log(binarySearch(32, arrayGenapSorted))
 console.log(binarySearch(100, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))

module.exports = {
  binarySearch
}

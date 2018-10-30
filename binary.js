'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i < arr.length; i++) {

    var pembanding = arr[i];
    //cek mundur
    var j = i - 1;
    while (j >= 0 && arr[j] > pembanding) {
        // console.log(arr[j], arr[i], i, j);
        var temp = arr[j];            
        arr[j+1] = arr[j];
        arr[j] = pembanding
        // console.log(arr[j], arr[i]);
        j--;
    }
  }

  return arr;
}

function binary_search (search, array) {
  // Your searching code
  var indexAwal = 0;
    var indexAkhir = array.length - 1;
    var indexTengah = 0;
    
    var found = false;
    while (!found && indexAkhir >= indexAwal) {
        indexTengah = Math.floor((indexAkhir - indexAwal)/2) + indexAwal;

        if (array[indexTengah] === search) {
            found = true;
        }
        if (array[indexTengah] > search) {
            indexAkhir = indexTengah - 1;
        } else {
            indexAwal = indexTengah + 1;
        }
        debugger
    }

    if (found) {
        return indexTengah;
    }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

let test_array = [1, 2, 3, 4, 5];
console.log(binary_search(3, test_array) === 2); // true

test_array = [13, 19, 24, 29, 32, 37, 43];
console.log(binary_search(35, test_array) === -1); // true

test_array = [100, 120, 130, 135, 150, 170];
console.log(binary_search(135, test_array) === 3); // true

console.log(binary_search(32, [13, 19, 24, 29, 32, 37, 43]));


module.exports = {
  binary_search
}

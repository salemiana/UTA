const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO: Why is the 'binarySearch' function not running properly??
function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === element) {
<<<<<<< HEAD
      return;
=======
      return true;
>>>>>>> 600a836c048e65e5d76a35b9f726aba116177d14
    } else if (array[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
<<<<<<< HEAD
  return;
=======
  return false;
>>>>>>> 600a836c048e65e5d76a35b9f726aba116177d14
}

console.log(binarySearch(arr, 7));

module.exports = binarySearch;

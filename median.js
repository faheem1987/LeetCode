function findMedianSortedArrays(arr1, arr2) {

  var array = arr1.concat(arr2);
  var arraySize = array.length;
  var index = Math.floor(arraySize / 2);

  array.sort(function(a, b) {
    return a - b;
  });
  
  if(arraySize % 2) {
     return array[index];
  } else {
    return (array[index] + array[index -1 ]) / 2
  }
  
};
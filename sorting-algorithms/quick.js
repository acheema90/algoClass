function quick(arr) {
    return quickSort(arr, 0, arr.length-1);
}

function quickSort(arr, left, right) {
   let pivot;
   let partitionIndex;
   if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right) {
   let pivotValue = arr[pivot];
   let partitionIndex = left;
   for (let i = left; i < right; i += 1) {
       if (arr[i] < pivotValue) {
           swap(arr, i, partitionIndex);
           partitionIndex += 1;
       }
   }
   swap(arr, right, partitionIndex);
   return partitionIndex;
}

function swap(arr, i, j) {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

quick([9,8,1,3,5,6,7,11,0,4]);

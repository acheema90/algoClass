/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/
// O(nlogn)
function mergeSort(m) {
    // Base case: list of 0 or 1 elements is sorted by definition.
    if (m.length <= 1) {
        return m;
    }
    /* Recursive case:
     * Divide the list into equal-sized sublists.
     * Recursively sort both sublists
     * Then merge the sorted sublists
    */
    let left = [];
    let right = [];
    for (let i = 0; i < m.length; i += 1) {
        if (i < m.length/2) {
            left.push(m[i]);
        } else {
            right.push(m[i]);
        }
    }
    // Recursively sort both sublists
    left = mergeSort(left);
    right = mergeSort(right);
    // then merge the sorted sublists
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let iL = 0;
    let iR = 0;
    while (iL < left.length && iR < right.length) {
        if (left[iL] <= right[iR]) {
            result.push(left[iL++]);
        } else {
            result.push(right[iR++]);
        }
    }
    while (iL < left.length) {
        result.push(left[iL++]);
    }
    while (iR < right.length) {
        result.push(right[iR++]);
    }
    return result;
}

mergeSort([9,8,1,3,5,6,7,11,0,4]); // [0, 1, 3, 4, 5, 6, 7, 8, 9, 11]

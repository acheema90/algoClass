/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)
*/

// O(n^2)
function bubbleSort(list) {
    // Outler loop is O(n)
    for (let i = 0; i< list.length; i += 1) {
        // inner loop is O(n)
        for (let j = 1; j <= list.length-1; j += 1) {
            if (list[j-1] > list[j]) { // constant
                let temp = list[j]; // constant
                list[j] = list[j-1]; // constant
                list[j-1] = temp; // constant
            }
        }
    }
    return list; // constant
}

bubbleSort([9,8,1,3,5,6,7,11,0,4]); // [0, 1, 3, 4, 5, 6, 7, 8, 9, 11]

/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/
let fibo = (n) => {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
};
fibo(9);

/**
Non-recursive solution
let fibo = (n) => {
    let arr = [0, 1];
    if(n <= 2) {
        return 1;
    }
    for (let i = 2; i <= n; i += 1) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};
fibo(9);
*/

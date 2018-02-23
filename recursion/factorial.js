/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/
let factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n-1);
};
factorial(5);

/**
Non-recursive:
let factorial = (n) => {
    let fact = 1;
    for(let i = 1; i <= n; i += 1){
        fact *= i;
    }
    return fact;
};
factorial(5);
*/

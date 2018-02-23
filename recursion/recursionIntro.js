//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function looper(n) {
    while (n !== 0) {
        console.log(`n was ${n}`);
        n--;
    }
    return 'finished';
}

//2. Next, try looping just like above except using recursion
function recursiveLooper(n) {
    console.log(`n was ${n}`);
    if (n === 0) {
        return 'finished';
    }
    return recursiveLooper(n-1);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
    let n = 1;
    while (expo > 0) {
        n *= base;
        expo--;
    }
    return n;
}
exponent(2, 10);

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function RecursiveExponent(base, expo) {
    if (expo <= 0) {
        return 1;
    }
    return base * RecursiveExponent(base, expo - 1);
}
RecursiveExponent(2, 10);

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
    let result = [];
    let multiply = function(originalArr) {
        if (originalArr.length === 0) {
            return;
        } else {
            result.push(num * originalArr.shift());
        }
        return multiply(originalArr);
    };
    multiply(arr);
    return result;
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
    let result = [];
    let addItems = function(orderedArr) {
        if (orderedArr.length === 0) {
            return;
        } else {
            result.push(orderedArr[orderedArr.length-1]);
            orderedArr.pop();
        }
        return addItems(orderedArr);
    };
    addItems(arr);
    return result;
}

/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/
function reverseStr(str) {
    let rev = [];
    let arr = str.split('');
    function reverser(arr) {
        if (arr.length === 0) {
            return;
        } else {
            rev.push(arr.pop());
        }
        return reverser(arr);
    };
    reverser(arr);
    return rev.join('');
};

reverseStr('abcdefg');

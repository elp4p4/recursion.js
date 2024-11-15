// *************************Fibonacci Sequence*************************

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}

// *************************Palindrome Checker*************************


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}


// *************************Power Function*************************


function power(n, exp) {
    return exp === 0 ? 1 : n * power(n, exp - 1);
}

